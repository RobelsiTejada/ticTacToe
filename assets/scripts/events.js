'use strict'

const gameApi = require('./api.js')
const gameUi = require('./ui.js')
const getFormFields = require(`./../../lib/get-form-fields`)

const onSignUp = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  gameApi.signUp(data)
    .then(gameUi.signUpSuccess)
    .catch(gameUi.signUpFailure)
}

const signUpHandler = () => {
  $('#signUp').on('submit', onSignUp)
  event.preventDefault()
}

const signOut = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)
  gameApi.destroy(data.user.id)
    .then(gameUi.onDeleteSuccess)
    .catch(gameUi.onError)
}

const signOutHandler = () => {
  $('#signOut').on('submit', signOut)
  event.preventDefault()
}

const changePassword = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)
  gameApi.update(data)
    .then(gameUi.onUpdateSuccess)
    .catch(gameUi.onError)
}

const changePasswordHandler = () => {
  $('#changePassword').on('submit', changePassword)
  event.preventDefault()
}

const signIn = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)
  gameApi.create(data)
    .then(gameUi.onCreateSuccess)
    .catch(gameUi.onError)
}

const signInHandler = () => {
  $('#signIn').on('submit', signIn)
  event.preventDefault()
}

module.exports = {
  onSignUp,
  signOut,
  changePassword,
  signIn,
  signUpHandler,
  signOutHandler,
  changePasswordHandler,
  signInHandler
}
