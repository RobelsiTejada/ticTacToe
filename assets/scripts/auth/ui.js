'use strict'

const app = require('../app.js')
const gameBoard = require('../index.js')

const signInSuccess = (data) => {
  app.user = data.user
  $('#authenticate').hide()
  $('#newpassword').hide()
  $('#login').hide()
  $('.turn').show()
  $('#checkout').show()
  $('#logedin').show()
  $('#passwordChange').show()
  $('#startgame').show()
  console.log(data)
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
  $('.turn').hide()
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

const gamePostSuccess = (data) => {
  $('#grid').show()
  app.game = data.game
  app.game.id = data.game.id
}

const onUpdateSuccess = () => {
  console.log('Move has been made')
}

const onResetGameSuccess = function (data) {
  // app.game = data.game
  // app.game.id = data.game.id
  console.log('Game Created!')
}

const getGameSuccess = function (data) {
  // app.game.id = data.game.id
  // app.game.over = data.game.over
  $('#games-played').text(data.games.length)
  // // assign variable to game data array
  // let games = data.games
  // // hide view button and change password form
  // $('#view-games').hide()
  // $('#passChange').hide()
  // // append table of games to page
  // $('main').append('<div class="row"> <table class="table"> <thead> <tr> <th> Game ID </th> <th> Over </th> </tr> </thead> <tbody> ')
  // //loop through each game and print out the id and whether it is over
  // games.forEach(function(game) {
  //   $('.table').append('<tr> <td> <a href="javascript:" class="get-game-id" id="' + game.id + '">' + game.id + ' </a> </td> <td>' + game.over + '</td></tr>')
  //   // assign click handler to dynamically added links
  //   $('.get-game-id').on('click', function() {
  //     event.preventDefault()
  //     //gameEvents.getGameById()
  //   })
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
  gamePostSuccess,
  onUpdateSuccess,
  getGameSuccess,
  onResetGameSuccess,
  signUpFailure,
  signInFailure,
  signInSuccess,
  signOutSuccess,
  changePasswordSuccess,
  signUpSuccess
}
