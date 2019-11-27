const router = require('koa-router')()

router.prefix('/api')

router.get('/:name', (ctx, next) => {
  const name = ctx.params.name
  ctx.response.body = `hello, ${name}`
})

router.get('/', (ctx, next) => {
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

router.post('/sigin', (ctx, next) => {
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

module.exports = router