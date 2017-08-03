'use strict'

const app = require('./config.js')

const username = function (username) {
  return $.ajax({
    url: app.host + '/players/' + (username),
    method: 'POST'
  })
}

const email = function (email) {
  return $.ajax({
    url: app.host + '/players/' + email,
    method: 'POST'
  })
}

const password = function (password) {
  return $.ajax({
    url: app.host + '/players/' + password,
    method: 'POST'
  })
}

module.exports = {
  username,
  email,
  password
}
