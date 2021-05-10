import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'

const instance = axios.create({
    baseURL: 'https://blue-fireant-16.loca.lt'
})

// interceptors use is calling the function anytime we are about to make a request and 2nd function is the error handling function
instance.interceptors.request.use(
    async (config) => {
        const token = await AsyncStorage.getItem('token')
        // console.log(token)
        if (token) {
            config.headers.Authorization = `Bearer ${ token }`
        }
        return config
    },
    (err) => {
        return Promise.reject(err)
    }
)

export default instance