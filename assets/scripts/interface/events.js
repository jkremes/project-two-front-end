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
      .catch(ui.removeArticleFailure)
  }
}

const onUpdateArticle = (event) => {
  event.preventDefault()
  const articleId = $(event.target).closest('tr').data('id')
  const updateArticle = function (event) {
    const description = $('#articleDescription').val().trim()
    const size = $('#articleSize').val().trim()
    const color = $('#articleColor').val().trim()
    api.updateArticle(articleId, description, size, color)
      .then(ui.updateArticleSuccess)
      .catch(ui.updateArticleFailure)
  }
  $('#form-submit').on('click', updateArticle)
}

const onShowById = (event) => {
  const searchValue = ($('#search-input').val())
  // console.log(searchValue)
  api.getArticleById(searchValue)
    .then(ui.getArticleIdSuccess)
    .catch(ui.getArticleIdFailure)
}

const onShowByDescription = (event) => {
  api.getLaundry()
    .then(ui.getArticlesByDescriptionSuccess)
    .catch(ui.getArticlesByDescriptionFailure)
}

const onShowBySize = (event) => {
  api.getLaundry()
    .then(ui.getArticlesBySizeSuccess)
    .catch(ui.getArticlesBySizeFailure)
}

const onShowByColor = (event) => {
  api.getLaundry()
    .then(ui.getArticlesByColorSuccess)
    .catch(ui.getArticlesByColorFailure)
}

const onGetStarted = (event) => {
  $('#welcome-message').fadeOut(800)
}

module.exports = {
  onGetLaundry,
  onDeleteLaundry,
  onCreateLaundry,
  onCreateNewArticle,
  onUpdateArticle,
  onShowById,
  onShowByDescription,
  onShowBySize,
  onShowByColor,
  onGetStarted
}
