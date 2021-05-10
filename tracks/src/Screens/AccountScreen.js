import React, { useContext } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Button } from 'react-native-elements'
import Spacer from '../components/spacer'
import { SafeAreaView } from 'react-navigation'
import { Context as AuthContext } from '../context/AuthContext'
import { MaterialCommunityIcons } from '@expo/vector-icons';

const AccountScreen = ({ navigation }) => {
    const { signout } = useContext(AuthContext)

    return <SafeAreaView forceInset={{ top: 'always' }}>
        <Text style={{ fontSize: 48 }} >AccountScreen</Text>
        <Spacer>
            <Button title="Log out" onPress={() => {
                signout()
            }} />
        </Spacer>
    </SafeAreaView>
}

AccountScreen.navigationOptions = {
    title: '',
    tabBarIcon: <MaterialCommunityIcons name="account" size={30} color="black" style={{ marginTop: 10 }} />
}

const styles = StyleSheet.create({})

export default AccountScreen