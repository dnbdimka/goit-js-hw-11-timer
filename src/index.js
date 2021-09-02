import './sass/main.scss';

const refs = {
    daySpan: document.querySelector('[data-value="days"]'),
    hoursSpan: document.querySelector('[data-value="hours"]'),
    minsSpan: document.querySelector('[data-value="mins"]'),
    secsSpan: document.querySelector('[data-value="secs"]'),
}

const targetDate = new Date('Sep 03, 2021').getTime();
// const getTime = () => {
//     const now = Date.now();

//     const time = targetDate - now;

//     const days = Math.floor(time / (1000 * 60 * 60 * 24));
//     refs.daySpan.innerHTML = days;

//     const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     refs.hoursSpan.innerHTML = hours;

//     const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
//     refs.minsSpan.innerHTML = mins;

//     const secs = Math.floor((time % (1000 * 60)) / 1000);
//     refs.secsSpan.innerHTML = secs;
// }

// getTime();

setInterval(() => {
    const now = Date.now();
    const time = targetDate - now;

    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    refs.daySpan.innerHTML = days;

    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    refs.hoursSpan.innerHTML = hours;

    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    refs.minsSpan.innerHTML = mins;

    const secs = Math.floor((time % (1000 * 60)) / 1000);
    refs.secsSpan.innerHTML = secs;
}, 1000)
