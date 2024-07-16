// Write a function that will add an item on first top shelf of fridge when click on document

const fridge = document.querySelector('.fridge');
const topShelf = document.querySelector('#top-shelf');
const foodItems = [];

topShelf.innerHTML = foodItems;

function addFruit() {
    foodItems.unshift( '🍌');
    topShelf.innerHTML = foodItems;
}

document.addEventListener('click', addFruit);