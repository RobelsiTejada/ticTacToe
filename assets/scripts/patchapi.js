'use strict'

const app = require('./config.js')

const email = function (email) {
  return $.ajax({
    url: app.host + '/players/' + email,
    method: 'PATCH'
  })
}

const username = function (username) {
  return $.ajax({
    url: app.host + '/players/' + username,
    method: 'PATCH'
  })
}

module.exports = {
  email,
  username
}
