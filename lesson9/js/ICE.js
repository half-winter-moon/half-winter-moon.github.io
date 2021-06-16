const requestURL = 'https://www.ahfx.com/person.php';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject); //temporary checking for valid respons and data parsing
        const person = jsonObject['person'];
        let personalInfo = person['personal'];
        //Fake person's info:
        let name = document.querySelector('#name');
        name.textContent = personalInfo.name + ' ' + personalInfo.last_name;

        let password = document.querySelector('#password');
        let onlineInfo = person['online_info'];
        password.textContent = onlineInfo.password;

        let email = document.querySelector('#emailAddress');
        email.textContent = onlineInfo.email;

        let eyeColor = document.querySelector('#eyeColor');
        eyeColor.textContent = personalInfo.eye_color;

        let location = document.querySelector('#location');
        location.textContent = personalInfo.city + ', ' + personalInfo.country;

        let numChild = document.querySelector('#children');
        let marriageInfo = person['marriage'];
        if(marriageInfo.married == true) {
            numChild.textContent = marriageInfo.children;
        }
        else {
            numChild.textContent = 'None';
        }

        let ip = document.querySelector('#ip');
        ip.textContent = onlineInfo.ip_address;
        
    })
