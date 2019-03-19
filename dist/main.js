const timeBoxButton = document.getElementById('timebox-button'),
      stopButton = document.getElementById('stop-button'),
      displayHours = document.querySelector('.count-down__hours'),
      displayMinutes = document.querySelector('.count-down__minutes'),
      displaySeconds = document.querySelector('.count-down__seconds');

timeBoxButton.addEventListener('click', ()=>{
  let interval = document.getElementById('timebox-input').value * 60000;
  setInterval(()=>{
    let hours = Math.floor(interval / 3.6e+6).toString().padStart(2, '0');
    let minutes = (Math.ceil((interval % 3.6e+6) / 60000));
    let seconds = (((interval % 3.6e+6) % 60000) / 1000).toString().padStart(2, '0');

    console.log(interval);
    
    if(interval > 0) {
      interval -= 1000;
      displayHours.textContent = hours;
      minutes > 0 ? displayMinutes.textContent = (minutes - 1).toString().padStart(2, '0') : displayMinutes.textContent = '00';
      seconds > 0 ? displaySeconds.textContent = (seconds - 1).toString().padStart(2, '0') : displaySeconds.textContent = '00';
    } else {
      clearInterval(1);
    }
    // change the interval to 1000 when done testing
  }, 1000);
});

stopButton.addEventListener('click', ()=>{
  clearInterval(1);
});