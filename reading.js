document.addEventListener('DOMContentLoaded', function() {
    const nextButton = document.getElementById('nextButton');
    const nameInput = document.getElementById('name');
    const categorySection = document.getElementById('category');
    const nameQuestionSection = document.getElementById('nameQuestion');

    // Add a click event listener to the next button
    nextButton.addEventListener('click', function() {
        const name = nameInput.value.trim();
        if (name) {
            // Hide the name question section and show the category section
            nameQuestionSection.style.display = 'none';
            categorySection.style.display = 'block';
        } else {
            alert('Please enter your name.');
        }
    });

    // Add a click event listener to the category buttons (example for love category)
    const loveButton = document.getElementById('love');
    loveButton.addEventListener('click', function() {
        // Code to execute when the love category is selected
        alert('Love category selected!');
    });

    // Add similar event listeners for other category buttons (career, vibe, etc.)
});