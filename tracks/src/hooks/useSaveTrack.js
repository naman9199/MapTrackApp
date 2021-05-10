import React, { useContext } from 'react'
import { Context as TrackContext } from '../context/TrackContext'
import { Context as LocationContext } from '../context/LocationContext'
import { navigate } from '../navigationRef'

export default () => {
    const { state: { name, locations }, resetLocation } = useContext(LocationContext)
    const { createTrack } = useContext(TrackContext)

    const saveTrack = async () => {
        // call api to save
        await createTrack(name, locations)
        resetLocation()
        navigate('TrackList')
    }

    return [saveTrack]
}