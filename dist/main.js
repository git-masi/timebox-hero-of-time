const timeBoxBtn = document.getElementById('timebox-button'),
      shortBreakBtn = document.getElementById('short-break-button'),
      longBreakBtn = document.getElementById('long-break-button'),
      stopBtn = document.getElementById('stop-button'),
      startBtn = document.getElementById('start-button'),
      resetBtn = document.getElementById('reset-button'),
      displayHours = document.querySelector('.count-down__hours'),
      displayMinutes = document.querySelector('.count-down__minutes'),
      displaySeconds = document.querySelector('.count-down__seconds');

timeBoxBtn.addEventListener('click', () => {
  let inputMins = document.getElementById('timebox-input').value;
  setDisplay(0, inputMins, 0);
});

function setDisplay(hrs = 0, mins = 0, secs = 0) {
  interval = (hrs * 3.6e+6) + (mins * 60000) + (secs * 1000);

  const test = setInterval(displayMe, 100);
  
  function displayMe() {
    let hours = Math.floor(interval / 3.6e+6);
    let minutes = Math.ceil((interval % 3.6e+6) / 60000);
    let seconds = ((interval % 3.6e+6) % 60000) / 1000;
    
    if(interval >= 0) {
      interval -= 1000;
      displayHours.textContent = hours.toString().padStart(2, '0');
      minutes > 1 ? displayMinutes.textContent = (minutes - 1).toString().padStart(2, '0') : displayMinutes.textContent = '00';
      displaySeconds.textContent = seconds.toString().padStart(2, '0');
    } else {
      clearInterval(test);
    }
  }
}

stopBtn.addEventListener('click', ()=>{
  clearInterval(1);
});