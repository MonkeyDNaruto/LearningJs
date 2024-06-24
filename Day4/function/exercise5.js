// Write a arrow function to convert minutes into hour minutes and second

const prompt = require("prompt-sync")();

let minutes = prompt("Enter time in minutes: ");

var time = () => {
    let hour = Math.floor(minutes/60);
    let minute = Math.floor(minutes % 60);
    let second = Math.floor((minutes % 1) * 60);
    console.log(`${minutes}minutes => ${hour}h ${minute}m ${second}s`);
}

time();