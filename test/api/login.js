const { expect } = require('chai')
const { Api } = require('../../src/api')
const { authServiceMock } = require('../lib/auth-service-mock')
const { greetingServiceMock } = require('../lib/greeting-service-mock')
const { client } = require('../lib/client')

const api = new Api(authServiceMock, greetingServiceMock)

const VALID_CREDENTIALS = { name: 'TestUser', password: 'TestPassword' }
const INVALID_CREDENTIALS = { name: 'UnrecognizedUser', password: 'UnrecognizedPassword' }

const TEST_TOKEN = 'TestToken'
describe('Login HTTP API', () => {
  before('start api', () => {
    api.listen()
  })

  after('stop api', () => {
    api.stop()
  })

  before('setup test token', () => {
    authServiceMock._setTestToken(TEST_TOKEN)
  })

  it('should return status 200 on valid credentials', async () => {
    const { status } = await client.post('/login', VALID_CREDENTIALS)
    expect(status).to.equal(200)
  })

  it('should return a token for valid credentials', async () => {
    const { data } = await client.post('/login', VALID_CREDENTIALS)
    expect(data).to.equal(TEST_TOKEN)
  })

  it('should supply provided credentials to auth service for validation', async () => {
    await client.post('/login', VALID_CREDENTIALS)
    expect(authServiceMock._getAreValidCredentialsArg()).to.deep.equal(VALID_CREDENTIALS)
  })

  it('should supply provided credentials to auth service for getting token', async () => {
    await client.post('/login', VALID_CREDENTIALS)
    expect(authServiceMock._getGetTokenForCredentialsArg()).to.deep.equal(VALID_CREDENTIALS)
  })

  it('should return status 401 on invalid credentials', async () => {
    authServiceMock._setCredentialValidationResult(false)
    const { status } = await client.post('/login', INVALID_CREDENTIALS, {
      validateStatus: status => status === 401,
    })
    expect(status).to.equal(401)
  })
})
