const showLaundry = require('../templates/laundry-list.handlebars')
const showArticleId = require('../templates/article-id.handlebars')

const getLaundrySuccess = (data) => {
  const showLaundryHtml = showLaundry({ articles: data.articles })
  $('.table').removeClass('hidden')
  $('#article-table').html(showLaundryHtml)
  $('#display-feedback').fadeToggle()
  $('#display-feedback').html('Oh golly!')
  $('#display-feedback').css('color', 'green')
  $('#display-feedback').fadeToggle()
}

const getLaundryOtherSuccess = (data) => {
  const showLaundryHtml = showLaundry({ articles: data.articles })
  $('.table').removeClass('hidden')
  $('#article-table').html(showLaundryHtml)
}

const getLaundryFailure = function () {
  $('#display-feedback').fadeToggle()
  $('#display-feedback').html('Oops, try again!')
  $('#display-feedback').css('color', 'red')
  $('#display-feedback').fadeToggle()
}

const createNewArticleSuccess = function () {
  $('#createArticleModal').modal('hide')
  $('#display-feedback').fadeToggle()
  $('#display-feedback').html('Great addition!')
  $('#display-feedback').css('color', 'green')
  $('#display-feedback').fadeToggle()
  $('#create-laundry-form').trigger('reset')
}

const createNewArticleFailure = function () {
  $('#display-feedback').fadeToggle()
  $('#display-feedback').html('Oops, try again!')
  $('#display-feedback').css('color', 'red')
  $('#display-feedback').fadeToggle()
}

const removeArticleSuccess = function () {
  $('#display-feedback').fadeToggle()
  $('#display-feedback').html('Probably for the best!')
  $('#display-feedback').css('color', 'green')
  $('#display-feedback').fadeToggle()
}

const removeArticleFailure = function () {
  $('#display-feedback').fadeToggle()
  $('#display-feedback').html('Sorry, try again!')
  $('#display-feedback').css('color', 'red')
  $('#display-feedback').fadeToggle()
}
const updateArticleSuccess = function () {
  $('#display-feedback').fadeToggle()
  $('#display-feedback').html('It worked, interesting change!')
  $('#display-feedback').css('color', 'green')
  $('#display-feedback').fadeToggle()
  $('#update-article-id-form').modal('hide')
  $('#update-article-id-form').trigger('reset')
  $('#articleDescription').trigger('reset')
  $('#articleSize').trigger('reset')
  $('#articleColor').trigger('reset')
}

const updateArticleFailure = function () {
  $('#display-feedback').fadeToggle()
  $('#display-feedback').html('Sorry, try again!')
  $('#display-feedback').css('color', 'red')
  $('#display-feedback').fadeToggle()
}

const getArticleIdSuccess = (data) => {
  const showArticleIdHtml = showArticleId({ article: data.article })
  $('.table').removeClass('hidden')
  $('#article-table').html(showArticleIdHtml)
  $('#search-input').val('')
  $('#display-feedback').fadeToggle()
  $('#display-feedback').html('Well... here it is!')
  $('#display-feedback').css('color', 'green')
  $('#display-feedback').fadeToggle()
}

const getArticleIdFailure = function () {
  $('#display-feedback').fadeToggle()
  $('#display-feedback').html('Hmmm...that may not belong to you')
  $('#display-feedback').css('color', 'red')
  $('#display-feedback').fadeToggle()
}

const getArticlesByDescriptionSuccess = (data) => {
  const checkDescriptionArray = data.articles.filter(function (article) {
    return article.description === ($('#search-input').val())
  })
  const showSearchedItems = showLaundry({ articles: checkDescriptionArray })
  $('.table').removeClass('hidden')
  $('#article-table').html(showSearchedItems)
  $('#search-input').val('')
  $('#display-feedback').fadeToggle()
  $('#display-feedback').html('Well...here they are (at least what exists based on your search criteria)!')
  $('#display-feedback').css('color', 'green')
  $('#display-feedback').fadeToggle()
}

const getArticlesByDescriptionFailure = function () {
  $('#display-feedback').fadeToggle()
  $('#display-feedback').html('Hmmm...are you sure they exist?')
  $('#display-feedback').css('color', 'red')
  $('#display-feedback').fadeToggle()
}
const getArticlesBySizeSuccess = (data) => {
  const checkDescriptionArray = data.articles.filter(function (article) {
    return article.size === ($('#search-input').val())
  })
  const showSearchedItems = showLaundry({ articles: checkDescriptionArray })
  $('.table').removeClass('hidden')
  $('#article-table').html(showSearchedItems)
  $('#search-input').val('')
  $('#display-feedback').fadeToggle()
  $('#display-feedback').html('Well...here they are (at least what exists based on your search criteria)!')
  $('#display-feedback').css('color', 'green')
  $('#display-feedback').fadeToggle()
}

const getArticlesBySizeFailure = function () {
  $('#display-feedback').fadeToggle()
  $('#display-feedback').html('Hmmm...are you sure they exist?')
  $('#display-feedback').css('color', 'red')
  $('#display-feedback').fadeToggle()
}
const getArticlesByColorSuccess = (data) => {
  const checkDescriptionArray = data.articles.filter(function (article) {
    return article.color === ($('#search-input').val())
  })
  const showSearchedItems = showLaundry({ articles: checkDescriptionArray })
  $('.table').removeClass('hidden')
  $('#article-table').html(showSearchedItems)
  $('#search-input').val('')
  $('#display-feedback').fadeToggle()
  $('#display-feedback').html('Well...here they are (at least what exists based on your search criteria)!')
  $('#display-feedback').css('color', 'green')
  $('#display-feedback').fadeToggle()
}

const getArticlesByColorFailure = function () {
  $('#display-feedback').fadeToggle()
  $('#display-feedback').html('Hmmm...are you sure they exist?')
  $('#display-feedback').css('color', 'red')
  $('#display-feedback').fadeToggle()
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
  getArticlesByColorFailure,
  getLaundryOtherSuccess
}
