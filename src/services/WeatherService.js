import axios from 'axios';

const API_KEY = '5a25bbbf64d0e64524bcea1fab99dfa1';
const baseUrl = 'http://api.openweathermap.org/data/2.5/forecast'

export default {
    getForecasts
}

async function getForecasts(loc) {
    console.log('weather service got loc', loc);
    const res = await axios.get(`${baseUrl}?q=${loc}&units=metric&appid=${API_KEY}`);
    const forecasts = res.data.list.map((i, idx) => {
        const weather = {
            date: new Date(i.dt * 1000).toLocaleDateString('en-GB'),
            hour: new Date(i.dt * 1000).toLocaleTimeString('en-GB'),
            desc: i.weather[0].description
        }
        weather.icon = `http://openweathermap.org/img/wn/${i.weather[0].icon}@2x.png`
        if (idx === 0) {
            weather.tempNow = i.main.temp;
            weather.feelsLike = i.main.feels_like;
        }
        return weather;
    })
    return forecasts
}

