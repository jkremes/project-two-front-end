const showLaundry = require('../templates/laundry-list.handlebars')

const getLaundrySuccess = (data) => {
  console.log(data)
  const showLaundryHtml = showLaundry({ articles: data.articles })
  console.log(showLaundryHtml)
  $('#user-display').html(showLaundryHtml)
}

// const createNewArticle = function () {
//   $('#create-laundry-form').removeClass('hidden')
// }
// const getLaundrySuccess = function (response) {
//   const totalLaundryItems = response.articles.length
//   $('#user-display').html(`You have ${totalLaundryItems} laundry items!`)
//   $('#user-display').css('color', 'green')
//   $('#user-display')
// }

const getLaundryFailure = function () {
  $('#user-display').html('Something went wrong, please try again')
  $('#user-display').css('color', 'red')
}
module.exports = {
  getLaundrySuccess,
  getLaundryFailure
  // createNewArticle
}
