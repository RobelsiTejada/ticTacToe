'use strict'

const setAPIOrigin = require('~/lib/set-api-origin')
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
const playerEvents = require('./events')

// On document ready
$(() => {
  $('#games-search').on('submit', playerEvents.onGetplayers)
  $('#signIn').on('submit', playerEvents.onGetplayer)
  $('#signOut').on('submit', playerEvents.onDeleteplayer)
  $('#update').on('submit', playerEvents.onUpdateplayer)
})
