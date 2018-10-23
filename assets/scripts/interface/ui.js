const showLaundry = require('../templates/laundry-list.handlebars')
const showArticleId = require('../templates/article-id.handlebars')
// const showArticlesbyDescription = require('../templates/article-description.handlebars')

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
  $('#messages').html('You may not have permission to edit this or something may have been wrong with the server, try again!')
  $('#messages').css('color', 'red')
  $('#messages').fadeOut(2000)
}

const getArticleIdSuccess = (data) => {
  const showArticleIdHtml = showArticleId({ article: data.article })
  $('.table').removeClass('hidden')
  $('#article-table').html(showArticleIdHtml)
}

const getArticleIdFailure = function () {
  $('#messages').html('Something went wrong, please try again')
  $('#messages').css('color', 'red')
}

const getArticlesByDescriptionSuccess = (data) => {
  console.log(data)
  const checkDescriptionArray = data.articles.filter(function (article) {
    return article.description === ($('#search-input').val())
  })
  console.log(checkDescriptionArray)
  const showSearchedItems = showLaundry({ articles: checkDescriptionArray })
  // const getArticleDescriptionSuccess = (checkDescription) => {
  //   const showArticleDescriptionHtml = showArticlesbyDescription({ articles: checkDescriptionArray })
  $('.table').removeClass('hidden')
  $('#article-table').html(showSearchedItems)
  // }
  // getArticleDescriptionSuccess()
  //   const checkDescription = (description) => {
  //    return article.description > 50
  // }
  //
  // [{id: 'mike', descripition: 100, size: 'dsl', color: 'slj'}, {name: 'michael', age: 10}].filter(checkAge) // [{named: 'mike', age: 100}]
  // console.log(data.articles.filter(checkDescription))
  // const descriptionArray = data.articles.filter(callback(description['sweater']))
  // const checkDescription = (value) => {
  //   return value === 'sweater'
  // }
  // const description = data.articles({description: 'sweater'})
  // console.log(data.articles['description'])
  // if (data.articles['description'] === 'sweater') {
  //   console.log('your on to something')
  // } else {
  //   console.log('keep trying')
  // }
  // if (data.articles[description] === $('#search-input').val()) {
  //   console.log('you got it')
  // } else {
  //   console.log('you dont got it')
  // }
  // const showArticlesByDesciptionHtml = showArticlesbyDescription({ articles: data.articles })
  // $('.table').removeClass('hidden')
  // $('#article-table').html(showArticlesByDesciptionHtml)
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
  getArticlesByDescriptionSuccess
}
