let typewriterElement = document.getElementById('typewriter');
let enterButton = document.getElementById('enterButton');
let nameQ = document.getElementById('nameQuestion');
let intro = document.getElementById('intro');
let cards = document.querySelector('#cards');
let category = document.querySelector('#category');
let title = '#STUPiDTAROT';
let nextButton = document.getElementById('nextButton');
let name = document.querySelector('#name')
let user = ''
let choice;
let index = 0;
let categoryHeading = document.querySelector('#categoryHeading');

let love = document.querySelector('#love')
let career = document.querySelector('#career')
let vibe = document.querySelector('#vibe')

const cardSrc = ["images/cards/blackout.png", "images/cards/blackout.png", "images/cards/blackout.png"];
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

// Function to spread 18 cards equally across the horizon of the page

// Start the typewriter effect


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

for (i = 0; i < cardSrc.length; i++) {
    let newCard = document.createElement('img');
    newCard.src = cardSrc[i];
    cardContainer.appendChild(newCard);
    console.log(newCard.src);
}
