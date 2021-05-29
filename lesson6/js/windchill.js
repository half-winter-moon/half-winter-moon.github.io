let highTemp = document.querySelector('#highTemp');
let windSpeed = document.querySelector('#windSpeed');

if (highTemp <= 50 && windSpeed > 3) {
    var windChill;
    windSpeed = 35.74 + (0.6215 * highTemp) - (35.75 * (windSpeed ** 0.16)) + (0.4275 * highTemp * (windSpeed ** 0.16))
}
else {
    console.log('N/A');
}

document.querySelector('#windChill').textContent = windChill;