const config = require('../config.js')
const store = require('../store.js')

const getLaundry = function () {
  return $.ajax({
    url: config.apiUrl + '/articles',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'GET'
  })
}

const createNewArticle = function (userCreatedArticle) {
  return $.ajax({
    url: config.apiUrl + '/articles',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'POST',
    data: userCreatedArticle
  })
}

const removeArticle = (articleId) => {
  return $.ajax({
    url: config.apiUrl + '/articles/' + articleId,
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'DELETE'
  })
}

const updateArticle = (id, description, size, color) => {
  return $.ajax({
    url: config.apiUrl + '/articles/' + id,
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'PATCH',
    data: {
      'article': {
        'description': description,
        'size': size,
        'color': color
      }
    }
  })
}

const getArticleById = function (userEnteredId) {
  return $.ajax({
    url: config.apiUrl + '/articles/' + userEnteredId,
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'GET'
  })
}

module.exports = {
  getLaundry,
  removeArticle,
  createNewArticle,
  updateArticle,
  getArticleById
}
