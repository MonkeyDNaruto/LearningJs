// Write a function that will tell us how many sheep we have in our field on click of document
const sheeps = document.querySelectorAll('.sheep');

function count(){
    console.log(`Total number of sheeps are: ${sheeps.length}`);        
}

document.addEventListener('click', count)