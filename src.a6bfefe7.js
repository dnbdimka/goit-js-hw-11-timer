parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Focm":[function(require,module,exports) {
const e={daySpan:document.querySelector('[data-value="days"]'),hoursSpan:document.querySelector('[data-value="hours"]'),minsSpan:document.querySelector('[data-value="mins"]'),secsSpan:document.querySelector('[data-value="secs"]')};class t{constructor({selector:e,targetDate:t}){this.selector=e,this.targetDate=t,this.refs=this.getRefs(e)}start(){this.getTime(),setInterval(this.getTime.bind(this),1e3)}getRefs(e){return{daysSpan:document.querySelector(`${e} [data-value="days"]`),hoursSpan:document.querySelector(`${e} [data-value="hours"]`),minsSpan:document.querySelector(`${e} [data-value="mins"]`),secsSpan:document.querySelector(`${e} [data-value="secs"]`)}}padStrStart(e){return String(e).padStart(2,0)}renderTimer(e){const{daysSpan:t,hoursSpan:a,minsSpan:r,secsSpan:s}=this.refs,{days:n,hours:o,mins:i,secs:u}=e;t.innerHTML=this.padStrStart(n),a.innerHTML=this.padStrStart(o),r.innerHTML=this.padStrStart(i),s.innerHTML=this.padStrStart(u)}makeTime(e){return{days:Math.floor(e/864e5),hours:Math.floor(e%864e5/36e5),mins:Math.floor(e%36e5/6e4),secs:Math.floor(e%6e4/1e3)}}getTime(){const e=Date.now();let t=this.targetDate-e;t<0&&(t=0),this.renderTimer(this.makeTime(t))}}const a=new t({selector:"#timer-1",targetDate:new Date("Sep 04, 2021")});a.start();
},{}]},{},["Focm"], null)
//# sourceMappingURL=/goit-js-hw-11-timer/src.a6bfefe7.js.map