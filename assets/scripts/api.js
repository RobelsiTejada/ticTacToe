'use strict'

const app = require('../app.js')

const signUp = (data) =>
  new Promise(function (resolve, reject) {
    if (Math.random() > 0.5) {
      resolve('in signUp')
    } else {
      const error = new Error('Random')
      error.data = data
      reject(error)
    }
  })

const index = function () {
  return $.ajax({
    url: app.host + '/players',
    method: 'GET'
  })
}

const show = function (id) {
  return $.ajax({
    url: app.host + '/players/' + id,
    method: 'GET'
  })
}

const destroy = function (id) {
  return $.ajax({
    url: app.host + '/players/' + id,
    method: 'DELETE'
  })
}

const update = function (data) {
  return $.ajax({
    url: app.host + '/players/' + data.player.id,
    method: 'PATCH',
    data
  })
}

const create = function (data) {
  return $.ajax({
    url: app.host + '/players',
    method: 'POST',
    data
  })
}

module.exports = {
  signUp,
  index,
  show,
  destroy,
  update,
  create
}
