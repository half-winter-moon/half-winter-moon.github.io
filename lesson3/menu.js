// putting this code within the evenlistener, listening for the page's load makes it possible
// to see the id's and such right away/early, otherwise the program will think it doesn't exist yet
window.addEventListener('load', () => {
    const hambutton = document.querySelector('.ham');
    const mainnav = document.querySelector('#navigation');

    hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

    // To solve the mid resizing issue with responsice class on
    // window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};
});