/*global window*/
(function (global) {
    "use strict";
    function Clock(el) {
        var document = global.document;
        this.el = document.getElementById(el);
        this.months = ['Січня', 'Лютого', 'Березня', 'Квітня', 'Травня', 'Червня', 'Липня', 'Серпня', 'Вересня', 'Жовтня', 'Листопада', 'Грудня'];
        this.days = ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П\'ятниця', 'Субота'];
    }
    Clock.prototype.addZero = function (i) {
        if (i < 10) {
            i = "0" + i;
            return i;
        }
        return i;
    };
    Clock.prototype.updateClock = function () {
        var now, year, month, dayNo, day, hour, minute, second, result, self;
        now = new global.Date();
        year = now.getFullYear();
        month = now.getMonth();
        dayNo = now.getDay();
        day = now.getDate();
        hour = this.addZero(now.getHours());
        minute = this.addZero(now.getMinutes());
        second = this.addZero(now.getSeconds());
        result = this.days[dayNo] + ", " + day + " " + this.months[month] + " " + year + '</br><div class="time">' + hour + ":" + minute + ":" + second + '</div>';
        self = this;
        self.el.innerHTML = result;
        global.setTimeout(function () {
            self.updateClock();
        }, 1000);
    };
    global.Clock = Clock;
}(window));

function addEvent(elm, evType, fn, useCapture) {
    "use strict";
    if (elm.addEventListener) {
        elm.addEventListener(evType, fn, useCapture);
    } else if (elm.attachEvent) {
        elm.attachEvent('on' + evType, fn);
    } else {
        elm['on' + evType] = fn;
    }
}

addEvent(window, "load", function () {
    if (document.getElementById("clock")) {
        var clock = new Clock("clock");
        clock.updateClock();
    }
});

const secondHand = document.querySelector('.seconds');

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360);
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
}

setInterval(setDate, 1000);

setDate();