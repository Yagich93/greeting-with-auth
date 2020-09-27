class AuthService {
  constructor(userDb) {
    this.userDb = userDb
  }

  isValidToken(token) {
    const user = this.userDb.findByToken(token)
    return !!user
  }
}

module.exports = { AuthService }
