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
hapi
    .command("new <name>")
    .description("创建一个组件模版(new xx)")
    .action(function (name) {
        const Hapi = new HapiUtil({ name })
        Hapi.build('components')
    })
hapi
    .command("create <name>")
    .description("创建一个页面模版(create xx)")
    .action(function (name) {
        const Hapi = new HapiUtil({ name })
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
    .command("api [domain, forwordUrl, index]")
    .description("根据YApi生成Ajax请求函数")
    .action(function (filePath, domain, forwordUrl, index) {
        const Hapi = new HapiUtil({ filePath, domain, forwordUrl, index })
        Hapi.api()
    })
hapi.parse(process.argv)