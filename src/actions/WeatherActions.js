import WeatherService from '../services/WeatherService'

export const loadWeatherData = (loc) => {
    return async (dispatch) => {
        const weatherData = await WeatherService.getWeatherData(loc)
        return dispatch(setWeatherData(weatherData))
    }
}

const setWeatherData = (weatherData) => {
    return { type: 'SET_WEATHER_DATA', weatherData }
}