class AuthService {
  constructor(userDb) {
    this.userDb = userDb
  }

  areValidCredentials(credentials) {
    const user = this.userDb.findByCredentials(credentials)
    return !!user
  }

  isValidToken(token) {
    const user = this.userDb.findByToken(token)
    return !!user
  }

  getTokenForCredentials(credentials) {
    const user = this.userDb.findByCredentials(credentials)
    return user.token
  }
}

module.exports = { AuthService }
