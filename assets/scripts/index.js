'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

$(() => {
  setAPIOrigin(location, config)
})

// use require without a reference to ensure a file is bundled
require('./main')
require('./getapi')
require('./postapi')
require('./patchapi')
require('./deleteapi')
require('./gamelogic')

const authEvents = require('./events')

// On document ready
$(() => {
  authEvents.addHandlers()
})
