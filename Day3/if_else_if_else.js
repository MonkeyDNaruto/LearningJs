// write an else if statement that will check the following:
// If it's over 30C, print "Don't forget the factor 50!"
// If it's below 10C, print "Wear a jacket today!"
// If it's any othe temp, print "It's a t-shirt kind of day!"

let temp = 6;

if(temp > 30) {
    console.log("Don't forget the facroe!");
} else if( temp < 10) {
    console.log("Wear a jacket today!");
} else {
    console.log("Ir's a t-shirt kind of day!")
}

// Write statement tahe will check if you are bitcoin trillionaire, or a bitcoin millionaire, or a bitcoin billionaire
const million = 1000000;
const billion = 1000000000;
const trillion = 1000000000000; 
let totalBitcoin = 1000;

  if( (totalBitcoin >= million) && (totalBitcoin < billion)) {
    console.log("You are a bitcoin millionaire");
  } else if((totalBitcoin >= billion) && (totalBitcoin < trillion)) {
    console.log("You are a bitcoin billionaire.")
  } else if (totalBitcoin >= trillion) {
    console.log("You are a bitcoin trillionaire.")
  } else {
    console.log("Sorry, you are poor.")
  }