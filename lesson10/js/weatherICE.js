window.addEventListener("load", (event) => {
    const requestURL = 'https://api.openweathermap.org/data/2.5/forecast?zip=83440&appid=699c1da2022aa5124ee05e7d3550a1d1&units=imperial';

    fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (rexburg_data) {
        
        console.table(rexburg_data);

        //let presentDay = rexburg_data.list[0].main.temp;
        
        let temp1 = document.querySelector('#temp1');
        let temp2 = document.querySelector('#temp2');
        let temp3 = document.querySelector('#temp3');
        let temp4 = document.querySelector('#temp4');
        let temp5 = document.querySelector('#temp5');
        let temp6 = document.querySelector('#temp6');

        temp1.textContent = Math.round(rexburg_data.list[0].main.temp);
        temp2.textContent = Math.round(rexburg_data.list[1].main.temp);
        temp3.textContent = Math.round(rexburg_data.list[2].main.temp);
        temp4.textContent = Math.round(rexburg_data.list[3].main.temp);
        temp5.textContent = Math.round(rexburg_data.list[4].main.temp);
        temp6.textContent = Math.round(rexburg_data.list[5].main.temp);

        // We were trying to make the day appear dynamically
        // let day1 = document.querySelector('#day1');
        // let day2 = document.querySelector('#day2');
        // let day3 = document.querySelector('#day3');
        // let day4 = document.querySelector('#day4');
        // let day5 = document.querySelector('#day5');

        // day1.textContent = currentDay();
    })
})