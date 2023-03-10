const timeElement = document.getElementById('time');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
let timer;

function updateTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const timeString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  timeElement.textContent = timeString;
}

function startClock() {
  timer = setInterval(updateTime, 1000);
}

function stopClock() {
  clearInterval(timer);
}

startButton.addEventListener('click', startClock);
stopButton.addEventListener('click', stopClock);

startClock();
