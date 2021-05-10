import React, { useContext, useEffect } from 'react'
// import { Text, View } from 'react-native'
import { Context as AuthContext } from '../context/AuthContext'

const ResolveAuthScreen = () => {
    const { tryLocalSignin } = useContext(AuthContext)
    useEffect(() => {
        tryLocalSignin()
    }, [])

    return null
}

export default ResolveAuthScreen