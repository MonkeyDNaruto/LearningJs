const bobBody = document.querySelector('.body-container');
const bobEyes = document.querySelector('.eyes-container');
const eye = document.querySelector('.eye');

let left = 100;

function moveRight() {
    left += 100;
    bobBody.style.left = left + 'px';
    bobEyes.style.transform = "rotate(0deg)"
    bobEyes.style.left = '60px';
}

function moveLeft() {
    left -= 100;
    bobBody.style.left = left + 'px';
    bobEyes.style.transform = "rotate(180deg)";
    bobEyes.style.left = '-60px';
}

function moveUp() {
    left += 100;
    bobBody.style.bottom = left + 'px';
}

function moveDown() {
    left -= 100;
    bobBody.style.bottom = left + 'px';
}

function moveBob(e){
    bobDirection = e.key;
    if(bobDirection == 'ArrowUp') {
        moveUp();
    } else if (bobDirection === 'ArrowDown') {
        moveDown();
    } else if (bobDirection == 'ArrowRight') {
        moveRight();
    } else if(bobDirection == 'ArrowLeft') {
        moveLeft();
    } else {
        console.log(bobDirection)
    }
}

document.addEventListener('keydown', moveBob);