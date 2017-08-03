'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

$(() => {
  setAPIOrigin(location, config)
})

// use require without a reference to ensure a file is bundled
// require('./main.js')
require('./clicky.js')
require('./getapi.js')
require('./postapi.js')
require('./patchapi.js')
require('./deleteapi.js')
// require('./user.js')
// require('./gamelogic.js')
// require('./results.js')
