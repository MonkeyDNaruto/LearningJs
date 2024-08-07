// Make a countdown timer that will show you the time every 1000ms, and stop when we hit zero or press the button

const time = document.querySelector("#time-left");
const button = document.querySelector("button");

function timer() {
    if(time.innerHTML > 0) {
        time.innerHTML = time.innerHTML - 1;
    }
};
let timerID;
timerID = setInterval(timer, 1000);

function clearTimer() {
    clearInterval(timerID);
};

button.addEventListener('click', clearTimer);

