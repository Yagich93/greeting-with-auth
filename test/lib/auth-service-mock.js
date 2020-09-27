const authServiceMock = {
  _tokenValidationResult: true,
  _credentialValidationResult: true,

  areValidCredentials: function(credentials) {
    this._areValidCredentialsArg = credentials
    return this._credentialValidationResult
  },

  getTokenForCredentials: function(credentials) {
    this._getTokenForCredentialsArg = credentials
    return this._testToken
  },

  isValidToken: function(token) {
    this._lastToken = token
    return this._tokenValidationResult
  },

  _getAreValidCredentialsArg: function() {
    return this._areValidCredentialsArg
  },

  _getGetTokenForCredentialsArg: function() {
    return this._getTokenForCredentialsArg
  },

  _getLastReceivedToken: function() {
    return this._lastToken
  },

  _setTestToken: function(token) {
    this._testToken = token
  },

  _setTokenValidationResult: function(validationResult) {
    this._tokenValidationResult = validationResult
  },

  _setCredentialValidationResult: function(validationResult) {
    this._credentialValidationResult = validationResult
  },
}

module.exports = { authServiceMock }
