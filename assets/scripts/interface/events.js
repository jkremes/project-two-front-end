const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onGetLaundry = function (event) {
  event.preventDefault()
  api.getLaundry()
    .then(ui.getLaundrySuccess)
    .catch(ui.getLaundryFailure)
}

const onCreateLaundry = function (event) {
  event.preventDefault()
  $('#create-laundry-form').removeClass('hidden')
}

const onCreateNewArticle = function (event) {
  event.preventDefault()
  const creationData = getFormFields(event.target)
  api.createNewArticle(creationData)
    .then(ui.createNewArticleSuccess)
    .catch(ui.createNewArticleFailure)
}

const onDeleteLaundry = (event) => {
  event.preventDefault()
  const articleId = $(event.target).closest('tr').data('id')
  console.log(articleId)
  if (confirm('Are you sure you no longer want this item?')) {
    api.removeArticle(articleId)
      .then(ui.removeArticleSuccess)
    // .then(() => onGetLaundry(event))
      .catch(ui.removeArticleFailure)
  }
}

const onUpdateArticle = (event) => {
  event.preventDefault()
  // $('.update-article-form').removeClass('hidden')
  const articleId = $(event.target).closest('tr').data('id')
  // console.log(articleId)
  const updateArticle = function (event) {
    // console.log(event)
    // event.preventDefault()

    const description = $('#articleDescription').val().trim()
    const size = $('#articleSize').val().trim()
    const color = $('#articleColor').val().trim()
    // console.log(description)
    // console.log(size)
    // console.log(color)
    // const creationData = getFormFields(event.target)
    // console.log(creationData)
    api.updateArticle(articleId, description, size, color)
      .then(ui.updateArticleSuccess)
      .catch(ui.updateArticleFailure)
  }
  $('#form-submit').on('click', updateArticle)
  // $('#form-submit').on('submit', updateArticle)
  // api.updateArticle(articleId, updatedArticle)
  //   .then(console.log)
  //   .catch(console.log)
}

const onShowById = (event) => {
  const searchValue = ($('#search-input').val())
  // console.log(searchValue)
  api.getArticleById(searchValue)
    .then(ui.getArticleIdSuccess)
    .catch(ui.getArticleIdFailure)
}

const onShowByDescription = (event) => {
  // const searchValue = ($('#search-input').val())
  // console.log(searchValue)
  api.getArticlesByDescription()
    .then(ui.getArticlesByDescriptionSuccess)
    .catch(console.log)
}

module.exports = {
  onGetLaundry,
  onDeleteLaundry,
  onCreateLaundry,
  onCreateNewArticle,
  onUpdateArticle,
  onShowById,
  onShowByDescription
}
