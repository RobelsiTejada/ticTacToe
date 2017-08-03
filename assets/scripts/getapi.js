'use strict'

const app = require('./config.js')

const username = function (username) {
  return $.ajax({
    url: app.host + '/players/' + username,
    method: 'GET'
  })
}

const avatar = function (avatar) {
  return $.ajax({
    url: app.host + '/players/' + avatar,
    method: 'GET'
  })
}

const gamepiece = function (gamepiece) {
  return $.ajax({
    url: app.host + '/players/' + gamepiece,
    method: 'GET'
  })
}

const record = function (record) {
  return $.ajax({
    url: app.host + '/players/' + record,
    method: 'GET'
  })
}

module.exports = {
  username,
  avatar,
  gamepiece,
  record
}
