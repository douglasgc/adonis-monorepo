'use strict'

class AuthController {
  async login(
    { request, response, auth }
  ) {
    const { email, password } = request.all()
    console.log(email, password);

    try {
      return await auth.withRefreshToken().attempt(email, password);
    } catch (err) {
      response.status(401).send({ error: 'Invalid email or password' });
    }
  }
}

module.exports = AuthController
