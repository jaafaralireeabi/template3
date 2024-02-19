let day = document.querySelector(".day h3");
let hour = document.querySelector(".hour h3");
let minute = document.querySelector(".minute h3");
let second = document.querySelector(".second h3");
//get the date
let countDown = new Date("Dec 31, 2022 23:59:59").getTime();

// get item from localStorage
let counter = setInterval(() => {
    // time now
    let now = new Date().getTime();
    // the time btween end time and now
    let timeDiff = countDown - now;
    let days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    day.innerHTML = days< 10 ? `0${days}`: days;
    let hours = Math.floor(timeDiff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    hour.innerHTML = hours< 10 ? `0${hours}`: hours;
    let minutes = Math.floor(timeDiff % (1000 * 60 * 60) / (1000 * 60));
    minute.innerHTML = minutes< 10 ? `0${minutes}`:minutes;
    let seconds = Math.floor(timeDiff % (1000 * 60) / 1000);
    second.innerHTML = seconds < 10 ? `0${seconds}`:seconds;
    if (timeDiff < 0) {
        clearInterval(counter);
    }
}, 1000); 