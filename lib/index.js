var hapi = require("commander");
const HapiUtil = require("./hapi")
var pkg = require("./../package.json");
hapi
    .version(pkg.version, "-v, --version")
//     .option("new [name]", "Create a New Components by Template")
//     .option("create [name]", "Create a New Page by Template")
//     .option("rm [path]", "Remove a Module")
//     .parse(process.argv)
// const Hapi = new HapiUtil(null)
// if (hapi.new) {
//     Hapi.build('components', hapi.new)
// }
// else if (hapi.create) {
//     Hapi.build('pages')
// }
// else if (hapi.rm) {
//     Hapi.remove()
// }
hapi.option("-c, --component <value>", "配置组件模版路径")
hapi.option("-p, --page <value>", "配置页面模版路径")
hapi
    .command("new <name>")
    .description("创建一个组件模版(new xx)")
    .action(function (name) {
        const Hapi = new HapiUtil(Object.assign({ name },
            hapi.component ? { templateDir: hapi.component } : {}
        ))
        Hapi.build('components')
    })
hapi
    .command("create <name>")
    .description("创建一个页面模版(create xx)")
    .action(function (name) {
        const Hapi = new HapiUtil(Object.assign({ name },
            hapi.page ? { templateDir: hapi.page } : {}
        ))
        Hapi.build('pages')
    })
hapi
    .command("rm <path>")
    .description("删除指定路径模块(rm pages/x)")
    .action(function (path) {
        const Hapi = new HapiUtil({ path })
        Hapi.remove()
    })
hapi
    .command("api")
    .option('-m, --mock', '是否需要生成mock数据')
    .option('-u, --forwardUrl <value>', '配置forwardUrl')
    .option('-i, --index <value>', '根据索引从api文件中筛选需要生成API函数的队列')
    .option('-f, --file <value>', '配置源api文件路径')
    .description("根据YApi生成Ajax请求函数")
    .action(function (cmd) {
        const { mock, forwardUrl, index, file } = cmd
        const Hapi = new HapiUtil({
            mock,
            forwardUrl,
            index,
            file
        })
        Hapi.api()
    })
hapi.parse(process.argv)