'use strict'
const app = require('./app.js')

const signUp = function (data) {
  return $.ajax({
    url: app.host + '/sign-up/',
    method: 'POST',
    data: {
      'credentials': {
        'email': data.credentials.email,
        'password': data.credentials.password,
        'password_confirmation': data.credentials.password
      }
    }
  })
}

const signIn = function (data) {
  return $.ajax({
    url: app.host + '/users/'.id,
    method: 'GET',
    data: {
      'credentials': {
        'email': data.credentials.email,
        'password': data.credentials.password
      }
    }
  })
}

const signOut = function () {
  return $.ajax({
    method: 'DELETE',
    url: app.host + '/sign-out/' + app.user.id,
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const changePassword = function (data) {
  return $.ajax({
    method: 'PATCH',
    url: app.host + '/change-password/' + app.user.id,
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data: data
  })
}

const createGame = function () {
  return $.ajax({
    // console.log(app.host.games)
    method: 'POST',
    url: app.host + '/games',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const retrieveGames = function () {
  return $.ajax({
    method: 'GET',
    url: app.host + '/games?over=true',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const makeMove = function (index, value, over) {
  return $.ajax({
    method: 'PATCH',
    url: app.host + '/games/' + app.game.id,
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data: {
      'game': {
        'table': {
          'td': index,
          'value': value
        },
        'over': over
      }
    }
  })
}

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
  createGame,
  retrieveGames,
  makeMove
}
