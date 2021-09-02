const refs = {
    daySpan: document.querySelector('[data-value="days"]'),
    hoursSpan: document.querySelector('[data-value="hours"]'),
    minsSpan: document.querySelector('[data-value="mins"]'),
    secsSpan: document.querySelector('[data-value="secs"]'),
}

class CountdownTimer {
    constructor({ selector, targetDate } ) {
        this.selector = selector;
        this.targetDate = targetDate;

        this.refs = this.getRefs(selector);
    }
    start() {
        this.getTime();
        setInterval(this.getTime.bind(this), 1000);
    }
    getRefs(selector) {
        const daysSpan = document.querySelector(`${selector} [data-value="days"]`);
        const hoursSpan = document.querySelector(`${selector} [data-value="hours"]`);
        const minsSpan = document.querySelector(`${selector} [data-value="mins"]`);
        const secsSpan = document.querySelector(`${selector} [data-value="secs"]`);
        
        return { daysSpan, hoursSpan, minsSpan, secsSpan };
    };
    padStrStart(num) {
        return String(num).padStart(2, 0);
    };
    renderTimer(obj) {
        const { daysSpan, hoursSpan, minsSpan, secsSpan } = this.refs;
        const { days, hours, mins, secs } = obj;
        
        daysSpan.innerHTML = days;
        hoursSpan.innerHTML = this.padStrStart(hours);
        minsSpan.innerHTML = this.padStrStart(mins);
        secsSpan.innerHTML = this.padStrStart(secs);

    };
    makeTime(ms) {
        const days = Math.floor(ms / (1000 * 60 * 60 * 24));
        const hours = Math.floor((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const mins = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
        const secs = Math.floor((ms % (1000 * 60)) / 1000);

        return {days, hours, mins, secs}
     };
    getTime() {
        const now = Date.now();
        const time = this.targetDate - now;

        this.renderTimer(this.makeTime(time));
    }
};



const timer = new CountdownTimer({
    selector: '#timer-2',
    targetDate: new Date('Sep 03, 2021'),
});

timer.start();