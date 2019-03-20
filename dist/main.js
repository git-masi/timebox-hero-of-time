const timeBoxBtn = document.getElementById('timebox-button'),
      shortBreakBtn = document.getElementById('short-break-button'),
      longBreakBtn = document.getElementById('long-break-button'),
      stopBtn = document.getElementById('stop-button'),
      startBtn = document.getElementById('start-button'),
      resetBtn = document.getElementById('reset-button'),
      displayHours = document.querySelector('.count-down__hours'),
      displayMinutes = document.querySelector('.count-down__minutes'),
      displaySeconds = document.querySelector('.count-down__seconds');

let running = false;

timeBoxBtn.addEventListener('click', () => {
  if(running) return;
  let inputMins = document.getElementById('timebox-input').value;
  setDisplay(0, inputMins, 0);
});

shortBreakBtn.addEventListener('click', () => {
  if(running) return;
  let inputMins = document.getElementById('short-break-input').value;
  setDisplay(0, inputMins, 0);
});

longBreakBtn.addEventListener('click', () => {
  if(running) return;
  let inputMins = document.getElementById('long-break-input').value;
  setDisplay(0, inputMins, 0);
});

startBtn.addEventListener('click', () => {
  if(running) return;
  if(displayHours.textContent === '00' && displayMinutes.textContent === '00' && displaySeconds.textContent === '00') timeBoxBtn.click();
  setDisplay(displayHours.textContent, displayMinutes.textContent, displaySeconds.textContent);
});

function setDisplay(hrs = 0, mins = 0, secs = 0) {
  // implement more robust checking using html .checkValidity
  if(hrs <= 0 && mins <= 0 && secs <= 0) return;

  running = true;

  interval = (Number(hrs) * 3.6e+6) + (Number(mins) * 60000) + (Number(secs) * 1000);

  const timer = setInterval(displayMe, 1000);

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
      clearInterval(timer);
    }
  }

  stopBtn.addEventListener('click', () => {
    clearInterval(timer);
    running = false;
  });
  
  resetBtn.addEventListener('click', () => {
    clearInterval(timer);
    displayHours.textContent = '00';
    displayMinutes.textContent = '00';
    displaySeconds.textContent = '00';
    running = false;
  });
}