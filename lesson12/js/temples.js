window.addEventListener('load', () => {
    const hambutton = document.querySelector('.ham');
    const mainnav = document.querySelector('#navigation');
    hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

    // Retrieve and display the current year
    let d = new Date();
    let year = d.getFullYear()
    document.getElementById("currentYear").textContent = year;


    const requestURL = "js/temples_json.json";
})