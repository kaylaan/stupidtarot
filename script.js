document.addEventListener('DOMContentLoaded', function() {
    let typewriterElement = document.getElementById('typewriter');
    let enterButton = document.getElementById('enterButton');
    let nameQ = document.getElementById('nameQuestion');
    let intro = document.getElementById('intro');
    let category = document.querySelector('#category');
    let title = '#STUPiDTAROT';
    let nextButton = document.getElementById('nextButton');
    let name = document.querySelector('#name')
    let user = ''
    let choice;
    let index = 0;
    

    // Function to create typewriter effect
    function typeWriter() {
        if (index < title.length) {
            typewriterElement.innerHTML += title.charAt(index);
            index++;
            setTimeout(typeWriter, 80); 
        }
    }

    // Start the typewriter effect
    typeWriter();

    // Add a click event listener to the enter button
    enterButton.addEventListener('click', function() {
        // Hide the intro page and show the main content
        intro.style.display = 'none';
        nameQ.style.display = 'block';
    });

    // Add a click event listener to the main button
    
    nextButton.addEventListener('click', function() {
        console.log(name.value);
        user = name.value;
    });


});