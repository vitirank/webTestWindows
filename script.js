var timer;

var compareDate = new Date();
compareDate.setDate(compareDate.getDate() + 13); //just for this demo today + 13 days

timer = setInterval(function() {
  timeBetweenDates(compareDate);
}, 1000);

function timeBetweenDates(toDate) {
  var dateEntered = toDate;
  var now = new Date();
  var difference = dateEntered.getTime() - now.getTime();

  if (difference <= 0) {

    // Timer done
    clearInterval(timer);
  
  } else {
    
    var seconds = Math.floor(difference / 1000);
    var minutes = Math.floor(seconds / 60);
    var hours = Math.floor(minutes / 60);
    var days = Math.floor(hours / 24);

    hours %= 24;
    minutes %= 60;
    seconds %= 60;

    $("#days").text(days);
    $("#hours").text(hours);
    $("#minutes").text(minutes);
    $("#seconds").text(seconds);
  }
}



// - - - - - - - - - - - - - - - - -
var carusel = $('#windowsPics');
var caruselLeft = $('#leftArrow');
var caruselRight = $('#rightArrow');
var currentPosition = 0;
var currentSlide = 1;
var slidesTotal = 6;
var delta = 302;
var caruselWidth = slidesTotal * delta;

function animateCarusel(to) {
  carusel.animate({'right': to + 'px'}, 500);
}

function goLeft() {
  var newPosition = currentPosition + delta;
  if (newPosition <= caruselWidth) {
    animateCarusel(newPosition);
    currentPosition = newPosition;
  }
}

function goRight() {
  var newPosition = currentPosition - delta;
  if (newPosition < 0) {
    newPosition = 0
  }
  animateCarusel(newPosition);
  currentPosition = newPosition;
}



caruselLeft.on('click', goLeft);
caruselRight.on('click', goRight);
