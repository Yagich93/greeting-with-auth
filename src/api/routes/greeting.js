const AUTH_HEADER_NAME = 'X-Auth-Token'

module.exports = api => {
  const { router, greetingService, authService } = api

  router.get('/greeting', async ctx => {
    const token = getAuthToken(ctx)
    if (!authService.isValidToken(token)) {
      ctx.status = 401
      return
    }
    ctx.body = greetingService.getGreeting()
  })
}

function getAuthToken(ctx) {
  return ctx.request.get(AUTH_HEADER_NAME)
}
