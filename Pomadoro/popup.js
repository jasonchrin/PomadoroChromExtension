document.addEventListener('DOMContentLoaded', function() {
  var timerbutton = document.getElementById('startTimer');
  var display = document.getElementById('timer');
  timerbutton.addEventListener('click', function() {
		startTimer(1500, display);
  }, false);
}, false);

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.innerHTML = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
			
        }
    }, 1000);
}

window.onload = function () {

        display = document.getElementById('timer');
   
};
