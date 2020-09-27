class AuthService {
  constructor(userDb) {
    this.userDb = userDb
  }

  isValidToken(token) {
    const user = this.userDb.findByToken(token)
    return !!user
  }

  areValidCredentials(credentials) {
    const user = this.userDb.findByCredentials(credentials)
    return !!user
  }
}

module.exports = { AuthService }
