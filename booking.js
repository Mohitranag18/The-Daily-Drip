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
