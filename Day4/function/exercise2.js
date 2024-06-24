// Write a function that will tell us wha year someone was born in based on their age.
const prompt = require('prompt-sync')();
var age = prompt("Enter your age: ");
var currentYear = new Date().getFullYear();

function dateOfBirth() {
    var dob = currentYear - age;
    console.log(`The year you were born is ${dob}`);
}

dateOfBirth();