// url from apiActivity 'https://api.openweathermap.org/data/2.5/weather?zip=83440,US&appid=699c1da2022aa5124ee05e7d3550a1d1';

const requestURL = '';

fetch(requestURL)
.then(function (response) {
    return response.json();
})
.then(function (five_day_forecast) {

})