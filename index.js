const router = require('./routers/index.js')
const chalk = require('chalk')
const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const server = new Koa()

server.use(bodyParser())

server.use(router.routes())

server.listen(8999)

console.log(chalk.yellow('server is listening at 8999'))