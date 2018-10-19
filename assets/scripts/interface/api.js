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

const updateArticle = (articleId, userUpdatedArticle) => {
  return $.ajax({
    url: config.apiUrl + '/articles/' + articleId,
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: 'PATCH',
    data: userUpdatedArticle
  })
}

module.exports = {
  getLaundry,
  removeArticle,
  createNewArticle,
  updateArticle
}
