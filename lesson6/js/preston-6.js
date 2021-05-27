// putting this code within the evenlistener, listening for the page's load makes it possible
// to see the id's and such right away/early, otherwise the program will think it doesn't exist yet
window.addEventListener('load', () => {
    const hambutton = document.querySelector('.ham');
    const mainnav = document.querySelector('#navigation');

    hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

    // To solve the mid resizing issue with responsice class on
    // window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};

    // Display the current date
    let currentDate = new Date();
    // let weekDay = new Array(7);
    // weekDay[0] = 'Sunday';
    // weekDay[1] = 'Monday';
    // weekDay[2] = 'Tuesday';
    // weekDay[3] = 'Wednesday';
    // weekDay[4] = 'Thursday';
    // weekDay[5] = 'Friday';
    // weekDay[6] = 'Saturday';
    // week.textContent = weekDay[currentDate.getDay()];

    // If it is friday, display an announcement about pancakes in the park
    const pancakeDay = document.querySelector('#pancakeDay');
    if (currentDate.getDay() == 5) {
        pancakeDay.style.display = 'block';
    }
    else {
        pancakeDay.style.display = 'none';
    }

    document.getElementById("currentDate").textContent = currentDate;
// Retrieve and display the current year
    let d = new Date();
    let year = d.getFullYear()
    document.getElementById("currentYear").textContent = year;


});