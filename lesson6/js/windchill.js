var highTemp = parseInt(document.querySelector('#highTemp'));
var windSpeed = parseInt(document.querySelector('#windSpeed'));
var windChill = document.querySelector('#windChill');
var windChillCalc = 0;

 if (highTemp <= 50 && windSpeed > 3) {
    windChillCalc = 35.74 + (0.6215 * highTemp) - (35.75 * (windSpeed ** 0.16)) + (0.4275 * highTemp * (windSpeed ** 0.16));
    console.log(windChillCalc);
    windChill.innerHTML = windChillCalc;
 } else {
     windChill.innerHTML = 'N/A';
 }