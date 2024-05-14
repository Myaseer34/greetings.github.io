// Initialize jsConfetti
const jsConfetti = new JSConfetti();

// selecting all elements
const button = document.getElementById("greetingButton")
const inputField = document.getElementById("nameInputField")
const greetingString = "Greetings, "

// Add click event listeners to all buttons
button.addEventListener('click', () => {
    // Retrieve the emoji from the data-emoji attribute of the clicked button
    const emoji = button.getAttribute('data-emoji');
    // Trigger the confetti with the specific emoji
    jsConfetti.addConfetti({
        emojis: [emoji], // Use the emoji as confetti
        emojiSize: 70,
        confettiNumber: 40, // Number of confetti particles
    });

    // Greeting User after 2500ms or 2.5 seconds
    alertUser()
});


function alertUser() {
    setTimeout(() => {
        alert(greetingString + " " + inputField.value)
    }, 2500)
}