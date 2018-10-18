// const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onGetLaundry = function (event) {
  event.preventDefault()
  api.getLaundry()
    .then(ui.getLaundrySuccess)
    .catch(ui.getLaundryFailure)
}

module.exports = {
  onGetLaundry
}
