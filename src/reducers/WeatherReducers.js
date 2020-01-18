const INITIAL_STATE = {
    // loc: null,
    forecasts: null
}

export default function weatherReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_FORECASTS':
            return {
                ...state,
                forecasts: action.forecasts
            }
        default:
            return state
    }
}