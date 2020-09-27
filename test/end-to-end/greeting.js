const { expect } = require('chai')
const { Launcher } = require('../../src/launcher')
const { client } = require('../lib/client')

const launcher = new Launcher()

describe('Greeting End-to-end', () => {
  before('launch server', () => {
    launcher.start()
  })

  after('launch server', () => {
    launcher.stop()
  })

  it('should greet authenticated user', async () => {
    const { data: greeting } = await client.get('/greeting', {
      headers: { 'X-Auth-Token': 'abc123' }
    })
    expect(greeting).to.equal('Hello!')
  })
})
