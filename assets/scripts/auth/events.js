'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields.js')

const onSignUp = (event) => {
  event.preventDefault()

  const data = getFormFields(event.target)
  if (data.credentials.password !== data.credentials.password_confirmation) {
    $('#newusererrorp').show()
  } else {
    api.signUp(data)
      .then(ui.signUpSuccess)
      .catch(ui.signUpFailure)
  }
}

const onSignIn = (event) => {
  event.preventDefault()

  const data = getFormFields(event.target)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onSignOut = (event) => {
  event.preventDefault()

  const data = getFormFields(event.target)
  api.signOut(data)
    .then(ui.signOutSuccess)
    .catch(ui.failure)
}

const onChangePassword = (event) => {
  event.preventDefault()

  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.failure)
}

const onCreateGame = function (event) {
  event.preventDefault()
  api.createGame()
    .then(ui.gamePostSuccess)
    .catch(ui.failure)
}

const updateGame = function (index, value, over) {
  api.updateMoves(index, value, over)
    .then(ui.onUpdateSuccess)
    .catch(ui.failure)
}

const onGetGames = function (event) {
  event.preventDefault()
  api.retrieveGames()
    .then(ui.getGameSuccess)
    .catch(ui.failure)
}

const resetGame = function () {
  api.createGame()
    .then(ui.onResetGameSuccess)
    .catch(ui.failure)
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('submit', onSignOut)
  $('#change-password').on('submit', onChangePassword)
  $('#newGame').on('click', onCreateGame)
  $('#get-games').on('click', onGetGames)
}

module.exports = {
  addHandlers,
  updateGame,
  resetGame
}
