const getLaundrySuccess = function (response) {
  const totalLaundryItems = response
  $('#user-display').html(`You have ${totalLaundryItems} laundry`)
  $('#user-display').css('color', 'green')
  $('#user-display')
}

const getLaundryFailure = function () {
  $('#user-display').html('Something went wrong, please try again')
  $('#user-display').css('color', 'red')
}
module.exports = {
  getLaundrySuccess,
  getLaundryFailure
}
