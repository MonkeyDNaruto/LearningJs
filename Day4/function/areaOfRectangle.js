// WAP to take length and breadth from user and console.log area of rectangle using function

const prompt = require("prompt-sync")();
let length = prompt("Enter the length of rectangle: ");
let breadth = prompt("Enter the breadth of rectangle: ");

function area() {
    return length*breadth;
};

console.log(`Area of rectangle is ${area()}`);