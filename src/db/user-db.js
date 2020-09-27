const USERS = [{ name: 'PoliteUser', password: 'GoodMorning', token: 'abc123' }]

class UserDb {
  constructor() {}

  findByToken(token) {
    const foundUser = USERS.find(user => user.token === token)
    return foundUser || null
  }
}

module.exports = { UserDb }
