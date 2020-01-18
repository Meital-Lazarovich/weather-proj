import WeatherService from '../services/WeatherService'

export const loadForecasts = (loc) => {
    return async (dispatch) => {
        console.log('weather actions got loc', loc);
        const forecasts = await WeatherService.getForecasts(loc)
        return dispatch(setForecasts(forecasts))
    }
}

const setForecasts = (forecasts) => {
    console.log('forecastssss', forecasts);
    return { type: 'SET_FORECASTS', forecasts }
}