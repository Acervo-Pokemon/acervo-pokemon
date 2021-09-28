import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StyleSheet, Text, View } from 'react-native'
import Sandbox from './src/pages/Sandbox/Sandbox'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Sandbox'>
        <Stack.Screen
          name='Sandbox'
          component={Sandbox}
          options={({ navigation }) => ({
            title: 'To play',
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

