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
        
        daysSpan.innerHTML = this.padStrStart(days);
        hoursSpan.innerHTML = this.padStrStart(hours);
        minsSpan.innerHTML = this.padStrStart(mins);
        secsSpan.innerHTML = this.padStrStart(secs);

    };
    makeTime(ms) {
        let days = Math.floor(ms / (1000 * 60 * 60 * 24));
        let hours = Math.floor((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let mins = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
        let secs = Math.floor((ms % (1000 * 60)) / 1000);
        
        return {days, hours, mins, secs}
     };
    getTime() {
        const now = Date.now();
        let time = this.targetDate - now;
        if (time < 0 ) {
            time = 0;
        }
        this.renderTimer(this.makeTime(time));
    }
};



const timer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Sep 04, 2021'),
});

timer.start();