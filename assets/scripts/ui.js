'use strict'

const signUpSuccess = (data) => {
  console.log(data)
}

const signUpFailure = (error) => {
  console.error(error)
}

const onSuccess = function (data) {
  console.log('data is ', data)
  if (!data) {
    console.warn('Either you deleted something, or something went wrong.')
  } else if (data.user) {
    console.log(data.user)
  } else {
    console.table(data.users)
  }
}

const onUpdateSuccess = function () {
  console.log('You successfully updated your password!')
}

const onError = function (response) {
  console.error(response)
}

const onDeleteSuccess = function () {
  console.log('user was successfully signed out.')
}

const onCreateSuccess = function (data) {
  console.log(data.user)
}

module.exports = {
  onSuccess,
  onError,
  onDeleteSuccess,
  onUpdateSuccess,
  onCreateSuccess,
  signUpSuccess,
  signUpFailure
}
