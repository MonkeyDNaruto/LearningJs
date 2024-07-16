// Can you turn all pac-man to turn left, if we press the "Arrow left" button and turn right if we press the "Arrow right" button
const pacMen = document.querySelectorAll('.pac-man');

function turn(event){
    const direction = event.key;
        if(direction == "ArrowLeft") {
            pacMen.forEach(pacman => pacman.style.transform = "rotate(180deg)");
        } else if(direction == "ArrowRight") {
            pacMen.forEach(pacman => pacman.style.transform = "rotate(360deg)");
        } else if(direction == "ArrowDown") {
            pacMen.forEach(pacman => pacman.style.transform = "rotate(90deg)");
        } else if(direction == "ArrowUp") {
            pacMen.forEach(pacman => pacman.style.transform = "rotate(270deg)");
        } else {
            console.log("Press arrow key")
        }
        
}

document.addEventListener('keydown', turn);