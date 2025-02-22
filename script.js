document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('myButton');
    const typewriterElement = document.getElementById('typewriter');
    const text = 'hellooooo';
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

    // Add a click event listener to the button
    button.addEventListener('click', function() {
        // Code to execute when the button is clicked
        button.innerText = 'Hello';
        button.style.backgroundColor = 'blue';
    });
});