const { expect } = require('chai')
const { Api } = require('../../src/api')
const { authServiceMock } = require('../lib/auth-service-mock')
const { greetingServiceMock } = require('../lib/greeting-service-mock')
const { client } = require('../lib/client')

const api = new Api(authServiceMock, greetingServiceMock)

describe('Greeting HTTP API', () => {
  before('start api', () => {
    api.listen()
  })

  after('stop api', () => {
    api.stop()
  })

  it('should return status 200', async () => {
    const { status } = await client.get('/greeting')
    expect(status).to.equal(200)
  })

  it('should return a string', async () => {
    const { data } = await client.get('/greeting')
    expect(data).to.be.an('string')
  })

  it('should supply auth header to auth service', async () => {
    const testToken = 'Auth Token'
    await client.get('/greeting', { headers: { 'X-Auth-Token': testToken } })
    expect(authServiceMock._getLastReceivedToken()).to.equal(testToken)
  })

  it('should return status 401 on invalid token', async () => {
    authServiceMock._setTokenValidationResult(false)
    const { status } = await client.get('/greeting', { validateStatus: status => status === 401 })
    expect(status).to.equal(401)
  })
})
