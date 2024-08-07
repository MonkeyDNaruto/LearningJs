// Make a headline saying 'Boo!' show up after 5 seconds when we click on the document

const headline = document.querySelector("h1");

function write() {
    setTimeout(() => {
        headline.innerHTML = "Boo!";
    }, 5000);
    
};

document.addEventListener('click', write);