const refs = {
    daySpan: document.querySelector('[data-value="days"]'),
    hoursSpan: document.querySelector('[data-value="hours"]'),
    minsSpan: document.querySelector('[data-value="mins"]'),
    secsSpan: document.querySelector('[data-value="secs"]'),
}

const targetDate = new Date('Sep 03, 2021').getTime();

const makeTime = ms => {
    const days = Math.floor(ms / (1000 * 60 * 60 * 24));
    const hours = Math.floor((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((ms % (1000 * 60)) / 1000);
    return { days, hours, mins, secs };

};

const padStrStart = num => String(num).padStart(2, 0);

const renderTimer = obj => {
    const { days, hours, mins, secs } = obj;
    refs.daySpan.innerHTML = days;
    refs.hoursSpan.innerHTML = padStrStart(hours);
    refs.minsSpan.innerHTML = padStrStart(mins);
    refs.secsSpan.innerHTML = padStrStart(secs);
 };

const makeTimer = () => {
    const now = Date.now();

    const time = targetDate - now;
    renderTimer(makeTime(time));
};

makeTimer();

setInterval(() => {
    makeTimer();
}, 1000);