let typewriterElement = document.getElementById('typewriter');
let enterButton = document.getElementById('enterButton');
let nameQ = document.getElementById('nameQuestion');
let intro = document.getElementById('intro');
// let cards = document.querySelector('#cards');
let category = document.querySelector('#category');
let title = '#STUPiDTAROT';
let nextButton = document.getElementById('nextButton');
let nextButton2 = document.getElementById('nextButton2');
let name = document.querySelector('#name')
let user = ''
let choice;
let index = 0;
let categoryHeading = document.querySelector('#categoryHeading');
let choose = document.querySelector('#choose');
let body = document.querySelector('body')
let speech = document.querySelector('#speech')

let love = document.querySelector('#love')
let career = document.querySelector('#career')
let vibe = document.querySelector('#vibe')

let cards = ["images/cards/blackout.png", "images/cards/blackout.png", "images/cards/blackout.png"];
let cardContainer = document.getElementById('cardContainer');

// Function to create typewriter effect
function typeWriter() {
    if (index < title.length) {
        typewriterElement.innerHTML += title.charAt(index);
        index++;
        setTimeout(typeWriter, 80);
    }
}
typeWriter();

// Add a click event listener to the enter button
enterButton.addEventListener('click', function () {
    // Hide the intro page and show the main content
    intro.style.display = 'none';
    nameQ.style.display = 'block';
    name.value = '';
});

// Add a click event listener to the main button

nextButton.addEventListener('click', function () {
    console.log(name.value);
    user = name.value;
    name.style.display = 'none';
    nameQ.style.display = 'none';
    category.style.display = 'block';
    categoryHeading.textContent = 'Hi ' + user + '. What do u need guidance on?'
});

nextButton2.addEventListener('click', function () {
    // Hide the intro page and show the main content
    category.style.display = 'none';
    choose.style.display = 'block';
    name.value = '';
    body.style.display = 'block';
    let cardReading = [];

    for (i=0; i < 18; i++) {
        let newCard = document.createElement('img');
        newCard.src = 'images/cards/back.png';
        newCard.style.width = "90px"
        newCard.style.margin = "5px"
        cardContainer.appendChild(newCard);

        newCard.addEventListener('click', flip)

        function flip() {
            let randNum = parseInt(Math.random()*cards.length)
            let chosen = cards[randNum]
            newCard.src = chosen;
            cardReading.push(chosen)
            cards.splice(randNum, 1);
        }

        // if (cardReading.length == 3) {
        //     console.log('here')
        // }
    }

    if (choice == 'love') {
        let randNum =
        speech.innerHTML = ''
    }

});



love.addEventListener('click', function () {
    love.style.border = '4px solid rgb(205,89,140)'
    career.style.border = '4px solid rgba(205,89,140,0)'
    vibe.style.border = '4px solid rgba(205,89,140,0)'
    choice = 'love'
})

career.addEventListener('click', function () {
    career.style.border = '4px solid rgb(205,89,140)'
    love.style.border = '4px solid rgba(205,89,140,0)'
    vibe.style.border = '4px solid rgba(205,89,140,0)'
    choice = 'career'
})

vibe.addEventListener('click', function () {
    vibe.style.border = '4px solid rgb(205,89,140)'
    career.style.border = '4px solid rgba(205,89,140,0)'
    love.style.border = '4px solid rgba(205,89,140,0)'
    choice = 'vibe'
})



// for (i = 0; i < cards.length; i++) {
//     let newCard = document.createElement('img');
//     newCard.src = cards[i];
//     cardContainer.appendChild(newCard);
//     console.log(newCard.src);
// }
