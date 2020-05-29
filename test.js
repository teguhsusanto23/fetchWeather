'use strict'

const weather = require('./weather').weather
const expect = require('chai').expect

describe('User module', () => {
  describe('"up"', () => {
    it('should export a function', () => {
      expect(weather.getWeatherInfo()).to.be.a('function')
    })
  })
})