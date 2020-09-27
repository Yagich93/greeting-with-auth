const chai = require('chai')

const { AuthService } = require('../../src/services/auth')
const { userDbMock } = require('../lib/user-db-mock')

const { expect } = chai

const authService = new AuthService(userDbMock)

const SAMPLE_CREDENTIALS = {
  name: 'User',
  password: 'Pass',
}

const SAMPLE_USER = {
  ...SAMPLE_CREDENTIALS,
  token: 'Token',
}

describe('Auth Service - getTokenForCredentials', () => {
  it('should return token for credentials', async () => {
    userDbMock._setSearchResult(SAMPLE_USER)
    expect(authService.getTokenForCredentials(SAMPLE_CREDENTIALS)).to.equal(SAMPLE_USER.token)
  })
})
