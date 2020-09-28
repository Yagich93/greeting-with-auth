const { expect } = require('chai')
const { Launcher } = require('../../src/launcher')
const { client } = require('../lib/client')

const launcher = new Launcher()

describe('Login End-to-end', () => {
  before('launch server', () => {
    launcher.start()
  })

  after('launch server', () => {
    launcher.stop()
  })

  it('should return token for existing user', async () => {
    const { data: token } = await client.post('/login', {
      name: 'PoliteUser',
      password: 'GoodMorning',
    })
    expect(token).to.equal('abc123')
  })
})
