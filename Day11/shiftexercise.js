// Write a function that will remove first item form top fridge when click on document

const fridge = document.querySelector('.fridge');
const topShelf = document.querySelector('#top-shelf');
const foodItems = ['🍇', '🍈', '🍉', '🍋', '🍌'];

topShelf.innerHTML = foodItems;

function removeFruit() {
    foodItems.shift();
    topShelf.innerHTML = foodItems;
}

document.addEventListener('click', removeFruit);