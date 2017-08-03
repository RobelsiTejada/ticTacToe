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

const avatar = function (avatar) {
  return $.ajax({
    url: app.host + '/players/' + avatar,
    method: 'POST'
  })
}

const gamepiece = function (gamepiece) {
  return $.ajax({
    url: app.host + '/players/' + gamepiece,
    method: 'POST'
  })
}

const record = function (record) {
  return $.ajax({
    url: app.host + '/players/' + record,
    method: 'POST'
  })
}

module.exports = {
  username,
  email,
  avatar,
  gamepiece,
  record
}
