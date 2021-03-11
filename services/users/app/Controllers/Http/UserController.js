'use strict'
const User = use('App/Models/User')

class UserController {
  async create(
    { request }
  ) {
    const user = new User()

    const query = request.all()

    user.name = query.name
    user.email = query.email
    user.password = query.password

    await user.save()
    return {success: true};
  }
  async list() {
    return await User.all()
  }
}

module.exports = UserController
