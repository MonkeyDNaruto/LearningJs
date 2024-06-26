// Write a function that will calculate the area of circle
const prompt = require("prompt-sync")();

const radius = prompt("Enter the value of radius: ");

function areaOfCircle() {
    area = ( Math.PI * (radius * radius));
    console.log(`Area of circle having radius ${radius} is ${area}`);
};

areaOfCircle();

// write a function that will reaturn random full integer

function randomNumber() {
    return Math.floor(Math.random() * 100);
}

console.log(`Random number is ${randomNumber()}`);