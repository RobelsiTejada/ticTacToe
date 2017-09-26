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
// use require without a reference to ensure a file is bundled
// require('./example');
//
const userEvents = require('./auth/events')

// On document ready
$(() => {
  $('#passwordChange').click(function () {
    $('#newpassword').toggle()
  })
  $('#messages').show()
  $('#checkout').hide()
  $('#newpassword').hide()
  $('#newusererrorp').hide()
  $('#newuser2').hide()
  $('#loginerrorp').hide()
  $('#logedin').hide()
  $('.changepass').hide()
  $('.game-board').hide()
  $('#checkout').hide()
  $('#passwordChange').hide()
  $('table').hide()
  $('.turn').hide()
  $('#authenticate').show()
  $('#newuser').show()
  $('#login').show()
  $('#startgame').hide()
  setAPIOrigin(location, config)
  userEvents.addHandlers()
})
