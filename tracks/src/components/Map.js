import React, { useContext } from 'react';
import { Text, StyleSheet, ActivityIndicator } from 'react-native';
import MapView, { Polyline, Circle } from 'react-native-maps';
import { Context as LocationContext } from '../context/LocationContext'

const Map = () => {

    const { state: { currentLocation, locations } } = useContext(LocationContext)
    // console.log(locations)
    if (!currentLocation) {
        return <ActivityIndicator size='large' style={{ margin: 200 }} color="#255" />
    }

    return (
        <MapView
            style={styles.map}
            initialRegion={{
                ...currentLocation.coords,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01
            }}
        // remove this if dont want to change map position of user everytime
        // region={{
        //     ...currentLocation.coords,
        //     latitudeDelta: 0.01,
        //     longitudeDelta: 0.01
        // }}
        >
            <Polyline coordinates={locations.map(loc => loc.coords)} />
            <Circle
                center={currentLocation.coords}
                radius={25}
                fillColor="rgba(0,150,125, 0.2)"
                strokeColor="rgba(0,150,125,1)"
            />
        </MapView>
    );
};

const styles = StyleSheet.create({
    map: {
        height: 500
    }
});

export default Map;

// we used to test the location
// let points = [];
    // for (let i = 0; i < 20; i++) {
    //     if (i % 2 === 0) {
    //         points.push({
    //             latitude: 23.247818 + i * 0.001,
    //             longitude: 77.432970 + i * 0.001
    //         });
    //     } else {
    //         points.push({
    //             latitude: 23.247818 - i * 0.002,
    //             longitude: 77.432970 + i * 0.001
    //         });
    //     }
    // }