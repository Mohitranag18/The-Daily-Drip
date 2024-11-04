// Form submission simulation for demonstration
const form = document.getElementById('contactForm');
const confirmationMessage = document.getElementById('confirmationMessage');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    confirmationMessage.style.display = 'block';
    setTimeout(() => {
        confirmationMessage.style.display = 'none';
        form.reset();
    }, 3000);
});