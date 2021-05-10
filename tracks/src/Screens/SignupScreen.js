import React, { useState, useContext, useEffect } from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { Text, Input, Button } from 'react-native-elements'
import NavLink from '../components/NavLink'
import { Context as AuthContext } from '../context/AuthContext'
import AuthForm from '../components/AuthFormHelper'
import { NavigationEvents } from 'react-navigation'

const SignupScreen = ({ navigation }) => {
    const { state, signup, tryLocalSignin } = useContext(AuthContext)
    useEffect(() => {
        tryLocalSignin()
    }, [])
    return <View style={styles.container}>

        {/* <NavigationEvents
            onDidFocus={clearError}
        /> */}

        <AuthForm
            headerText="Sign Up"
            onSubmit={signup}
            errorMessage={state.errorMessage}
        />

        <NavLink
            text="Already have an Account ? Sign In instead"
            routeName="Signin"
        />
    </View>
}

SignupScreen.navigationOptions = () => {
    return {
        headerShown: false
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    error: {
        color: 'red',
        marginLeft: 20
    }
})

export default SignupScreen