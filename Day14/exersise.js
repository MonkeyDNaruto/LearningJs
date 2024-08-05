// Write a function that will change the temperatures from celcius to fahrenheit.
// const temperatureInCelcius = [37, 45, 65, 24, 54];
// const temperatureInFahrenheit = temperatureInCelcius.map(temperature => (temperature * 9/5) + 32);
// console.log(temperatureInFahrenheit);
function getCelcius(numbers) {
    return numbers.map(number => (number * 9/5) + 32);
}
console.log(getCelcius([37, 45, 65, 24, 54]))


// Using '.join()' and 'length' write a function that will return the total number of character in array of string.
// const words = ['hello', 'world', 'coding'];
// const totalWords = words.join('');
// const totalLength = totalWords.length;
// console.log(totalLength);
function getTotal(words) {
    return words.join('').length;
}
console.log(getTotal(['hello', 'world', 'coding']));

// Using '.some()' write a function that will check an array for falsy value.

// const checkFalsy = [null, 0, [], -3];
// const checkFalsyValue = checkFalsy.some(falsy => falsy == false);
// console.log(checkFalsyValue);
function checkFalsyValue(items) {
    return items.some(item => item == false);
}
console.log(checkFalsyValue([null, 0, [], -3]));

// Using 'split()', "filter()", "include()" and "length()" write a function that will tell you how many vowel there are in a sentence
// const sentence = "I am a little sausage";
// const vowelLetter = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
// const sentenceArray = sentence.split('');
// const vowel = sentenceArray.filter(letter => vowelLetter.includes(letter)).length;
// console.log(vowel)
function vowelCount(sentence) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    const array = sentence.split('');
    return array.filter(letter => vowels.includes(letter)).length;
};
console.log(vowelCount("I am a little sausage"));