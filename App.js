import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StyleSheet, Text, View } from 'react-native'
import Sandbox from './src/pages/Sandbox/Sandbox'
import styles from './src/assets/css/styles'
import BtnTopLeft from './src/components/Btn/BtnTopLeft'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Sandbox'>
        <Stack.Screen
          name='Sandbox'
          component={Sandbox}
          options={({ navigation }) => ({
            headerStyle: {
              backgroundColor: '#22368E'
            },
            headerTintColor: '#FFEC14',
            headerLeft: () => (
              <BtnTopLeft color='#FFEC14' exit={false} onPress={null} />
            )
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

