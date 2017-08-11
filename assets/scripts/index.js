'use strict'

const setAPIOrigin = require('./../../lib/set-api-origin')
const config = require('./config')

$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example');
require('./main')
require('./api')
require('./ui')
require('./gamelogic')
// use require without a reference to ensure a file is bundled
// require('./example');
//
const userEvents = require('./events')

// On document ready
$(() => {
  $('#game').on('submit', userEvents.onGetUsers)
  $('#signIn').on('submit', userEvents.onGetUser)
  $('#signOut').on('submit', userEvents.onDeleteUser)
  $('#update').on('submit', userEvents.onUpdateUser)
})
