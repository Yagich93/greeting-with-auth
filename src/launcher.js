const { Api } = require('./api')
const { GreetingService } = require('./services/greeting')
const { AuthService } = require('./services/auth')
const { UserDb } = require('./db/user-db')

class Launcher {
  constructor() {
    this.userDb = new UserDb()
    this.authService = new AuthService(this.userDb)
    this.greetingService = new GreetingService()
    this.api = new Api(this.authService, this.greetingService)
  }

  start(options = {}) {
    this.api.listen(options)
  }

  stop() {
    this.api.stop()
  }
}

module.exports = { Launcher }
