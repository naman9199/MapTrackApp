// import '../_mockLocation'
import React, { useContext, useEffect, useState, useCallback } from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-elements'
import { SafeAreaView, withNavigation, withNavigationFocus } from 'react-navigation' // not collide with notif-bar
import Map from '../components/Map'
import { Context as LocationContext } from '../context/LocationContext'
import useLocation from '../hooks/useLocation'
import TrackForm from '../components/TrackForm'
import { Ionicons } from '@expo/vector-icons';

const TrackCreateScreen = ({ isFocused }) => {

    const { state: { recording }, addLocation } = useContext(LocationContext)
    const callback = useCallback((location) => {
        addLocation(location, recording)
    }, [recording])
    // useCallback is used like useEffect but returns a value and now when the state.recording value changes then only the callback value changes and then the useEffect in the useLocation updates hence meaning that the screen will re-render if and only if the state.recording changes

    const [err] = useLocation(isFocused || recording, callback)
    // it will continue to record if any cases of screen is focused or the recording is start then it will also run in background but if both is false like screen is outOfFocused and the recording is stopped then it will stop the process

    return <SafeAreaView forceInset={{ top: 'always' }} >
        <Text h2>TrackCreateScreen</Text>
        <Map />
        <TrackForm />
        {err ? <Text>Please allow location permission</Text> : null}
    </SafeAreaView>
}

TrackCreateScreen.navigationOptions = {
    title: '',
    tabBarIcon: <Ionicons name="add-circle-sharp" size={30} color="black" style={{ marginTop: 10 }} />
}

const styles = StyleSheet.create({})

export default withNavigationFocus(TrackCreateScreen)