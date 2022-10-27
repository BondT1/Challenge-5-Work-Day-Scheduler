var currentDateEl = $('#currentDay');
var currentTime;
var currentDate;

var blockColors;
var blockTime;
var showEvents;

var event = $(this).siblings('textarea').val();


// Current date and time shown on Jumbotron

// $(document).ready(function () {

function dateDisplay() {
  var currentDate = moment().format('DD MMM YYYY [at] hh:mm:ss a');
  currentDateEl.text(currentDate);
}

setInterval(dateDisplay, 1000);



// saveBtn click listener - saves to local storage 
$('.saveBtn').on('click', function () {
  // sibling HTML textarea attribute changes
  var event = $(this).siblings('textarea').val();
  // parent HTML id attribute 
  var time = $(this).parent().data('hour');

  localStorage.setItem(time, event);

})

var userInput = localStorage.getItem(hour);
$('textarea').val(userInput);



    

// }})}

// showEvents();

// function showEvents () {
//   for(let i = 0; i < localStorage.length; i++) {
//     $('textarea').each(function (i) {
//       $(i).val(localStorage.getItem(localStorage.textarea));
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

blockColors();

