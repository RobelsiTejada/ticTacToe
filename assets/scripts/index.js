'use strict'

const setAPIOrigin = require('./../../lib/set-api-origin')
const config = require('./config')

// $(() => {
//   setAPIOrigin(location, config)
// })

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
  $('#startgame').click(function () {
    $('table').toggle()
  })
  $('#checkout').hide()
  $('#newpassword').hide()
  $('#newusererrorp').hide()
  $('#newuser2').hide()
  $('#loginerrorp').hide()
  $('#logedin').hide()
  $('#checkout').hide()
  $('#passwordChange').hide()
  $('#startgame').hide()
  $('.turn').hide()
  $('.changepass').hide()
  $('table').hide()
  $('#authenticate').show()
  $('#newuser').show()
  $('#login').show()
  setAPIOrigin(location, config)
  userEvents.addHandlers()
})
