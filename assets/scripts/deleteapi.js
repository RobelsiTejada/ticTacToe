'use strict'

const app = require('./config.js')

const username = function (username) {
  return $.ajax({
    url: app.host + '/players/' + (username),
    method: 'DELETE'
  })
}

const email = function (email) {
  return $.ajax({
    url: app.host + '/players/' + email,
    method: 'DELETE'
  })
}

module.exports = {
  username,
  email
}
