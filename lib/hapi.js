const gulp = require('gulp')
const gulpif = require('gulp-if')
const fs = require('fs')
const path = require('path')
const readline = require('readline')
const minimist = require('minimist')
const rimraf = require('rimraf')
const mkdirp = require('mkdirp')
const pump = require('pump')
const logger = require('./logger')
    ; require("color");

const apiFuncTemplateFactory = require("./apifunc_template")
const knownOptions = {
    default: { env: process.env.NODE_ENV || 'development' }
}
function HapiUtil(filePath) {
    const { name, forwardUrl } = minimist(process.argv.slice(2), knownOptions)
    this.name = name
    this.apis = filePath ? require(filePath) : ""
    this.beforeApiFileName = []
    this.anazApis = function anazApis(api) {
        const { server } = minimist(process.argv.slice(2), knownOptions)
        const method = api.method
        const path = api.path
        let headers = {}
        if (api.req_headers && api.req_headers.length) {
            for (const item of api.req_headers) {
                headers[item.name] = item.value
            }
        }
        if (forwardUrl) {
            headers["forwardUrl"] = forwardUrl
        }
        const paths = (path.replace(/^\//, "")).split('/')
        const funcName = paths[paths.length - 1]
        const dataType = api.res_body_type
        const options = {
            headers: headers,
            method,
            dataType
        }
        let dirPath, mockPath, fileName
        dirPath = './src/components/api/'
        if (paths.length - 3 >= 0) {
            dirPath += `${paths.length - 2 === 1 ? paths.slice(0, paths.length - 2) + "/" : paths.slice(0, paths.length - 2).join('/') + "/"}`
        }
        if (server === "mock") {
            // 生成 mock 数据
            mockPath = './dist/mock/'
            if (paths.length > 1) mockPath += paths.slice(0, paths.length - 1).join("/")
            fileName = paths[paths.length - 1];
        }
        ; (new MockFactory(mockPath, fileName, api.res_body)).build((mockData) => {
            const content = apiFuncTemplateFactory(funcName, path, options, server, mockData);
            mkdirp(dirPath, err => {
                if (err) logger.error(err)
                else {
                    const fileName = paths.length - 2 >= 0 ? paths[paths.length - 2] : 'api'
                    const filePath = `${dirPath.concat(`${fileName}`)}.js`
                    const fileExist = (this.beforeApiFileName.findIndex(item => item == filePath) > -1)
                    const fileContent = (!this.beforeApiFileName.length || !fileExist) ? `
import CONSTANTS from "_constants/index"
${content}
`: content
                    !fileExist && (this.beforeApiFileName.push(filePath))
                    fs.appendFile(filePath, fileContent, 'utf-8', error => {
                        if (error) logger.error(error)
                    })
                }
            })
        })
    }

    function MockFactory(path, fileName, resBody) {
        this.path = path;
        this.fileName = fileName;
        this.resBody = resBody;
    }
    MockFactory.prototype = {
        build: function (callback) {
            if (!this.path) {
                callback instanceof Function && callback()
                return
            }
            mkdirp(this.path, err => {
                if (err) console.error(err)
                else {
                    const content = this.buildMockData(JSON.parse(this.resBody)).replace(/\\\"/g, "")
                    const fw = fs.createWriteStream(`${this.path.concat(`/${this.fileName}`)}.json`, {
                        flags: 'w',
                        defaultEncoding: 'utf8',
                    })
                    fw.write(content, () => {
                        callback instanceof Function && callback(content)
                        fw.close()
                    })
                }
            })
        },
        buildValueByDataType: function (key, dataObj) {
            const type = dataObj.type;
            switch (type) {
                case "string":
                    return `"${key}_${Math.floor(Math.random() * 10)}"`;
                case "number":
                    return Math.floor(Math.random() * 10);
                case "array":
                    let a_result = new Array()
                    const items = dataObj.items;
                    const count = Math.floor(Math.random() * 15)
                    for (let i = 0; i < count; i++) {
                        a_result.push(this.buildValueByDataType(null, items))
                    }
                    return a_result;
                case "object":
                    let o_result = new Object()
                    const properties = dataObj.properties;
                    for (const key in properties) {
                        o_result[key] = this.buildValueByDataType(key, properties[key])
                    }
                    return o_result;
                default:
                    return null;
            }
        },
        buildMockData: function (body) {
            let result = {}
            try {
                const properties = body.properties;
                if (!properties) {
                    result = {
                        "code": 0,
                        "msg": "mock请求成功",
                        "success": true
                    }
                } else {
                    const data = properties["data"];
                    let obj = new Object()
                    if (data) obj = this.buildValueByDataType("data", data)
                    result = {
                        "code": 0,
                        "data": data ? obj : null,
                        "msg": "mock请求成功",
                        "success": true
                    }
                }
            } catch (error) {
                logger.error(error.red)
            }
            return JSON.stringify(result, null, 4)
        }
    }
}
HapiUtil.prototype = {
    build: async function (type) {
        try {
            const name = this.name
            const nameArr = name.split('/')
            const fileName = nameArr[nameArr.length - 1]
            let filePath = null
            if (nameArr.length > 1) {
                filePath = nameArr.slice(0, nameArr.length - 1).join('/')
            }
            const destPath = `./src/${type}/${filePath ? `${filePath}/${fileName}` : fileName}`
            const hasExist = fs.existsSync(destPath);
            if (!hasExist && type === "pages") {
                const appPath = "./src/app.json";
                const appConfig = JSON.parse(fs.readFileSync(appPath, { encoding: "utf-8" }));
                appConfig.pages.push(`pages/${filePath ? `${filePath}/${fileName}` : fileName}/index`)
                const appConfigStr = JSON.stringify(appConfig, null, "\t");
                fs.writeFileSync(appPath, appConfigStr)
            }
            const start = +new Date()
            return pump([
                gulp.src(path.resolve(__dirname, `./../src/${type}/_template/*.*`)),
                gulpif(!hasExist,
                    gulp
                        .dest(destPath)
                        .on("end", function () {
                            const lessFile = fs.readFileSync(`${destPath}/index.less`, { encoding: "utf-8" });
                            fs.writeFileSync(`${destPath}/index.less`, lessFile.replace(/\.hp-_template/g, `.${fileName.toLowerCase()}`))
                            const axmlFile = fs.readFileSync(`${destPath}/index.axml`, { encoding: "utf-8" });
                            fs.writeFileSync(`${destPath}/index.axml`, axmlFile.replace(/hp-_template/g, fileName.toLowerCase()))
                            if (type === "components") {
                                const pkgFile = fs.readFileSync(`${destPath}/package.json`, { encoding: "utf-8" });
                                fs.writeFileSync(`${destPath}/package.json`, pkgFile.replace(/_template/g, fileName.toLowerCase()))
                            }
                            logger.info(`创建成功: ${type}/${fileName}`.green);
                            logger.info(`耗时: ${(+new Date() - start) / 1000}ms`.green);
                        }))
                    .on("error", function (err) {
                        logger.error(err.red)
                    })
            ])
        } catch (error) {
            logger.error(error.red)
        }
    },
    remove: async function () {
        try {
            const destPath = `./src/${this.name}`
            const rl = readline.createInterface({
                input: process.stdin,
                output: process.stdout
            })
            return rl.question(`您当前正在进行删除操作\n删除路径：${destPath}\n是否继续,Yes or No?`.red, answer => {
                if (answer.toUpperCase() === "YES" || answer.toUpperCase() === "Y") {
                    if (/^pages/.test(this.name)) {
                        const appPath = "./src/app.json";
                        const appConfig = JSON.parse(fs.readFileSync(appPath, { encoding: "utf-8" }));
                        let index = 0;
                        for (const item of appConfig.pages) {
                            if (item === `${this.name}/index`) {
                                appConfig.pages.splice(index, 1);
                                break;
                            }
                            index++
                        }
                        const appConfigStr = JSON.stringify(appConfig, null, "\t");
                        fs.writeFileSync(appPath, appConfigStr)
                    }
                    const start = +new Date()
                    rimraf.sync(destPath)
                    logger.info(`删除成功: ${this.name}`.green);
                    logger.info(`耗时: ${(+new Date() - start) / 1000}ms`.green);
                }
                process.exit(0)
            })
        } catch (error) {
            logger.error(error)
        }
    },
    api: async function () {
        rimraf.sync(`./src/components/api`)
        rimraf.sync(`./dist/mock`)
        const apis = this.apis;
        const { index } = minimist(process.argv.slice(2), knownOptions)
        let _apis = apis
        if (index !== undefined && apis[index]) {
            _apis = apis[index]
        }
        const _apiArr = (_apis instanceof Array ? _apis : [_apis])
        let result = []
        for (const item of _apiArr) {
            result = result.concat(item.list)
        }
        for (let i = 0; i < result.length; i++) {
            this.anazApis(result[i])
        }
    }
}
module.exports = HapiUtil