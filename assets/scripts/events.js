'use strict'

const gameApi = require('./api.js')
const gameUi = require('./ui.js')
const gameLogic = require('./gamelogic.js')
const getFormFields = require(`./../../lib/get-form-fields`)

const signUp = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  if (data.credentials.password !== data.credentials.password_confirmation) {
    alert('Passwords do not match')
  } else {
    event.preventDefault()
    gameApi.signUp(data)
      .then(gameUi.signUpSuccess)
      .catch(gameUi.signUpFailure)
    $('table').show()
    $('access').hide()
  }
}

const signIn = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)
  gameApi.signIn(data)
    .then(gameUi.signInSuccess)
    .catch(gameUi.signInFailure)
  $('table').show()
  $('access').hide()
}

const signOut = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)
  gameApi.signOut(data)
    .then(gameUi.signOutSuccess)
    .catch(gameUi.onError)
}

const changePassword = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)
  gameApi.update(data)
    .then(gameUi.updateSuccess)
    .catch(gameUi.onError)
}

const createGame = function (event) {
  event.preventDefault()
  gameLogic.newGame()
  gameApi.createGame()
    .then(gameUi.postSuccess)
    .catch(gameUi.onError)
}

const makeMove = function (event) {
  event.preventDefault()
  const data = gameLogic.gameValues
  gameApi.makeMove(data.i, data.v, data.isOver)
    .then(gameUi.moveSuccess)
    .catch(gameUi.onError)
}

const getGames = function (event) {
  event.preventDefault()
  // console.log('here')
  gameApi.retrieveGames()
    .then(gameUi.gameSuccess)
    .catch(gameUi.error)
}

const addHandlers = () => {
  $('#signUp').on('submit', signUp)
  $('#signIn').on('submit', signIn)
  $('#signOut').on('submit', signOut)
  $('#changePassword').on('submit', changePassword)
  $('#newGame').on('click', createGame)
  $('.table').on('click', makeMove)
  $('#getGames').on('click', getGames)
}

module.exports = {
  signUp,
  signOut,
  changePassword,
  signIn,
  createGame,
  makeMove,
  getGames,
  addHandlers
}
