var timerType = 0;
/* 0 = pomadoro; 1 = short break; 2=longbreak; */
var breakCounter = 1;
var pomadoroTime = 1500;
var shortBreakTime = 300;
var longBreakTime = 900;
var longBreakNumber = 3;
var timerState = 0; // 0= stopped; 1= running;
var duration = 0;
var currentTime = pomadoroTime;
var display;
var timerbutton;
var runningTimer;

document.addEventListener('DOMContentLoaded', function() {
    timerbutton = document.getElementById('startTimer');
    currentTime = pomadoroTime;
    duration = pomadoroTime;
    display = document.getElementById('timer');
    display.innerHTML = timeToString();
  timerbutton.addEventListener('click', function() {
		buttonClicked();
  }, false);
}, false);

function buttonClicked() {
    currentTime = duration;
    if(timerState == 0){
        runningTimer = setInterval(calculateTimer, 1000);
        timerbutton.innerHTML = "Stop Timer";
        timerState = 1;
    }
    else{
        clearInterval(runningTimer);
        getNextTimer();
        timerbutton.innerHTML = "Start Timer";
        timerState = 0;
        display.innerHTML = timeToString();

    }
}


function getNextTimer() {
    if (timerType == 0) {

        if (breakCounter % longBreakNumber == 0) {
            timerType = 2;
            duration = longBreakTime;

        }
        else {
            timerType = 1;
            duration = shortBreakTime;
        }
        document.querySelector("body").className = "break";
        breakCounter++;
    }
    else {
        document.querySelector("body").className = "pomadoro";
        timerType = 0;
        duration = pomadoroTime;
    }
    currentTime = duration;
}

function calculateTimer(){
    if (--currentTime < 0) {
        getNextTimer();
    }
    display.innerHTML = timeToString();
}


function timeToString(){
    var minutes, seconds;
	minutes = parseInt(currentTime / 60, 10);
    seconds = parseInt(currentTime % 60, 10);
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
	return minutes + ":" + seconds;
}
