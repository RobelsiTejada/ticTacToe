'use strict'

const signUpSuccess = (data) => {
  console.log(data)
}

const signUpFailure = (error) => {
  console.error(error)
}

const signInSuccess = (data) => {
  console.log(data)
}

const signInFailure = (error) => {
  console.error(error)
}

const updateSuccess = function () {
  console.log('You successfully updated your password!')
}

const signOutSuccess = function () {
  console.log('You have successfully signed out.')
}

const onError = function (response) {
  console.error(response)
}

module.exports = {
  updateSuccess,
  signInSuccess,
  signInFailure,
  signUpSuccess,
  signUpFailure,
  signOutSuccess,
  onError
}
