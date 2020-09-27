const authServiceMock = {
  validationResult: true,

  isValidToken: function(token) {
    this._lastToken = token
    return this.validationResult
  },

  _getLastReceivedToken: function() {
    return this._lastToken
  },

  _setTokenValidationResult: function(validationResult) {
    this.validationResult = validationResult
  }
}

module.exports = { authServiceMock }
