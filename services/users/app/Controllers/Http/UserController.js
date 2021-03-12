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
  async delete({ params, auth }) {
    const user = await User.findOrFail(params.id)
    await Token
      .query()
      .where('user_id', params.id)
      .delete()
    await user.delete()
  }
}

module.exports = UserController
