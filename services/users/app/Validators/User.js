'use strict'

class User {
  get rules () {
    return {
      email: 'required|email|unique:users,email',
      name: 'required',
      password: 'required'
    }
  }
}

module.exports = User
