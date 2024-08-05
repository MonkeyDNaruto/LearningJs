// Filter out those number which are divisible by 5
const numbers = [25, 30, 9, 35, 99, 123, 50];

const numberDivisibleBy5 = numbers.filter(number => number%5 === 0);
console.log(numberDivisibleBy5);