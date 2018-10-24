const store = require('../store.js')

const signUpSuccess = function () {
  $('#signUpModal').modal('hide')
  $('#login').fadeIn()
  $('#login').html('Sign up success!')
  $('#login').css('color', 'green')
  $('#sign-up-form').trigger('reset')
  $('#login').fadeOut(2000)
}

const signUpFailure = function () {
  $('#signUpModal').modal('hide')
  $('#login').fadeIn()
  $('#login').html('Somthing went wrong, please try again')
  $('#login').css('color', 'red')
  $('#sign-up-form').trigger('reset')
  $('#login').fadeOut(1500)
}

const signInSuccess = function (response) {
  $('#signInModal').modal('hide')
  $('#sign-up-button').addClass('hidden')
  $('#sign-in-button').addClass('hidden')
  $('#change-password-button').removeClass('hidden')
  $('#display-feedback').fadeIn()
  $('#display-feedback').html('You have successfully signed in.')
  $('#display-feedback').css('color', 'green')
  $('#display-feedback').fadeOut(2000)
  // $('#login').fadeIn()
  // $('#login').html('Sign in success!')
  // $('#login').css('color', 'green')
  // $('#sign-in-form').trigger('reset')
  store.user = response.user
  $('#login-info').html('User Action')
  // $('#sign-up-form').addClass('hidden')
  // $('#sign-in-form').addClass('hidden')
  $('#sign-out-button').removeClass('hidden')
  // $('#change-password-form').removeClass('hidden')
  $('#get-laundry').removeClass('hidden')
  $('#create-laundry').removeClass('hidden')
  // $('#login').fadeOut(1500)
  $('#search').removeClass('hidden')
}

const signInFailure = function () {
  $('#signInModal').modal('hide')
  $('#login').fadeIn()
  $('#login').html('Something went wrong, please try again')
  $('#login').css('color', 'red')
  $('#sign-in-form').trigger('reset')
  $('#login').fadeOut(1500)
}

const changePasswordSuccess = function () {
  $('#changePasswordModal').modal('hide')
  $('#login').fadeIn()
  $('#login').html('Change password success!')
  $('#login').css('color', 'green')
  $('#sign-up-form').trigger('reset')
  $('#change-password-form').trigger('reset')
  $('#login').fadeOut(1500)
}

const changePasswordFailure = function () {
  $('#changePasswordModal').modal('hide')
  $('#login').fadeIn()
  $('#login').html('Somthing went wrong, please try again')
  $('#login').css('color', 'red')
  $('#sign-up-form').trigger('reset')
  $('#login').fadeOut(1500)
}

const signOutSuccess = function () {
  $('#login').fadeIn()
  $('#login').html('You are signed out!')
  $('#login').css('color', 'green')
  $('#sign-up-form').removeClass('hidden')
  $('#sign-in-form').removeClass('hidden')
  $('#change-password-form').addClass('hidden')
  $('#create-laundry').addClass('hidden')
  $('#create-laundry-form').addClass('hidden')
  $('#sign-out-button').addClass('hidden')
  $('.table').addClass('hidden')
  $('#search').addClass('hidden')
  $('#get-laundry').addClass('hidden')
  $('#login').fadeOut(1500)
}

const signOutFailure = function () {
  $('#login').fadeIn()
  $('#login').html('Something went wrong, please try again')
  $('#login').css('color', 'red')
  $('#login').fadeOut(1500)
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
