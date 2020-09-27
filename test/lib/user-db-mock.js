const userDbMock = {
  _foundUser: null,

  findByToken: function() {
    return this._foundUser
  },

  findByCredentials: function() {
    return this._foundUser
  },

  _setSearchResult: function(user) {
    this._foundUser = user
  },
}

module.exports = { userDbMock }
