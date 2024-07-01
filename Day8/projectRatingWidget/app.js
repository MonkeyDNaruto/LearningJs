const mouth = document.getElementById('mouth');
const emotionElements = document.querySelectorAll('.rating-container div');

function emotionSelector(e) {
    mouth.classList.remove('happy-mouth', 'okay-mouth', 'bad-mouth');
    const choosenEmotion = e.target.id;
    if(choosenEmotion == 'good') {
        mouth.classList.add('happy-mouth');
    } else if( choosenEmotion == 'okay') {
        mouth.classList.add('okay-mouth');
    } else {
        mouth.classList.add('bad-mouth');
    }
}

emotionElements.forEach(emotionElement => 
    emotionElement.addEventListener('click', emotionSelector)
)