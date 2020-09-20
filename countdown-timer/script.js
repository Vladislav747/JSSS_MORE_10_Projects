const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');

const newYears = '2 Dec 2020';

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    console.log(newYearsDate - currentDate);

    const totalSeconds = (newYearsDate - currentDate) / 1000.0;

    const days = Math.floor(totalSeconds/3600/24);
    const hours = Math.floor(totalSeconds/3600/24) % 24;
    const minutes = Math.floor((totalSeconds/60) % 24) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time){
    return time < 10 ? `0${time}` : time;
}

countdown();

setInterval(countdown, 1000);