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

const removeArticle = (articleId) => {
  return $.ajax({
    url: config.apiUrl + '/articles/' + articleId,
    method: 'DELETE'
  })
}

module.exports = {
  getLaundry,
  removeArticle
}
