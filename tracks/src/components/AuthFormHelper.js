import React, { useState } from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import Spacer from '../components/spacer'
import { Text, Input, Button } from 'react-native-elements'

const AuthForm = ({ errorMessage, headerText, onSubmit }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [checkPass, setCheckPass] = useState('')
    let isDisabled = false
    return (
        <>
            <Spacer>
                <Text h3 style={{ marginLeft: 25, marginBottom: 20 }}>{headerText} Screen for Tracker</Text>
            </Spacer>
            <Input label="Email" value={email} onChangeText={setEmail} autoCorrect={false} />
            <Spacer />
            <Input label="Password" value={password} onChangeText={setPassword} secureTextEntry autoCorrect={false} />
            <Spacer />
            {/* {
                headerText === "Sign Up"
                    ? <Input label="Password Again" value={checkPass} secureTextEntry onChangeText={setCheckPass} />
                    : null
            }
            {
                checkPass !== password
                    ? isDisabled = true
                    : null
            }
            {
                isDisabled
                    ? <Text style={{ marginLeft: 20, color: 'red' }}>Password Not Matched!!</Text>
                    : null
            } */}
            {errorMessage ? (
                <Text style={styles.error}>{errorMessage}</Text>
            ) : null}
            <Spacer>
                <Button disabled={isDisabled} title={headerText} onPress={() => {
                    onSubmit({ email, password })
                }} />
            </Spacer>

        </>

    )
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


export default AuthForm