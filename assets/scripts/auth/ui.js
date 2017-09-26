'use strict'

const app = require('../app.js')

const signInSuccess = (data) => {
  app.user = data.user
  $('#authenticate').hide()
  $('#newpassword').hide()
  $('#login').hide()
  $('#checkout').show()
  $('#logedin').show()
  $('#passwordChange').show()
  $('.game-board').show()
  $('.table').show()
  $('#startgame').hide()
  console.log(data)
}

const signOutSuccess = () => {
  app.user = null
  $('#newpassword').hide()
  $('#checkout').hide()
  $('#passwordChange').hide()
  $('#newuser2').hide()
  $('#logedin').hide()
  $('#authenticate').show()
  $('#newuser').show()
  $('#login').show()
  $('.table').hide()
  $('.game-board').hide()
}

const changePasswordSuccess = () => {
  $('#newpassword').hide()
}

const signUpSuccess = (data) => {
  $('#newusererrorp').hide()
  $('#newuser').hide()
  $('#newpassword').hide()
  $('#passwordChange').hide()
  $('#newuser2').show()
  console.log(data)
}

const signUpFailure = (error) => {
  console.error(error)
  $('#newpassword').hide()
  $('#passwordChange').hide()
}

const signInFailure = (error) => {
  console.error(error)
  $('#passwordChange').hide()
  $('#loginerrorp').show()
}

const success = (data) => {
  console.log(data)
}

const failure = (error) => {
  console.error(error)
}

module.exports = {
  failure,
  success,
  signUpFailure,
  signInFailure,
  signInSuccess,
  signOutSuccess,
  changePasswordSuccess,
  signUpSuccess
}
