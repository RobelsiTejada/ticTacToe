'use strict'

const app = require('../app.js')

const signInSuccess = (data) => {
  app.user = data.user
  $('.messages').html('You have successfully signed in. click New Game to start!')
  $('#authenticate').hide()
  $('#newpassword').hide()
  $('#login').hide()
  $('#loginerrorp').hide()
  $('.turn').show()
  $('#checkout').show()
  $('#logedin').show()
  $('#passwordChange').show()
  $('.messages').show()
  $('#get-games').show()
  $('#newgame').show()
}

const signOutSuccess = () => {
  app.user = null
  $('#newpassword').hide()
  $('#checkout').hide()
  $('#passwordChange').hide()
  $('#newuser2').hide()
  $('#logedin').hide()
  $('table').hide()
  $('.startgame').hide()
  $('#authenticate').show()
  $('#newuser').show()
  $('#login').show()
  $('.messages').html('You have successfully signed out. Thanks for playing!')
  $('.turn').hide()
  $('#get-games').hide()
  $('#newgame').hide()
  $('.gameBoard').hide()
  $('#gameStats').hide()
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

const onCreateGameSuccess = (data) => {
  app.game = data.game
  app.game.id = data.game.id
  console.log(data)
}

const onUpdateSuccess = function (data) {
  console.log(data)
}

// if game update fails
const onUpdateFail = function (error) {
  console.error(error)
}

const getSuccess = function (data) {
  $('#gameStats').html('<div class="successMessage"> Games Played:' + data.games.length + '</div>')
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
  signUpSuccess,
  getSuccess,
  onCreateGameSuccess,
  onUpdateSuccess,
  onUpdateFail
}
