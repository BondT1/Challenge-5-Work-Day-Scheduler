var currentDateEl = $('#currentDay');
var currentTime;
var currentDate;

var blockColors;
var blockTime;

// Current date and time shown on Jumbotron

function dateDisplay() {
  var currentDate = moment().format('DD MMM YYYY [at] hh:mm:ss a');
  currentDateEl.text(currentDate);
}

setInterval(dateDisplay, 1000);




function blockColors() {

  var currentTime = moment().format('hh:mm:ss a');

  $(".time-block").each(function () {
      blockTime = parseInt($(this).attr("id").split('-')[1]);

        if (blockTime < currentTime) {
          $(this).removeClass('future present');
          $(this).addClass('past');
        } else if (blockTime == currentTime) {
          $(this).removeClass('future past');
          $(this).addClass('present');
        } else {
          $(this).removeClass('present past');
          $(this).addClass('future');
        }
  })
}

blockColors();

