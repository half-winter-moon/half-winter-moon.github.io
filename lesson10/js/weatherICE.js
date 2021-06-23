window.addEventListener("load", (event) => {
    const requestURL = 'https://api.openweathermap.org/data/2.5/weather?zip=83440,US&units=imperial&appid=699c1da2022aa5124ee05e7d3550a1d1';

    fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (rexburg_data) {
        console.table(rexburg_data);

        ul = document.getElementById('weatherInfo');

        let name = document.createElement('li');
        let temp = document.createElement('li');
        let feels_like = document.createElement('li');
        let high = document.createElement('li');
        let low = document.createElement('li');

        let main = rexburg_data['main'];

        name.innerHTML = 'City: ' + rexburg_data.name;
        temp.innerHTML = 'Temperature: ' + main.temp;
        feels_like.innerHTML = 'Feels like: ' + main.feels_like;
        high.innerHTML = 'High: ' + main.temp_max;
        low.innerHTML = 'Low: ' + main.temp_min;

        ul.appendChild(name);
        ul.appendChild(temp);
        ul.appendChild(feels_like);
        ul.appendChild(high);
        ul.appendChild(low);
    })




})