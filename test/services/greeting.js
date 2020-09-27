const chai = require('chai')
const { GreetingService } = require('../../src/services/greeting')

const { expect } = chai

const greetingService = new GreetingService()

describe('Greeting Service', () => {
  it('should return a greeting string', async () => {
    const greeting = greetingService.getGreeting()
    expect(greeting).to.equal('Hello!')
  })
})
