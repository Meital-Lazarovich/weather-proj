const INITIAL_STATE = {
    weatherData: null
}

export default function weatherReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_WEATHER_DATA':
            return {
                ...state,
                weatherData: action.weatherData
            }
        default:
            return state
    }
}