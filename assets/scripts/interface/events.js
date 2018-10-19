// const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onGetLaundry = function (event) {
  event.preventDefault()
  api.getLaundry()
    .then(ui.getLaundrySuccess)
    .catch(ui.getLaundryFailure)
}

const onCreateLaundry = ui.createNewArticle

const onDeleteLaundry = (event) => {
  event.preventDefault()
  const articleId = $(event.target).closest('section').data('id')
  if (confirm('Are you sure you no longer want this item?')) {
    api.removeArticle(articleId)
      .then(console.log)
    // .then(() => onGetLaundry(event))
      .catch(console.log)
  }
}
module.exports = {
  onGetLaundry,
  onDeleteLaundry,
  onCreateLaundry
}
