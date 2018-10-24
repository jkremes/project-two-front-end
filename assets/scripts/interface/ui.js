const showLaundry = require('../templates/laundry-list.handlebars')
const showArticleId = require('../templates/article-id.handlebars')

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
  $('#messages').html('You successfully edited that thang!')
  $('#messages').css('color', 'green')
  $('#messages').fadeOut(2000)
}

const updateArticleFailure = function () {
  $('#messages').fadeIn()
  $('#messages').html('You may not have permission to edit this or something may have been wrong with the server, try again!')
  $('#messages').css('color', 'red')
  $('#messages').fadeOut(2000)
}

const getArticleIdSuccess = (data) => {
  const showArticleIdHtml = showArticleId({ article: data.article })
  $('.table').removeClass('hidden')
  $('#article-table').html(showArticleIdHtml)
  $('#search-input').val('')
  $('#messages').fadeIn()
  $('#messages').html('Your matched results are below, if blank, you do not own any of your search criteria!')
  $('#messages').css('color', 'green')
  $('#messages').fadeOut(5000)
}

const getArticleIdFailure = function () {
  $('#messages').html('Something went wrong, please try again')
  $('#messages').css('color', 'red')
}

const getArticlesByDescriptionSuccess = (data) => {
  const checkDescriptionArray = data.articles.filter(function (article) {
    return article.description === ($('#search-input').val())
  })
  const showSearchedItems = showLaundry({ articles: checkDescriptionArray })
  $('.table').removeClass('hidden')
  $('#article-table').html(showSearchedItems)
  $('#search-input').val('')
  $('#messages').fadeIn()
  $('#messages').html('Your matched results are below, if blank, you do not own any of your search criteria!')
  $('#messages').css('color', 'green')
  $('#messages').fadeOut(5000)
}

const getArticlesByDescriptionFailure = function () {
  $('#messages').html('Something went wrong, please try again')
  $('#messages').css('color', 'red')
}
const getArticlesBySizeSuccess = (data) => {
  const checkDescriptionArray = data.articles.filter(function (article) {
    return article.size === ($('#search-input').val())
  })
  const showSearchedItems = showLaundry({ articles: checkDescriptionArray })
  $('.table').removeClass('hidden')
  $('#article-table').html(showSearchedItems)
  $('#search-input').val('')
  $('#messages').fadeIn()
  $('#messages').html('Your matched results are below, if blank, you do not own any of your search criteria!')
  $('#messages').css('color', 'green')
  $('#messages').fadeOut(5000)
}

const getArticlesBySizeFailure = function () {
  $('#messages').html('Something went wrong, please try again')
  $('#messages').css('color', 'red')
}
const getArticlesByColorSuccess = (data) => {
  const checkDescriptionArray = data.articles.filter(function (article) {
    return article.color === ($('#search-input').val())
  })
  const showSearchedItems = showLaundry({ articles: checkDescriptionArray })
  $('.table').removeClass('hidden')
  $('#article-table').html(showSearchedItems)
  $('#search-input').val('')
  $('#messages').fadeIn()
  $('#messages').html('Your matched results are below, if blank, you do not own any of your search criteria!')
  $('#messages').css('color', 'green')
  $('#messages').fadeOut(5000)
}

const getArticlesByColorFailure = function () {
  $('#messages').html('Something went wrong, please try again')
  $('#messages').css('color', 'red')
}

module.exports = {
  getLaundrySuccess,
  getLaundryFailure,
  createNewArticleSuccess,
  createNewArticleFailure,
  removeArticleSuccess,
  removeArticleFailure,
  updateArticleSuccess,
  updateArticleFailure,
  getArticleIdSuccess,
  getArticleIdFailure,
  getArticlesByDescriptionSuccess,
  getArticlesByDescriptionFailure,
  getArticlesBySizeSuccess,
  getArticlesBySizeFailure,
  getArticlesByColorSuccess,
  getArticlesByColorFailure
}
