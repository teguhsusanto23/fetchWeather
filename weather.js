let axios = require('axios');

const API_KEY = '273a81691e7e82477ad207af21608d9e';

const getWeatherInfo = function () {

    try {

        const params = new Array("jakarta", "12345", "ID");
        
        const url = 'https://api.openweathermap.org/data/2.5/weather?q='+params[0]+'&zip='+params[1]+','+params[2]+'&appid='+API_KEY;
        
        axios(url)

            .then( (response) => {

                var cityData = response.data;

                var weather = {
                    city: cityData.name,
                    temperature: Math.round(cityData.main.temp),
                    description: cityData.weather[0].description,
                    icon: cityData.weather[0].icon
                }

                console.log('result', weather);
            })
            .catch( (error) => {
                console.log(error);
            })

    } catch(err) {
        console.log(err);
    }
};

getWeatherInfo();

