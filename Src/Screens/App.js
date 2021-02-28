import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from '../Configs/Navigation'
import StudentTabNavigator from '../Configs/StudentTabNavigator'
import CompanyTabNavigator from '../Configs/CompanyTabNavigator'
import AdminTabNavigator from '../Configs/AdminTabNavigator'

const App = () => {

    return (
        <NavigationContainer>
            <AuthNavigator />
        </NavigationContainer>
    )
}

export default App
