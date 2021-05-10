import createDataContext from './createDataContext'
import trackerApi from '../api/tracker'
import AsyncStorage from '@react-native-community/async-storage'
import { navigate } from '../navigationRef'


const AuthReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return { ...state, errorMessage: action.payload }
        case 'clear_error':
            return { ...state, errorMessage: '' }
        case 'signup':
            return { errorMessage: '', token: action.payload } // no need to carry the state there because we dont have a need for it here
        case 'signin':
            return { errorMessage: '', token: action.payload }
        case 'signout':
            return { token: null, errorMessage: '' }
        default:
            return state
    }
}

const tryLocalSignin = dispatch => async () => {
    const token = await AsyncStorage.getItem('token')
    if (token) {
        dispatch({ type: 'signin', payload: token })
        navigate('mainFlow')
    } else {
        navigate('loginFlow')
    }
}

const clearError = (dispatch) => () => {
    dispatch({ type: 'clear_error' })
}

const signup = (dispatch) => async ({ email, password }) => { //implicit call
    // make api request to signup
    try {
        const response = await trackerApi.post('/signup', { email, password })
        await AsyncStorage.setItem('token', response.data.token)
        dispatch({ type: 'signup', payload: response.data.token })
        navigate('TrackList')

    } catch (err) {
        console.log(err.message)
        dispatch({ type: 'add_error', payload: 'Something went wrong SIGNUP ' })
    }
    // if we signup update the state
    // show the error in the signup
}

const signin = (dispatch) => async ({ email, password }) => {
    // try to sign in
    try {
        const response = await trackerApi.post('/signin', { email, password })
        await AsyncStorage.setItem('token', response.data.token)
        dispatch({ type: 'signin', payload: response.data.token })
        navigate('TrackList')
    } catch (err) {
        console.log(err)
        dispatch({ type: 'add_error', payload: 'Something went wrong with SIGNIN' })
    }
    //handle the success by updating the state
    // if fails show errors
}


const signout = (dispatch) => async () => {
    await AsyncStorage.removeItem('token')
    dispatch({ type: 'signout' })
    navigate('loginFlow')
}

export const { Provider, Context } = createDataContext(
    AuthReducer,
    { signin, signout, signup, clearError, tryLocalSignin },
    { isSignedIn: false, errorMessage: '' }
)
