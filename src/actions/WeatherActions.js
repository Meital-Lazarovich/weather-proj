import WeatherService from '../services/WeatherService'

export const loadForecasts = (loc) => {
    return async (dispatch) => {
        const forecasts = await WeatherService.getForecasts(loc)
        return dispatch(setForecasts(forecasts))
    }
}

const setForecasts = (forecasts) => {
    return { type: 'SET_FORECASTS', forecasts }
}