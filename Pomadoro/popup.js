var timerType = 0;
/* 0 = pomadoro; 1 = short break; 2=longbreak; */
var breakCounter = 0;
var pomadoroTime = 1500;
var shortBreakTime = 300;
var longBreakTime = 900;
var timerState = 0; // 0= stopped; 1= running;
var duration = 0;

document.addEventListener('DOMContentLoaded', function() {
  var timerbutton = document.getElementById('startTimer');
  var display = document.getElementById('timer');
  timerbutton.addEventListener('click', function() {
		buttonClicked(display);
  }, false);
}, false);

function buttonClicked(display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        
        display.innerHTML = timeToString();

        if (--timer < 0) {
            timer = duration;
			
        }
    }, 1000);
}

window.onload = function () {
        var duration = pomadoroTime;
        display = document.getElementById('timer');
   	display.innertHTML = timeToString();
};

function timeToString(){
    var minutes, seconds;
	minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
	return minutes + ":" + seconds;
}
