import createDataContext from './createDataContext'

const LocationReducer = (state, action) => {
    switch (action.type) {
        case 'add_current_location':
            return { ...state, currentLocation: action.payload }
        case 'add_location':
            return { ...state, locations: [...state.locations, action.payload] }
        case 'start_rec':
            return { ...state, recording: true }
        case 'stop_rec':
            return { ...state, recording: false }
        case 'change_name':
            return { ...state, name: action.payload }
        case 'reset':
            return { ...state, name: '', locations: [] }
        default:
            return state
    }
}
// we are not doing location.push because we don't want to change default state

const changeName = (dispatch) => (name) => {
    dispatch({ type: 'change_name', payload: name })
}

const startRecording = (dispatch) => () => {
    dispatch({ type: 'start_rec' })
}

const stopRecording = (dispatch) => () => {
    dispatch({ type: 'stop_rec' })
}

const addLocation = (dispatch) => (location, recording) => {
    dispatch({ type: 'add_current_location', payload: location })
    if (recording)
        dispatch({ type: 'add_location', payload: location })
}

const resetLocation = (dispatch) => () => {
    dispatch({ type: 'reset' })
}

export const { Context, Provider } = createDataContext(
    LocationReducer,
    { startRecording, stopRecording, addLocation, changeName, resetLocation },
    { name: '', recording: false, locations: [], currentLocation: null }
)