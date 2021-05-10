import React, { useContext } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation'
import { Context as AuthContext } from '../context/AuthContext'

const NavLink = ({ navigation, text, routeName }) => {
    const { clearError } = useContext(AuthContext)
    return (
        <View>
            <TouchableOpacity onPress={() => {
                clearError()
                navigation.navigate(routeName)
            }
            }>
                <Text style={{ marginLeft: 20, color: 'rgb(0,150,250)' }}>
                    {text}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

// const styles = StyleSheet({})

export default withNavigation(NavLink)