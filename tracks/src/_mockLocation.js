// this file is used in testing the app so now with this mechanism we can travel in the different coordinates without actually moving

import * as Location from 'expo-location'

const tenMeterWithDegrees = 0.0001
const getLocation = (increment) => {
    return {
        timestamp: 10000000,
        coords: {
            speed: 0,
            heading: 0,
            accuracy: 5,
            altitudeAccuracy: 5,
            altitude: 5,
            longitude: 77.4327929 + increment * tenMeterWithDegrees,
            latitude: 23.2477766 + increment * tenMeterWithDegrees
        }
    }
}

let counter = 0
setInterval(() => {
    Location.EventEmitter.emit('Expo.locationChanged', {
        watchId: Location._getCurrentWatchId(),
        location: getLocation(counter)
    })
    counter++
}, 1000)