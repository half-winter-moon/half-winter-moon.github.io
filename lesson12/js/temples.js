window.addEventListener('load', () => {
    const hambutton = document.querySelector('.ham');
    const mainnav = document.querySelector('#navigation');
    hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

    // Retrieve and display the current year
    let d = new Date();
    let year = d.getFullYear()
    document.getElementById("currentYear").textContent = year;


    const requestURL = "js/temples_json.json";
    fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        //console.table(jsonObject); //temporary checking for valid respons and data parsing
        const temples = jsonObject['temples'];
        
        for (let i = 0; i < temples.length; i++) {

            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            h2.textContent = temples[i].name;
            card.appendChild(h2);

            let image = document.createElement('img');
            image.setAttribute('src', temples[i].imageurl);
            image.setAttribute('alt', h2 + i);
            card.appendChild(image);

            let dDate = document.createElement('p');
            dDate.textContent = 'Date of Dedication: ' + temples[i].dedicationdate;
            card.appendChild(dDate);

            // let serviceIntro = document.createElement('p');
            // serviceIntro.textContent = 'Services: ';
            // card.appendChild(serviceIntro);
            let services = document.createElement('p');
            for (let y = 0; y < temples[i].services.length; y++) {
                services.textContent = temples[i].services + ' ';
                card.appendChild(services);
                
            }

            let phone = document.createElement('p');
            phone.textContent = temples[i].phone;
            card.appendChild(phone);

            let address = document.createElement('p');
            address.textContent = temples[i].address1 + ' ' + temples[i].city + ', ' + temples[i].state + ' ' + temples[i].zip;
            card.appendChild(address);

            document.querySelector('div.temples').appendChild(card);
        }
    })
})