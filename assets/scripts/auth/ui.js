const store = require('../store.js')

const signUpSuccess = function () {
  $('#signUpModal').modal('hide')
  $('#display-feedback').fadeToggle()
  $('#display-feedback').html('All set, now sign-in!')
  $('#display-feedback').css('color', 'green')
  $('#display-feedback').fadeToggle()
}

const signUpFailure = function () {
  $('#signUpModal').modal('hide')
  $('#display-feedback').fadeToggle()
  $('#display-feedback').html('Sorry, did not work. Try again!')
  $('#display-feedback').css('color', 'red')
  $('#display-feedback').fadeToggle()
}

const signInSuccess = function (response) {
  $('#signInModal').modal('hide')
  $('#sign-up-button').addClass('hidden')
  $('#sign-in-button').addClass('hidden')
  $('#change-password-button').removeClass('hidden')
  $('#display-feedback').fadeToggle()
  $('#display-feedback').html('You have successfully signed in.')
  $('#display-feedback').css('color', 'green')
  $('#display-feedback').fadeToggle()
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
  $('#display-feedback').fadeToggle()
  $('#display-feedback').html('You might want to retry, something did not work.')
  $('#display-feedback').css('color', 'red')
  $('#display-feedback').fadeToggle()
}

const changePasswordSuccess = function () {
  $('#changePasswordModal').modal('hide')
  $('#display-feedback').fadeToggle()
  $('#display-feedback').html('Password changed successfully.')
  $('#display-feedback').css('color', 'green')
  $('#display-feedback').fadeToggle()
  $('#change-password-form').trigger('reset')
}

const changePasswordFailure = function () {
  $('#changePasswordModal').modal('hide')
  $('#display-feedback').fadeToggle()
  $('#display-feedback').html('Not successful, try again.')
  $('#display-feedback').css('color', 'red')
  $('#display-feedback').fadeToggle()
  $('#change-password-form').trigger('reset')
}

const signOutSuccess = function () {
  $('#display-feedback').fadeToggle()
  $('#display-feedback').html('Smell ya later!')
  $('#display-feedback').css('color', 'green')
  $('#display-feedback').fadeToggle()
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
  $('#display-feedback').fadeToggle()
  $('#display-feedback').html('Oops, try again!')
  $('#display-feedback').css('color', 'red')
  $('#display-feedback').fadeToggle()
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
