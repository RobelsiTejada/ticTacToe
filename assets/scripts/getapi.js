'use strict'

const app = require('./config.js')

const username = function (username) {
  return $.ajax({
    url: app.host + '/players/' + username,
    method: 'GET'
  })
}

module.exports = {
  username
}
