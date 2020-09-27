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

describe('Auth Service - areValidCredentials', () => {
  it('should return true for valid credentials', async () => {
    userDbMock._setSearchResult(SAMPLE_USER)
    expect(authService.areValidCredentials(SAMPLE_CREDENTIALS)).to.equal(true)
  })

  it('should return false for invalid credentials', async () => {
    userDbMock._setSearchResult(null)
    expect(authService.areValidCredentials(SAMPLE_CREDENTIALS)).to.equal(false)
  })
})
