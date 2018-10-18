const store = require('../store.js')

const signUpSuccess = function () {
  $('#login').html('Sign up success!')
  $('#login').css('color', 'green')
  $('#sign-up-form').trigger('reset')
}

const signUpFailure = function () {
  $('#login').html('Somthing went wrong, please try again')
  $('#login').css('color', 'red')
  $('#sign-up-form').trigger('reset')
}

const signInSuccess = function (response) {
  $('#login').html('Sign in success!')
  $('#login').css('color', 'green')
  $('#sign-in-form').trigger('reset')
  store.user = response.user
  $('#sign-up-form').addClass('hidden')
  $('#sign-in-form').addClass('hidden')
  $('#sign-out-button').removeClass('hidden')
  $('#create-new-game').removeClass('hidden')
  $('#change-password-form').removeClass('hidden')
  $('#check-games-played').removeClass('hidden')
  $('#get-laundry').removeClass('hidden')
}

const signInFailure = function () {
  $('#login').html('Something went wrong, please try again')
  $('#login').css('color', 'red')
  $('#sign-in-form').trigger('reset')
}

const changePasswordSuccess = function () {
  $('#login').html('Change password success!')
  $('#login').css('color', 'green')
  $('#sign-up-form').trigger('reset')
  $('#change-password-form').removeClass('hidden')
}

const changePasswordFailure = function () {
  $('#login').html('Somthing went wrong, please try again')
  $('#login').css('color', 'red')
  $('#sign-up-form').trigger('reset')
}

const signOutSuccess = function () {
  $('#login').html('You are signed out!')
  $('#login').css('color', 'green')
  $('#sign-up-form').removeClass('hidden')
  $('#sign-in-form').removeClass('hidden')
}

const signOutFailure = function () {
  $('#login').html('Something went wrong, please try again')
  $('#login').css('color', 'red')
}
module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
