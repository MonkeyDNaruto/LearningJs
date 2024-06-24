// Write a function that will print out "Hello, World!" phrase x amount of times in the console.
// Eg: phrasePrint(2) => "Hello, World!" "Hello, World!"

const prompt = require("prompt-sync")();

let num = prompt("Enter the amount of times you want to print: ");

function phrasePrint() {
    let i = 1;
    while(i <= num) {
        console.log("Hello, World!");
        i++;
    }
}

phrasePrint();