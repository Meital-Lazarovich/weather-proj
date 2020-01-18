import axios from 'axios';

const API_KEY = '5a25bbbf64d0e64524bcea1fab99dfa1';
const baseUrl = 'http://api.openweathermap.org/data/2.5/forecast'

export default {
    getWeatherData
}

async function getWeatherData(loc) {
    try {
        const locForApi = (loc.city) ? `q=${loc.city}` : `lat=${loc.lat}&lon=${loc.lon}`
        const res = await axios.get(`${baseUrl}?${locForApi}&units=metric&appid=${API_KEY}`)
        const { data } = res
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const weatherData = {
            city: `${data.city.name}, ${data.city.country}`,
            forecasts: []
        };
        data.list.forEach(i => {
            const { forecasts } = weatherData
            const time = new Date(i.dt * 1000);
            const date = time.toLocaleDateString('en-GB');
            var dateIdx = forecasts.findIndex(f => f.date === date)
            if (dateIdx === -1) {
                forecasts.push(
                    {
                        date,
                        day: days[time.getDay()],
                        weathers: []
                    }
                )
                dateIdx = forecasts.length - 1;
            }
            forecasts[dateIdx].weathers.push(
                {
                    hour: time.toLocaleTimeString('en-GB').substring(0, 5),
                    temp: Math.round(i.main.temp),
                    desc: i.weather[0].description,
                    icon: `http://openweathermap.org/img/wn/${i.weather[0].icon}@2x.png`
                }
            )
        })
        return weatherData;
    } catch(err) {
        console.log('Error while getting weather data from api: ', err);
    }
}

