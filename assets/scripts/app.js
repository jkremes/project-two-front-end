'use strict'
const authEvents = require('./auth/events.js')
const interfaceEvents = require('./interface/events.js')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#sign-out-button').on('click', authEvents.onSignOut)
  $('#get-laundry').on('click', interfaceEvents.onGetLaundry)
  $('.article-table').on('click', '.delete-article', interfaceEvents.onDeleteLaundry)
  $('.article-table').on('click', '.update-article', interfaceEvents.onUpdateArticle)
  $('#create-laundry').on('click', interfaceEvents.onCreateLaundry)
  $('#create-laundry-form').on('submit', interfaceEvents.onCreateNewArticle)
  $('#search-by-id').on('click', interfaceEvents.onShowById)
  $('#search-by-description').on('click', interfaceEvents.onShowByDescription)
})
