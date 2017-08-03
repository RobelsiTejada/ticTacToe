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

const avatar = function (avatar) {
  return $.ajax({
    url: app.host + '/players/' + avatar,
    method: 'DELETE'
  })
}

const gamepiece = function (gamepiece) {
  return $.ajax({
    url: app.host + '/players/' + gamepiece,
    method: 'DELETE'
  })
}

const record = function (record) {
  return $.ajax({
    url: app.host + '/players/' + record,
    method: 'DELETE'
  })
}

module.exports = {
  username,
  email,
  avatar,
  gamepiece,
  record
}
