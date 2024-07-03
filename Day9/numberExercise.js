// Number() exercise 
// Write a function that will add two costs together and return the result in dollors to 2 decimal points.
const netflixSpend2024USD = 210.3131; 
const netflixSpend2023USD = 323.42424;

function totalCost() {
    const cost = netflixSpend2023USD + netflixSpend2024USD;
    console.log(Number(cost.toFixed(2)));
}

totalCost();

// 2. Write a function that will get your total bill cost in dollors to 2 decimal points after 12% service charge has been
// applied 

const drink = 324.3232;
const meals = 431.3324;
const dessert = 232.23524

function totalBill() {
    var totalBills = drink + meals + dessert;
    var billAfterServiceCharge = totalBills - (12/100 * totalBills);
    console.log(Number(billAfterServiceCharge.toFixed(2)));
}

totalBill();