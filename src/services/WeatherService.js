import axios from 'axios';

const API_KEY = '5a25bbbf64d0e64524bcea1fab99dfa1';
const baseUrl = 'http://api.openweathermap.org/data/2.5/forecast'

export default {
    getForecasts
}

async function getForecasts(loc) {
    const res = await axios.get(`${baseUrl}?q=${loc}&units=metric&appid=${API_KEY}`);
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const forecasts = [];
    res.data.list.forEach(i => {
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
    console.log('forecasts', forecasts);
    return forecasts;
}

