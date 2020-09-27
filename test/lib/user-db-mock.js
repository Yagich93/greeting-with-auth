const userDbMock = {
  userByToken: null,

  findByToken: function() {
    return this.userByToken
  },

  _setSearchResult: function(user) {
    this.userByToken = user
  }
}

module.exports = { userDbMock }
