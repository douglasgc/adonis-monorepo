'use strict'
const User = use('App/Models/User')
const Token = use('App/Models/Token')

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
    return { success: true };
  }
  async list() {
    return await User.all()
  }
  async find({ params }) {
    return await User.findOrFail(params.id)
  }
  async delete({ params }) {
    const user = await User.findOrFail(params.id)
    await Token
      .query()
      .where('user_id', params.id)
      .delete()
    await user.delete()
  }
  async changePassword({ params, request }) {
    const user = await User.findOrFail(params.id)
    user.password = request.all().password
    await user.save()
  }
}

module.exports = UserController
