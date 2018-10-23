const showLaundry = require('../templates/laundry-list.handlebars')

const getLaundrySuccess = (data) => {
  const showLaundryHtml = showLaundry({ articles: data.articles })
  $('.table').removeClass('hidden')
  $('#article-table').html(showLaundryHtml)
}

const getLaundryFailure = function () {
  $('#user-display').html('Something went wrong, please try again')
  $('#user-display').css('color', 'red')
}

const createNewArticleSuccess = function () {
  $('#messages').fadeIn()
  $('#messages').html('You successfully added some clothing!')
  $('#messages').css('color', 'green')
  $('#create-laundry-form').trigger('reset')
  $('#messages').fadeOut(2000)
}

const createNewArticleFailure = function () {
  $('#messages').fadeIn()
  $('#messages').html('Something may have been wrong with the server, try again!')
  $('#messages').css('color', 'red')
  $('#messages').fadeOut(2000)
}

const removeArticleSuccess = function () {
  $('#messages').fadeIn()
  $('#messages').html('You successfully deleted that thang!')
  $('#messages').css('color', 'green')
  $('#messages').fadeOut(2000)
}

const removeArticleFailure = function () {
  $('#messages').fadeIn()
  $('#messages').html('You may not have permission to edit this or something may have been wrong with the server, try again!')
  $('#messages').css('color', 'red')
  $('#messages').fadeOut(2000)
}
const updateArticleSuccess = function () {
  $('#messages').fadeIn()
  $('#messages').html('You successfully added some clothing!')
  $('#messages').css('color', 'green')
  $('#messages').fadeOut(2000)
}

const updateArticleFailure = function () {
  $('#messages').fadeIn()
  $('#messages').html('Something may have been wrong with the server, try again!')
  $('#messages').css('color', 'red')
  $('#messages').fadeOut(2000)
}

module.exports = {
  getLaundrySuccess,
  getLaundryFailure,
  createNewArticleSuccess,
  createNewArticleFailure,
  removeArticleSuccess,
  removeArticleFailure,
  updateArticleSuccess,
  updateArticleFailure
}
