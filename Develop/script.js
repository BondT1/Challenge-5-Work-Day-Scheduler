var currentDateEl = $('#currentDay');
var currentTime;
var currentDate;

var blockColors;
var blockTime;

// Current date and time shown on Jumbotron

// $(document).ready(function () {

function dateDisplay() {
  var currentDate = moment().format('DD MMM YYYY [at] hh:mm:ss a');
  currentDateEl.text(currentDate);
}

setInterval(dateDisplay, 1000);



$(".saveBtn").on("click", function () {
  // sibling HTML description attribute changes
  var event = $(this).siblings(".description").val();
  // parent HTML id attribute 
  var time = $(this).siblings().attr("id");

  localStorage.setItem(event, time);

})


// timeBlock colors 
function blockColors() {
  var currentTime = moment().hour();

  $(".time-block").each(function (index, element) {
    const blockTime = $(this).data('hour');
    const textarea = $('textarea', $(this));
    console.log(textarea);
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
