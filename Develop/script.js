var currentDateEl = $('#currentDay');
var currentTime;
var currentDate;

var blockColors;
var blockTime;
var showEvents;

// Current date and time shown on Jumbotron

// $(document).ready(function () {

function dateDisplay() {
  var currentDate = moment().format('DD MMM YYYY [at] hh:mm:ss a');
  currentDateEl.text(currentDate);
}

setInterval(dateDisplay, 1000);

var showEvents = localStorage.getItem('time');

// saveBtn click listener - saves to local storage 
$('.saveBtn').on('click', function () {
  // sibling HTML description attribute changes
  var event = $(this).siblings('textarea').val();
  // parent HTML id attribute 
  var time = $(this).parent().data('hour');

  localStorage.setItem(time, event);

})




 

$()
// function showEvents () {
  
// }


// function showEvents () {
//   for(let i = 0; i < data('hour'); i++) {
//     $('textarea').each(function (i, j) {
//       $(j).val(localStorage.getItem(data('hour')[i]));
//     })
//   }
// }

// showEvents ()

// timeBlock colors 
function blockColors() {
  var currentTime = moment().hour();

  $(".time-block").each(function (index, element) {
    const blockTime = $(this).data('hour');
    const textarea = $('textarea', $(this));
    if (blockTime < currentTime) {
      textarea.removeClass('future present');
      textarea.addClass('past');
    } else if (blockTime == currentTime) {
      textarea.removeClass('future past');
      textarea.addClass('present');
    } else {
      textarea.removeClass('present past');
      textarea.addClass('future');
    }
  })
}

blockColors()

// })
