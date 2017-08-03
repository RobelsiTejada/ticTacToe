'use strict'

const app = require('./config.js')

const email = function (email) {
  return $.ajax({
    url: app.host + '/players/' + email,
    method: 'PATCH'
  })
}

const avatar = function (avatar) {
  return $.ajax({
    url: app.host + '/players/' + avatar,
    method: 'PATCH'
  })
}

const gamepiece = function (gamepiece) {
  return $.ajax({
    url: app.host + '/players/' + gamepiece,
    method: 'PATCH'
  })
}

const record = function (record) {
  return $.ajax({
    url: app.host + '/players/' + record,
    method: 'PATCH'
  })
}

module.exports = {
  email,
  avatar,
  gamepiece,
  record
}
