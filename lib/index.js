var hapi = require("commander");
const HapiUtil = require("./hapi")
var pkg = require("./../package.json");
hapi
    .version(pkg.version, "-v, --version")
    .option("new [name]", "Create a New Components by Template")
    .option("create [name]", "Create a New Page by Template")
    .option("rm [path]", "Remove a Module")
    .parse(process.argv)
const Hapi = new HapiUtil(null)
if (hapi.new) {
    Hapi.build('components')
}
else if (hapi.create) {
    Hapi.build('pages')
}
else if (hapi.rm) {
    Hapi.remove()
}