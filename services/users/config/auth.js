'use strict'

/** @type {import('@adonisjs/framework/src/Env')} */
const Env = use('Env')

console.log(`env`,Env.get(`APP_KEY`));
module.exports = {
  authenticator: 'jwt',
  jwt: {
    serializer: 'lucid',
    model: 'App/Models/User',
    scheme: 'jwt',
    uid: 'email',
    password: 'password',
    options: {
      secret: Env.get(`APP_KEY`),
      // For additional options, see the table below...
    }
  }
}