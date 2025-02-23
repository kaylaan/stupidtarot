//html elements
let typewriterElement = document.getElementById('typewriter');
let enterButton = document.getElementById('enterButton');
let nameQ = document.getElementById('nameQuestion');
let intro = document.getElementById('intro');
// let cards = document.querySelector('#cards');
let category = document.querySelector('#category');
let nextButton = document.getElementById('nextButton');
let nextButton2 = document.getElementById('nextButton2');
let name = document.querySelector('#name')
let categoryHeading = document.querySelector('#categoryHeading');
let choose = document.querySelector('#choose');
let body = document.querySelector('body')
let speech = document.querySelector('#speech')

let love = document.querySelector('#love')
let career = document.querySelector('#career')
let vibe = document.querySelector('#vibe')
let noun;
let verb;
let adjective;
let index = 0;
let user;
let choice;
let title = "#STUPiDTAROT"

let cards = ["images/cards/blackoutdrunk.png", "images/cards/winningarguments.png", "images/cards/divorce.png", "images/cards/brainrot.png", "images/cards/theywantyou.png", "images/cards/gaslight.png", "images/cards/nepotism.png", "images/cards/yaoi.png", "images/cards/closefriendsstory.png", "images/cards/homoeroticfriendship.png", "images/cards/pregnant.png", "images/cards/eyecontactship.png", "images/cards/diva.png", "images/cards/ibs.png", "images/cards/cancelledontwitter.png", "images/cards/doyouwearwigs.png", "images/cards/whitegirlpumpkinspicelatte.png", "images/cards/joinmylive.png"];

let cardContainer = document.getElementById('cardContainer');

let nouns = ['person who blacks out after 2 drinks', 'person who wins arguments',
    'divorced parent of 2', 'brainrotter', 'they def want u back', 'professional gaslighter',
    'nepo baby', 'Yaoi', 'close friends story', 'homo-erotic bestfriend', 'pregnant person',
    'eye-contactship', 'DIVA <3', 'irritable bowel syndrome haver', 'person cancelled on twitter',
    'person who wears wigs', 'white girl pumpkin spice latte', 'cards that are telling you to join my live! im live rn!!'];

let adjectives = ['blackout drunk', 'argument winner-ery', 'divorced', 'brainrotted',
    'they want u back SOO bad', 'gaslighter-y', 'nepo baby-ish', 'Yaoified', 'close friends story material',
    'homo-erotically friendly', 'pregnant', 'eye-contact-situationship-ly', 'DIVA <3',
    'irritable bowel syndrome-ish', 'cancelled on twitter core xd', 'person who wears wigs core',
    'white-girl-pumpkin-spice-latte-core', "qu'est-ce que... cards that are telling u to join my live rn-esque"];

let verbs = ['getting blackout drunk 2nite', 'winning arguments', 'marrying and then divorcing everyone u talk to',
    'brainrotting', 'they want u back for sure', 'gaslighting', 'becoming a nepo baby', 'Yaoi-ing', 'posting to ur close friends story',
    'building a homo-erotic friendship', 'getting pregnant', 'eye-contact-situation-shipping', 'DIVA-ING <3',
    'having irritable bowel syndrome', 'getting cancelled on twitter', 'thinking about when u will wear wigs',
    'white girl pumpkin spice latte-ing', 'being like cards r telling u to join my live rn!! im live rn!!!'];

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

    let numbers = []

    for (i = 0; i < 18; i++) {
        let newCard = document.createElement('img');
        newCard.src = 'images/cards/back.png';
        newCard.style.width = "90px"
        newCard.style.margin = "5px"
        newCard.classList.add('card');
        cardContainer.appendChild(newCard);

        newCard.addEventListener('click', flip)

        function flip() {
            let randNum = parseInt(Math.random() * cards.length)
            let chosen = cards[randNum]

            newCard.src = chosen;
            cardReading.push(chosen)
            numbers.push(randNum)
            cards.splice(randNum, 1);

            if (cardReading.length == 3) {

                console.log(numbers)

                noun = nouns[numbers[0]]

                verb = verbs[numbers[1]]
                adjective = adjectives[numbers[2]]

                console.log(noun, verb, adjective)

                let loveYes = [
                    "Hmmm, so you’re thinking about someone…",
                    "I can tell you now that…",
                    "Yes! They are in love with you.",
                    `Spirit is telling me that you’re the best ${noun} they’ve ever met. This may be a twin flame connection!`,
                    `I’m sensing that the last time they saw you they thought you looked very ${adjective}`,
                    `The cards are saying that you will see them within the next 48 hours to start ${verb} together.`
                ]

                let loveNo = [
                    "Hmmm, so you’re thinking about someone…",
                    "I can tell you now that…",
                    "No..... they are not in love with you.",
                    `Spirit is telling me that you’re the worst ${noun} they’ve ever met. This may be a twin flame connection!`,
                    `I’m sensing that the last time they saw you they thought you looked very ${adjective}`,
                    `The cards are saying that you will see them within the next 48 hours to start ${verb} together.`

                ]

                let careerReading = [
                    "Oh, a very strong message is coming through… you’re a corporate freak!\n",
                    `There’s lots of ${adjective} energy scoming in right now… `,
                    `the universe is telling me that you would excel in a career as a/an ${noun}. They’re not hiring though.`,
                        `If you make time in your daily routine to mindfully start ${verb} for at least 30 minutes`,
                    "this practice will invite financial prosperity into your life. Or not idk. Subscribe to my patreon pls."
                ]

                let auraReading = [
                    "Ur aura stinks! Good thing I can't smell. I am a gif.",
                    `You have very strong energy of someone who is ${verb},`,
                    `You must be very in tune with your ${adjective} side.`,
                    `Just trust your intuition and embody the traits of your Rising sign: a ${noun}.`
                ]

                if (choice == 'love') {
                    let randNum = Math.floor(Math.random() * 2)
                    if (randNum == 0) {
                        for (i = 0; i < loveYes.length; i++) {
                            speech.innerHTML += loveYes[i]
                            // setTimeout(beginReading, 7000)
                        }
                    } else {
                        for (i = 0; i < loveNo.length; i++) {
                            speech.innerHTML += loveNo[i]
                            // setTimeout(beginReading, 7000)
                        }
                    }
                

                } else if (choice == 'career') {
                    // beginReading()
                    // function beginReading() {
                    for (i = 0; i < careerReading.length; i++) {
                        speech.innerHTML += careerReading[i]
                        // setTimeout(beginReading, 7000)
                    }
                } else if (choice == 'vibe') {
                    for (i = 0; i < auraReading.length; i++) {
                        speech.innerHTML += auraReading[i]
                        // setTimeout(beginReading, 7000)
                    }
                }

                
            }
        }

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
