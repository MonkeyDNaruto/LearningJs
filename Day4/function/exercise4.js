// Write a function that will convert hours into seconds
const prompt = require("prompt-sync")();

let hour = prompt("Enter time in hour: ");

function second() {
    let sec = hour * 60 * 60;
    console.log(`${hour}h => ${sec}s`);
};

second();
