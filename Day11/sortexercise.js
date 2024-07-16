// Sort the orders in ascending order and show them in display order

const order = [234, 334, 23, 543, 525];
const displayElement = document.querySelector('.display');

function sortedOrder() {
    order.sort((a, b) => a - b);
    displayElement.innerHTML = order;
}

document.addEventListener('click', sortedOrder);