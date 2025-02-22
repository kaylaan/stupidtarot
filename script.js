document.addEventListener('DOMContentLoaded', function() {
    const typewriterElement = document.getElementById('typewriter');
    const enterButton = document.getElementById('enterButton');
    const mainContent = document.getElementById('mainContent');
    const intro = document.getElementById('intro');
    const text = 'Whats ur name?';
    let index = 0;

    // Function to create typewriter effect
    function typeWriter() {
        if (index < text.length) {
            typewriterElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, 80); // Adjust the speed by changing the timeout value
        }
    }

    // Start the typewriter effect
    typeWriter();

    // Add a click event listener to the enter button
    enterButton.addEventListener('click', function() {
        // Hide the intro page and show the main content
        intro.style.display = 'none';
        mainContent.style.display = 'block';
    });

    // Add a click event listener to the main button
    const button = document.getElementById('myButton');
    button.addEventListener('click', function() {
        // Code to execute when the button is clicked
        button.innerText = 'Hello';
        button.style.backgroundColor = 'blue';
    });
});