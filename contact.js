const contactButton = document.getElementById('contactButton');
const successMessage = document.getElementById('successMessage')
contactButton.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the form from submitting and reloading the pag
    // Show the success message
    successMessage.style.display = 'block'
    // Hide the message after 3 seconds
    setTimeout(() => {
        successMessage.style.display = 'none';
    }, 2000);
});