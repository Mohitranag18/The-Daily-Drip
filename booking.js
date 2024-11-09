const cafeAreaHead = document.querySelector('.cafe-area');
const gameZoneHead = document.querySelector('.game-zone');
const upcomingHead = document.querySelector('.upcoming-events');

const cafeAreaCont = document.querySelector('.reservationOption1');
const gameZoneCont = document.querySelector('.reservationOption2');
const upcomingCont = document.querySelector('.reservationOption3');

let reservationOption = 1;

function updateReservationDisplay() {
    // Set display properties for each section based on the reservation option
    cafeAreaCont.style.display = reservationOption === 1 ? 'block' : 'none';
    gameZoneCont.style.display = reservationOption === 2 ? 'block' : 'none';
    upcomingCont.style.display = reservationOption === 3 ? 'block' : 'none';

    // Set background color of headers based on selected option
    cafeAreaHead.style.backgroundColor = reservationOption === 1 ? "#6F4E37" : "#C2B280";
    gameZoneHead.style.backgroundColor = reservationOption === 2 ? "#6F4E37" : "#C2B280";
    upcomingHead.style.backgroundColor = reservationOption === 3 ? "#6F4E37" : "#C2B280";
}

// Initial display setup
updateReservationDisplay();

// Event listeners to update the reservation option and display when headers are clicked
cafeAreaHead.addEventListener('click', () => {
    reservationOption = 1;
    console.log("Cafe area clicked");
    updateReservationDisplay();
});

gameZoneHead.addEventListener('click', () => {
    reservationOption = 2;
    console.log("Game zone clicked");
    updateReservationDisplay();
});

upcomingHead.addEventListener('click', () => {
    reservationOption = 3;
    console.log("Upcoming events clicked");
    updateReservationDisplay();
});

const submitReservation = document.getElementById('submitReservation1');
const successMessage = document.getElementById('successMessage');
const contactForm = document.querySelector('.contact-form');

submitReservation.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the form from submitting and reloading the page

    // Check if all form inputs are filled
    const inputs = contactForm.querySelectorAll('input, textarea');
    let allFilled = true;

    inputs.forEach(input => {
        if (!input.value.trim()) {
            allFilled = false;
        }
    });

    if (allFilled) {
        // Show the success message
        successMessage.style.display = 'block';

        // Hide the message after 3 seconds
        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 2000);
    } else {
        alert("Please fill in all fields before submitting.");
    }
});

const submitReservation2 = document.getElementById('submitReservation2');
const successMessage2 = document.getElementById('successMessage2');
const contactForm2 = document.querySelector('.contact-form2');

submitReservation2.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the form from submitting and reloading the page

    // Check if all form inputs are filled
    const inputs = contactForm2.querySelectorAll('input, textarea');
    let allFilled = true;

    inputs.forEach(input => {
        if (!input.value.trim()) {
            allFilled = false;
        }
    });

    if (allFilled) {
        // Show the success message
        successMessage2.style.display = 'block';

        // Hide the message after 3 seconds
        setTimeout(() => {
            successMessage2.style.display = 'none';
        }, 2000);
    } else {
        alert("Please fill in all fields before submitting.");
    }
});

const submitReservation3 = document.getElementById('submitReservation3');
const successMessage3 = document.getElementById('successMessage3');
const contactForm3 = document.querySelector('.contact-form3');

submitReservation3.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the form from submitting and reloading the page

    // Check if all form inputs are filled
    const inputs = contactForm3.querySelectorAll('input, textarea');
    let allFilled = true;

    inputs.forEach(input => {
        if (!input.value.trim()) {
            allFilled = false;
        }
    });

    if (allFilled) {
        // Show the success message
        successMessage3.style.display = 'block';

        // Hide the message after 3 seconds
        setTimeout(() => {
            successMessage3.style.display = 'none';
        }, 2000);
    } else {
        alert("Please fill in all fields before submitting.");
    }
});
