const cafeCard = document.getElementById('cafeCard');
const gameZoneCard = document.getElementById('gameZoneCard');
const reservationForm = document.getElementById('reservationForm');
const submitButton = document.getElementById('submitReservation');
const confirmationMessage = document.getElementById('confirmationMessage')
cafeCard.addEventListener('click', () => {
    reservationForm.style.display = 'block'; // Show form for Cafe Area
})
gameZoneCard.addEventListener('click', () => {
    reservationForm.style.display = 'block'; // Show form for Game Zone
})
submitButton.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default action if inside a for
    // Display the confirmation message
    confirmationMessage.style.display = 'block'
    // Hide the message after a few seconds
    setTimeout(() => {
        confirmationMessage.style.display = 'none';
        reservationForm.reset(); // Reset the form
        reservationForm.style.display = 'none'; // Hide form after submission
    }, 3000);
});