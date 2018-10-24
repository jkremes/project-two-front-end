const showLaundry = require('../templates/laundry-list.handlebars')
const showArticleId = require('../templates/article-id.handlebars')

const getLaundrySuccess = (data) => {
  const showLaundryHtml = showLaundry({ articles: data.articles })
  $('.table').removeClass('hidden')
  $('#article-table').html(showLaundryHtml)
  $('#display-feedback').fadeIn()
  $('#display-feedback').html('Oh golly!')
  $('#display-feedback').css('color', 'green')
  $('#display-feedback').fadeOut(2000)
}

const getLaundryFailure = function () {
  $('#display-feedback').fadeIn()
  $('#display-feedback').html('Oops, try again!')
  $('#display-feedback').css('color', 'red')
  $('#display-feedback').fadeOut(2000)
}

const createNewArticleSuccess = function () {
  $('#createArticleModal').modal('hide')
  $('#display-feedback').fadeIn()
  $('#display-feedback').html('Great addition!')
  $('#display-feedback').css('color', 'green')
  $('#display-feedback').fadeOut(2000)
  $('#create-laundry-form').trigger('reset')
}

const createNewArticleFailure = function () {
  $('#display-feedback').fadeIn()
  $('#display-feedback').html('Oops, try again!')
  $('#display-feedback').css('color', 'red')
  $('#display-feedback').fadeOut(2000)
}

const removeArticleSuccess = function () {
  $('#display-feedback').fadeIn()
  $('#display-feedback').html('Probably for the best!')
  $('#display-feedback').css('color', 'green')
  $('#display-feedback').fadeOut(2000)
}

const removeArticleFailure = function () {
  $('#display-feedback').fadeIn()
  $('#display-feedback').html('You may not have permission to edit this, try another one!')
  $('#display-feedback').css('color', 'red')
  $('#display-feedback').fadeOut(2000)
}
const updateArticleSuccess = function () {
  $('#display-feedback').fadeIn()
  $('#display-feedback').html('It worked, interesting change!')
  $('#display-feedback').css('color', 'green')
  $('#display-feedback').fadeOut(2000)
}

const updateArticleFailure = function () {
  $('#display-feedback').fadeIn()
  $('#display-feedback').html('You may not have permission to edit this, try another one!')
  $('#display-feedback').css('color', 'red')
  $('#display-feedback').fadeOut(2000)
}

const getArticleIdSuccess = (data) => {
  const showArticleIdHtml = showArticleId({ article: data.article })
  $('.table').removeClass('hidden')
  $('#article-table').html(showArticleIdHtml)
  $('#search-input').val('')
  $('#display-feedback').fadeIn()
  $('#display-feedback').html('Well... here it is!')
  $('#display-feedback').css('color', 'green')
  $('#display-feedback').fadeOut(2000)
}

const getArticleIdFailure = function () {
  $('#display-feedback').fadeIn()
  $('#display-feedback').html('Hmmm...are you sure that exists?')
  $('#display-feedback').css('color', 'red')
  $('#display-feedback').fadeOut(2000)
}

const getArticlesByDescriptionSuccess = (data) => {
  const checkDescriptionArray = data.articles.filter(function (article) {
    return article.description === ($('#search-input').val())
  })
  const showSearchedItems = showLaundry({ articles: checkDescriptionArray })
  $('.table').removeClass('hidden')
  $('#article-table').html(showSearchedItems)
  $('#search-input').val('')
  $('#display-feedback').fadeIn()
  $('#display-feedback').html('Well...here they are (at least what exists based on your search criteria)!')
  $('#display-feedback').css('color', 'green')
  $('#display-feedback').fadeOut(2000)
}

const getArticlesByDescriptionFailure = function () {
  $('#display-feedback').fadeIn()
  $('#display-feedback').html('Hmmm...are you sure they exist?')
  $('#display-feedback').css('color', 'red')
  $('#display-feedback').fadeOut(2000)
}
const getArticlesBySizeSuccess = (data) => {
  const checkDescriptionArray = data.articles.filter(function (article) {
    return article.size === ($('#search-input').val())
  })
  const showSearchedItems = showLaundry({ articles: checkDescriptionArray })
  $('.table').removeClass('hidden')
  $('#article-table').html(showSearchedItems)
  $('#search-input').val('')
  $('#display-feedback').fadeIn()
  $('#display-feedback').html('Well...here they are (at least what exists based on your search criteria)!')
  $('#display-feedback').css('color', 'green')
  $('#display-feedback').fadeOut(2000)
}

const getArticlesBySizeFailure = function () {
  $('#display-feedback').fadeIn()
  $('#display-feedback').html('Hmmm...are you sure they exist?')
  $('#display-feedback').css('color', 'red')
  $('#display-feedback').fadeOut(2000)
}
const getArticlesByColorSuccess = (data) => {
  const checkDescriptionArray = data.articles.filter(function (article) {
    return article.color === ($('#search-input').val())
  })
  const showSearchedItems = showLaundry({ articles: checkDescriptionArray })
  $('.table').removeClass('hidden')
  $('#article-table').html(showSearchedItems)
  $('#search-input').val('')
  $('#display-feedback').fadeIn()
  $('#display-feedback').html('Well...here they are (at least what exists based on your search criteria)!')
  $('#display-feedback').css('color', 'green')
  $('#display-feedback').fadeOut(2000)
}

const getArticlesByColorFailure = function () {
  $('#display-feedback').fadeIn()
  $('#display-feedback').html('Hmmm...are you sure they exist?')
  $('#display-feedback').css('color', 'red')
  $('#display-feedback').fadeOut(2000)
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
