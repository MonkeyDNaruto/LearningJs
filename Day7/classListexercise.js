// .style and classList exercise
// move the heart iin the middle and change the background color to different color on click of the document.

const heart = document.getElementById("heart");
const body = document.querySelector('body');
function onClick() {
    heart.classList.add('center')
    body.style.backgroundColor = 'rgb(220, 233, 163)';
}

document.addEventListener('click', onClick);