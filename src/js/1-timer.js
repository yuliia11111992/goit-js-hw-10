import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const startButton = document.querySelector('[data-start]');
const inputData = document.querySelector('#datetime-picker');
const daysData = document.querySelector('[data-days]');
const hoursData = document.querySelector('[data-hours]');
const minutesData = document.querySelector('[data-minutes]');
const secondsData = document.querySelector('[data-seconds]');


let userSelectedDate;
let countdownInterval;
startButton.disabled = true;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userSelectedDate = selectedDates[0];
    if (userSelectedDate < Date.now()) {
      iziToast.error({
        message: 'Please choose a date in the future',
        position: 'topRight',
      });
      startButton.disabled = true;
    } else {
      startButton.disabled = false;
    }
  },
};

function startTimer() {
  countdownInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
  const currentDate = new Date();
  const remainingTime = userSelectedDate - currentDate;
  const { days, hours, minutes, seconds } = convertMs(remainingTime);

  if (!isNaN(days) && !isNaN(hours) && !isNaN(minutes) && !isNaN(seconds)) {
    daysData.textContent = addLeadingZero(days);
    hoursData.textContent = addLeadingZero(hours);
    minutesData.textContent = addLeadingZero(minutes);
    secondsData.textContent = addLeadingZero(seconds);
  }

  if (remainingTime <= 0) {
    stopTimer();
  }
}

startButton.addEventListener('click', () => {
  if (userSelectedDate) {
    startButton.disabled = true;
    inputData.disabled = true;
    startTimer();
  }
});

function stopTimer() {
  clearInterval(countdownInterval);
  daysData.textContent = '00';
  hoursData.textContent = '00';
  minutesData.textContent = '00';
  secondsData.textContent = '00';
  countdownInterval = null;
  inputData.disabled = false;
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

flatpickr(inputData, options);
