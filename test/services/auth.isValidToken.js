const chai = require('chai')

const { AuthService } = require('../../src/services/auth')
const { userDbMock } = require('../lib/user-db-mock')

const { expect } = chai

const authService = new AuthService(userDbMock)

const SAMPLE_USER = {
  name: 'User',
  password: 'Pass',
  token: 'Token',
}

describe('Auth Service - isValidToken', () => {
  it('should return true for valid token', async () => {
    userDbMock._setSearchResult(SAMPLE_USER)
    expect(authService.isValidToken('valid token')).to.equal(true)
  })

  it('should return false for invalid token', async () => {
    userDbMock._setSearchResult(null)
    expect(authService.isValidToken('invalid token')).to.equal(false)
  })
})
