// Fizz Buzz!
// Print out 100 numbers. But if the number is divisible by 5 you have to replace it with 'buzz'. If the number is divisible by 
// 3 you have to replace it with 'fizz'. And finally, if the number is divisible by both 3 and 5 you have to replace it with 
// 'fizz buzz'

let num = 1;
while(num <= 100) {
    if((num%3 == 0) && (num%5 == 0)) {
        console.log("fizz buzz");
    } else if(num%3 == 0) {
        console.log("fizz");
    } else if(num%5 == 0) {
        console.log("buzz");
    } else {
        console.log(num);
    }
    num++;
}