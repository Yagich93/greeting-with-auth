module.exports = api => {
  const { router, authService } = api

  router.post('/login', async ctx => {
    const credentials = ctx.request.body
    if (!authService.areValidCredentials(credentials)) {
      ctx.status = 401
      return
    }
    ctx.body = authService.getTokenForCredentials(credentials)
  })
}
