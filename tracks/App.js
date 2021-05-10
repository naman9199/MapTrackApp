import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import AccountScreen from './src/Screens/AccountScreen'
import SigninScreen from './src/Screens/SigninScreen'
import SignupScreen from './src/Screens/SignupScreen'
import TrackDetailScreen from './src/Screens/TrackDetailScreen'
import TrackListScreen from './src/Screens/TrackListScreen'
import TrackCreateScreen from './src/Screens/TrackCreateScreen'
import { Provider as AuthProvider } from './src/context/AuthContext'
import { setNavigator } from './src/navigationRef'
import ResolveAuthScreen from './src/Screens/ResolveAuthScreen'
import { Provider as LocationProvider } from './src/context/LocationContext'
import { Provider as TrackProvider } from './src/context/TrackContext'
import './src/deprecationIgnore'
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

// no matter how nested the screens are we can access them directly with key as navigation.navigate('TrackList')

const trackListFlow = createStackNavigator({
    TrackList: TrackListScreen,
    TrackDetail: TrackDetailScreen
})

trackListFlow.navigationOptions = {
    title: '',
    tabBarIcon: <Ionicons name="ios-list-circle" size={30} color="black" style={{ marginTop: 10 }} />
    // <Foundation name="list-thumbnails" size={30} color="black"  />
}

const switchNavigator = createSwitchNavigator({
    ResolveAuth: ResolveAuthScreen,
    loginFlow: createStackNavigator({
        Signup: SignupScreen,
        Signin: SigninScreen
    }),
    mainFlow: createBottomTabNavigator({
        trackListFlow,
        TrackCreate: TrackCreateScreen,
        Account: AccountScreen
    })
})

const App = createAppContainer(switchNavigator)

export default () => {
    // order of the provider doesn't matter
    return (
        <TrackProvider>
            <LocationProvider>
                <AuthProvider>
                    <App ref={(navigator) => setNavigator(navigator)} />
                </AuthProvider>
            </LocationProvider>
        </TrackProvider>
    )
}
