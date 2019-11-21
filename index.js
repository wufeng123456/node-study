const chalk = require('chalk')
const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const router = require('koa-router')()
const server = new Koa()
console.log(111)

server.use(bodyParser())

router.get('/api/:name', (ctx, next) => {
  const name = ctx.params.name
  ctx.response.body = `hello, ${name}`
})

router.get('/api', (ctx, next) => {
  const name = ctx.params.name
  // ctx.response.type = 'application/html'
  ctx.response.body = `<h1>login</h1>
    <form action="/api/sigin" method="post">
      <p>name: <input name="name" value="koa"></>
      <p>password: <input name="password" type="password"></>
      <p><input type="submit" value="submit"></p>
    </form>`
  // console.log(ctx.response)
})

router.post('/api/sigin', (ctx, next) => {
  const name = ctx.request.body.name
  const password = ctx.request.body.password
  if (name === 'wufeng' && password === "wf123456") {
    ctx.response.body = `<p>welcome ${name}</p>`
  } else {
    ctx.response.body = `
      <p>login failed</p>
      <div><a href="/api">try again</a></div>
    `
  }
})

server.use(router.routes())

server.listen(8999)

console.log(chalk.yellow('server is listening at 8999'))