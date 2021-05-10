import React, { useContext } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import AuthForm from '../components/AuthFormHelper'
import { Context as AuthContext } from '../context/AuthContext'
import NavLink from '../components/NavLink'
import { NavigationEvents } from 'react-navigation'

const SigninScreen = ({ navigation }) => {
    const { state, signin } = useContext(AuthContext)
    return (
        <View style={styles.container}>

            {/* <NavigationEvents
                onWillFocus={clearError}
            /> */}

            <AuthForm
                headerText="Sign In"
                errorMessage={state.errorMessage}
                onSubmit={signin}
            />

            <NavLink
                text="Don't have an Account ? Sign Up instead"
                routeName="Signup"
            />
        </View>
    )
}

SigninScreen.navigationOptions = () => {
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

export default SigninScreen