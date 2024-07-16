// 1. join these two array together and sort the words from longest to shortest
const primaryColors = ['red', 'blue', "green"];
const pastelColors = ["lilac", "beige", "azure"];

const allColors = primaryColors.concat(pastelColors);

const sortedColors = allColors.sort((a,b) => b.length - a.length);
console.log(`Sorted colors from longest to sortest is: ${sortedColors}`)

// 2. Put the numbers in order and add the missig numbers
const count = [1, 0 ,8, 10, 7, 3, 9, 2];
count.splice(4, 0, 4, 5, 6);
const inOrder = count.sort((a, b) => a - b);
console.log(inOrder)

// 3. Make a sentence out of this array without last word
const words = ["the", 'cat', 'jumped', 'over', 'the', 'moon', 'if']
words.pop();
const sentence = words.join(' ');
console.log(sentence);

// 4. sorts these items in order and remove the odd ones
const years = ['bed', 1990, 1734, 2022, 1634];
years.shift();
years.sort((a,b) => a - b);
// const orderyears = years.slice(1, 5);
console.log(years)


