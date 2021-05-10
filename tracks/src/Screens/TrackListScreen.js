import React, { useContext } from 'react'
import { StyleSheet, Text, TouchableOpacity, FlatList } from 'react-native'
import { ListItem } from 'react-native-elements'
import { Button } from 'react-native-elements'
import Spacer from '../components/spacer'
import { NavigationEvents } from 'react-navigation'
import { Context as TrackContext } from '../context/TrackContext'

const TrackListScreen = ({ navigation }) => {

    const { state, fetchTracks } = useContext(TrackContext)
    // console.log(state)
    return <>
        <NavigationEvents onWillFocus={fetchTracks} />
        <FlatList
            data={state}
            keyExtractor={item => item._id}
            renderItem={({ item }) => {
                return <TouchableOpacity onPress={() => {
                    navigation.navigate('TrackDetail', { _id: item._id })
                }}>
                    <ListItem>
                        <ListItem.Content>
                            <ListItem.Title>{item.name}</ListItem.Title>
                        </ListItem.Content>
                        <ListItem.Chevron />
                    </ListItem>
                </TouchableOpacity>
            }}
        />
    </>
}

// the icon inserting process in the createscreen is different as it is stackNavigation itself and hence a long process in App.js: 
TrackListScreen.navigationOptions = {
    title: 'tracks'
}

const styles = StyleSheet.create({})

export default TrackListScreen