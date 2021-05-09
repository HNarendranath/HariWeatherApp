window.addEventListener('load', () => {

    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let locationTimezone = document.querySelector('.location-timezone');
    let temperatureSection = document.querySelector('.degree-section');
    let unitSpan = document.querySelector('.unitSpan');
    let celsius = true;

    if (true) {

        const api = 'https://api.weatherapi.com/v1/current.json?key=9f3fbb7b982a417ab1d155347210905&q=London';

        fetch(api)
            .then(response => {
                return response.json();
            })
            .then(data => {

                const { temp_c, temp_f, condition } = data.current;
                //Set DOM Elements from the API
                temperatureDegree.textContent = temp_c;
                temperatureDescription.textContent = condition.text.toUpperCase();
                locationTimezone.textContent = data.location.tz_id;
                setIcons(condition.icon, condition.text.toUpperCase());

                //Switch between Celsius & Farenheit
                temperatureSection.addEventListener("click", () => {
                    if (celsius === true) {
                        temperatureDegree.textContent = temp_f;
                        unitSpan.textContent = "F";
                        celsius = false;
                    } else {
                        temperatureDegree.textContent = temp_c;
                        unitSpan.textContent = "C";
                        celsius = true;
                    }
                })

            });
    }

    function setIcons(icon, summary) {
        const iconImg = document.getElementById("iconImg");

        iconImg.src = "https:" + icon;
        iconImg.alt = summary;
    }


});