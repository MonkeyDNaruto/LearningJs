// nullish coaleshing operator check the first argument if it is true it return it else check for next argument
const firstChoice = "Chicken";
const secondChoice = "Veggies";
const thirdChoice = "Drinks";

var whatWillYouTake = firstChoice ?? secondChoice ?? thirdChoice;
console.log(whatWillYouTake);

