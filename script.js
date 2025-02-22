document.addEventListener('DOMContentLoaded', function() {
    const typewriterElement = document.getElementById('typewriter');
    const enterButton = document.getElementById('enterButton');
    const nameQ = document.getElementById('nameQuestion');
    const intro = document.getElementById('intro');
<<<<<<< HEAD
    const text = 'Whats ur name?';
=======
    const text = '#STUPiDTAROT';
    const nextButton = document.getElementById('nextButton');
    let name = document.querySelector('#name')
    let user = '';
>>>>>>> f7cf3fabcfbea6f9d250d86dcb4fee1841efdb54
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            typewriterElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, 80); // Adjust the speed by changing the timeout value
        }
    }

    typeWriter();

    enterButton.addEventListener('click', function() {
        intro.style.display = 'none';
        nameQ.style.display = 'block';
    });

    // Add a click event listener to the main button
    
    nextButton.addEventListener('click', function() {
        console.log(name.value);
        user = name.value;
    });
});