const store = require('../store.js')

const signUpSuccess = function () {
  $('#signUpModal').modal('hide')
  $('#display-feedback').fadeIn()
  $('#display-feedback').html('All set, now sign-in!')
  $('#display-feedback').css('color', 'green')
  $('#display-feedback').fadeOut(2000)
}

const signUpFailure = function () {
  $('#signUpModal').modal('hide')
  $('#display-feedback').fadeIn()
  $('#display-feedback').html('Sorry, did not work. Try again!')
  $('#display-feedback').css('color', 'red')
  $('#display-feedback').fadeOut(2000)
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
  $('#sign-in-form').trigger('reset')
  store.user = response.user
  $('#sign-out-button').removeClass('hidden')
  $('#get-laundry').removeClass('hidden')
  $('#create-laundry').removeClass('hidden')
  $('#clear-laundry').removeClass('hidden')
  $('#search').removeClass('hidden')
}

const signInFailure = function () {
  $('#signInModal').modal('hide')
  $('#sign-in-form').trigger('reset')
  $('#display-feedback').fadeIn()
  $('#display-feedback').html('You might want to retry, something did not work.')
  $('#display-feedback').css('color', 'red')
  $('#display-feedback').fadeOut(2000)
}

const changePasswordSuccess = function () {
  $('#changePasswordModal').modal('hide')
  $('#display-feedback').fadeIn()
  $('#display-feedback').html('Password changed successfully.')
  $('#display-feedback').css('color', 'green')
  $('#display-feedback').fadeOut(2000)
  $('#change-password-form').trigger('reset')
}

const changePasswordFailure = function () {
  $('#changePasswordModal').modal('hide')
  $('#display-feedback').fadeIn()
  $('#display-feedback').html('Not successful, try again.')
  $('#display-feedback').css('color', 'red')
  $('#display-feedback').fadeOut(2000)
  $('#change-password-form').trigger('reset')
}

const signOutSuccess = function () {
  $('#display-feedback').fadeIn()
  $('#display-feedback').html('Smell ya later!')
  $('#display-feedback').css('color', 'green')
  $('#display-feedback').fadeOut(2000)
  $('#sign-up-button').removeClass('hidden')
  $('#sign-in-button').removeClass('hidden')
  $('#change-password-button').addClass('hidden')
  $('#get-laundry').addClass('hidden')
  $('#clear-laundry').addClass('hidden')
  $('#create-laundry').addClass('hidden')
  $('#sign-out-button').addClass('hidden')
  $('.table').addClass('hidden')
  $('#search').addClass('hidden')
}

const signOutFailure = function () {
  $('#display-feedback').fadeIn()
  $('#display-feedback').html('Oops, try again!')
  $('#display-feedback').css('color', 'red')
  $('#display-feedback').fadeOut(2000)
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
