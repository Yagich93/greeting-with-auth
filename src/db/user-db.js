const USERS = [{ name: 'PoliteUser', password: 'GoodMorning', token: 'abc123' }]

class UserDb {
  constructor() {}

  findByToken(token) {
    const foundUser = USERS.find(user => user.token === token)
    return foundUser || null
  }

  findByCredentials(credentials) {
    const foundUser = USERS.find(user => this._doesUserMatchCredentials(user, credentials))
    return foundUser || null
  }

  _doesUserMatchCredentials(user, credentials) {
    return user.name === credentials.name && user.password === credentials.password
  }
}

module.exports = { UserDb }
