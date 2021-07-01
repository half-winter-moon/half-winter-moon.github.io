// putting this code within the evenlistener, listening for the page's load makes it possible
// to see the id's and such right away/early, otherwise the program will think it doesn't exist yet
window.addEventListener('load', () => {
    const hambutton = document.querySelector('.ham');
    const mainnav = document.querySelector('#navigation');

    hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);
    
    const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

    fetch(requestURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (jsonObject) {
            //console.table(jsonObject); //temporary checking for valid respons and data parsing
            const towns = jsonObject['towns'];
            
            //for (let i = 0; i < towns.length; i++) {
    
            //Preston info:
            let tagLine = document.querySelector('.tagline');
            tagLine.textContent = towns[6].motto;

            let info = document.createElement('section');
            let p1 = document.createElement('p');
            p1.textContent = 'Year Founded: ' + towns[6].yearFounded;
            info.appendChild(p1);

            let p2 = document.createElement('p');
            p2.textContent = 'Population: ' + towns[6].currentPopulation;
            info.appendChild(p2);

            let p3 = document.createElement('p');
            p3.textContent = 'Annual Rain Fall: ' + towns[6].averageRainfall;
            info.appendChild(p3);

            document.querySelector('div.preston').appendChild(info);

            //Soda Springs info:
            let tagLine2 = document.querySelector('.tagline');
            tagLine2.textContent = towns[0].motto;

            let info2 = document.createElement('section');
            let sp1 = document.createElement('p');
            sp1.textContent = 'Year Founded: ' + towns[0].yearFounded;
            info2.appendChild(sp1);

            let sp2 = document.createElement('p');
            sp2.textContent = 'Population: ' + towns[0].currentPopulation;
            info2.appendChild(sp2);

            let sp3 = document.createElement('p');
            sp3.textContent = 'Annual Rain Fall: ' + towns[0].averageRainfall;
            info2.appendChild(sp3);

            document.querySelector('div.soda-springs').appendChild(info2);

            //Fish Haven info:
            let tagLine3 = document.querySelector('.tagline');
            tagLine3.textContent = towns[2].motto;

            let info3 = document.createElement('section');
            let fp1 = document.createElement('p');
            fp1.textContent = 'Year Founded: ' + towns[2].yearFounded;
            info3.appendChild(fp1);

            let fp2 = document.createElement('p');
            fp2.textContent = 'Population: ' + towns[2].currentPopulation;
            info3.appendChild(fp2);

            let fp3 = document.createElement('p');
            fp3.textContent = 'Annual Rain Fall: ' + towns[2].averageRainfall;
            info3.appendChild(fp3);

            document.querySelector('div.fish-haven').appendChild(info3);
        })
 

});