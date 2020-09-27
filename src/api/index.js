const Koa = require('koa')
const Router = require('@koa/router')

const loadGreetingRoutes = require('./routes/greeting')

class Api {
  constructor(authService, greetingService) {
    this.authService = authService
    this.greetingService = greetingService

    // Setup koa and router
    this.koa = new Koa()
    this.router = new Router()

    // Load routes
    loadGreetingRoutes(this)

    // Use routes
    this.koa.use(this.router.routes())
  }

  listen(options = {}) {
    const defaults = { port: 8080 }
    const { port } = { ...defaults, ...options }

    // Start http instance
    this._server = this.koa.listen(port)
    console.log('Server listening on port', port)
  }

  stop() {
    this._server.close()
  }
}

module.exports = { Api }
