'use strict'

const setAPIOrigin = require('./../../lib/set-api-origin')
const config = require('./config')

$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example');
require('./app')
require('./auth/api')
require('./auth/ui')
require('./gamelogic')

const userEvents = require('./auth/events')

// On document ready
$(() => {
  $('#passwordChange').click(function () {
    $('#newpassword').toggle()
  })
  $('#newgame').click(function () {
    $('.gameBoard').show()
  })
  $('#checkout').hide()
  $('#newpassword').hide()
  $('#newusererrorp').hide()
  $('#newuser2').hide()
  $('#loginerrorp').hide()
  $('#logedin').hide()
  $('#checkout').hide()
  $('#passwordChange').hide()
  $('.changepass').hide()
  $('.turn').hide()
  $('#authenticate').show()
  $('#newuser').show()
  $('#login').show()
  $('.messages').show()
  $('#get-games').hide()
  $('#newgame').hide()
  $('.gameBoard').hide()
  userEvents.addHandlers()
})
