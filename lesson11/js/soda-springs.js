// putting this code within the evenlistener, listening for the page's load makes it possible
// to see the id's and such right away/early, otherwise the program will think it doesn't exist yet
window.addEventListener('load', () => {
    const hambutton = document.querySelector('.ham');
    const mainnav = document.querySelector('#navigation');

    hambutton.addEventListener('click', () => {
        mainnav.classList.toggle('responsive')
    }, false);

    // Display the current date
    let currentDate = new Date();
    document.getElementById("currentDate").textContent = currentDate;

    // Retrieve and display the current year
    let d = new Date();
    let year = d.getFullYear()
    document.getElementById("currentYear").textContent = year;


    //grab next five days forcast from API and display
    const requestURL = 'https://api.openweathermap.org/data/2.5/forecast?zip=83276&appid=699c1da2022aa5124ee05e7d3550a1d1&units=imperial';

    fetch(requestURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (preston_data) {

            console.table(preston_data);
            let temp1 = document.querySelector('#temp1');
            let temp2 = document.querySelector('#temp2');
            let temp3 = document.querySelector('#temp3');
            let temp4 = document.querySelector('#temp4');
            let temp5 = document.querySelector('#temp5');

            temp1.textContent = Math.round(preston_data.list[0].main.temp);
            temp2.textContent = Math.round(preston_data.list[1].main.temp);
            temp3.textContent = Math.round(preston_data.list[2].main.temp);
            temp4.textContent = Math.round(preston_data.list[3].main.temp);
            temp5.textContent = Math.round(preston_data.list[4].main.temp);

            // Grab appropriate weather icons from API for 5 day forecast
            let icon1 = document.querySelector('#icon1');
            let imgInfo1 = preston_data.list[0].weather[0].icon;
            icon1.setAttribute('src', 'http://openweathermap.org/img/wn/' + imgInfo1 + '@2x.png');

            let icon2 = document.querySelector('#icon2');
            let imgInfo2 = preston_data.list[1].weather[0].icon;
            icon2.setAttribute('src', 'http://openweathermap.org/img/wn/' + imgInfo2 + '@2x.png');

            let icon3 = document.querySelector('#icon3');
            let imgInfo3 = preston_data.list[2].weather[0].icon;
            icon3.setAttribute('src', 'http://openweathermap.org/img/wn/' + imgInfo3 + '@2x.png');

            let icon4 = document.querySelector('#icon4');
            let imgInfo4 = preston_data.list[3].weather[0].icon;
            icon4.setAttribute('src', 'http://openweathermap.org/img/wn/' + imgInfo4 + '@2x.png');

            let icon5 = document.querySelector('#icon5');
            let imgInfo5 = preston_data.list[4].weather[0].icon;
            icon5.setAttribute('src', 'http://openweathermap.org/img/wn/' + imgInfo5 + '@2x.png');
        })

    // grab current day weather info from API and display
    const requestURL2 = 'https://api.openweathermap.org/data/2.5/weather?zip=83276,US&units=imperial&appid=699c1da2022aa5124ee05e7d3550a1d1';

    fetch(requestURL2)
        .then(function (response) {
            return response.json();
        })
        .then(function (present_data) {
            console.table(present_data);

            let currently = document.querySelector('#currently');
            currently.textContent = present_data.weather[0].main;

            let windSpeed = document.querySelector('#windSpeed');
            windSpeed.textContent = Math.round(present_data.wind.speed);

            let highTemp = document.querySelector('#highTemp');
            highTemp.textContent = Math.round(present_data.main.temp_max);

            let humidity = document.querySelector('#humidity');
            humidity.textContent = present_data.main.humidity;


            // calculate and display windchill
            var highTemp2 = parseInt(document.querySelector('#highTemp').textContent);
            var windSpeed2 = parseInt(document.querySelector('#windSpeed').textContent);
            var windChill2 = document.querySelector('#windChill');
            var windChillCalc = 0;
            if (highTemp <= 50 && windSpeed2 > 3) {
                windChillCalc = 35.74 + (0.6215 * highTemp2) - (35.75 * (windSpeed2 ** 0.16)) + (0.4275 * highTemp2 * (windSpeed2 ** 0.16));
                windChillCalc = Number((windChillCalc).toFixed(1));
                console.log(windChillCalc);
                windChill.innerHTML = windChillCalc;
            } else {
                windChill.innerHTML = 'N/A';
            }
        })
    //Soda Springs activities:
    const requestURL3 = 'https://byui-cit230.github.io/weather/data/towndata.json';
    fetch(requestURL3)
        .then(function (response) {
            return response.json();
        })
        .then(function (jsonObject) {
            //console.table(jsonObject); //temporary checking for valid respons and data parsing
            const towns = jsonObject['towns'];
           
            for (town in towns){
                if (towns[town].name == "Soda Springs"){
                    var index = town; 
                }
            }
            let ssevents = document.querySelector("#soda-springs-events");
            console.log(towns[index]);
            for (town of towns[index].events){
                let p = document.createElement('p');
                p.textContent = town;
                console.log(towns.events);
                ssevents.appendChild(p);
            }
        })


});