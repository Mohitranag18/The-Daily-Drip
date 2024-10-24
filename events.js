
// logic for menu section
let upcoming = document.querySelector("#Upcoming");
let previous = document.querySelector("#Previous");
let upcomingItems = document.querySelector("#upcoming-items");
let previousItems = document.querySelector("#previous-items");
let events_head = 1;

upcoming.addEventListener("click", () => {
    events_head = 1;
    updateDisplay();
});
previous.addEventListener("click", () => {
    events_head = 2;
    updateDisplay();
});

function updateDisplay() {
    // Reset styles
    upcoming.style.backgroundColor = '';
    previous.style.backgroundColor = '';
    upcomingItems.style.display = 'none';
    previousItems.style.display = 'none';

    // Show the appropriate section and change background color
    if (events_head === 1) {
        upcomingItems.style.display = '';
        upcoming.style.backgroundColor = '#6F4E37';
    } else if (events_head === 2) {
        previousItems.style.display = '';
        previous.style.backgroundColor = '#6F4E37';
    }
}
updateDisplay();

const subscribeButton = document.getElementById('subscribeButton');
const successMessage = document.getElementById('successMessage')
subscribeButton.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the form from submitting and reloading the pag
    // Show the success message
    successMessage.style.display = 'block'
    // Hide the message after 3 seconds
    setTimeout(() => {
        successMessage.style.display = 'none';
    }, 2000);
});