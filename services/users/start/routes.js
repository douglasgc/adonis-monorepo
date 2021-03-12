'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

// users
Route.group(() => {
  Route.post('create', 'UserController.create').validator('User')
  Route.get('/', 'UserController.list').middleware(['auth'])
  Route.put('/:id/changePassword', 'UserController.changePassword').middleware(['auth'])
  Route.get('/:id', 'UserController.find').middleware(['auth'])
  Route.delete('/:id', 'UserController.delete').middleware(['auth'])
})
  .prefix('users')

// auth
Route.group(() => {
  Route.post('login', 'AuthController.login').validator('Login')
})
  .prefix('auth')