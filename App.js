// react, react-native
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// pages
import Home from './src/pages/Home/Home'
import Favorites from './src/pages/Favorites/Favorites'
import Sandbox from './src/pages/Sandbox/Sandbox'
import Details from './src/pages/Details/Details'

// components
import BtnTopLeft from './src/components/Btn/BtnTopLeft'

// styles
import { colors } from './src/assets/css/styles'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name='Home'
          component={Home}
          options={() => ({ headerShown: false })}
        />
        <Stack.Screen
          name='Favorites'
          component={Favorites}
          options={({ navigation }) => ({
            title: 'Favoritos',
            headerStyle: {
              backgroundColor: `${colors.blue.color}`,
            },
            headerTintColor: `${colors.yellow.color}`,
            headerLeft: () => (
              <BtnTopLeft color={colors.yellow.color} exit={false} onPress={() => navigation.navigate('Home')} />
            ),
          })}
        />
        <Stack.Screen
          name='Details'
          component={Details}
          options={({ navigation }) => ({
            title: 'Detalhes',
            headerStyle: {
              backgroundColor: '#22368E',
            },
            headerTintColor: '#FFEC14',
            headerLeft: () => (
              <BtnTopLeft color='#FFEC14' exit={false} onPress={() => navigation.navigate('Home')} />
            ),
          })}
        />

        <Stack.Screen
          name='Sandbox'
          component={Sandbox}
          options={({ navigation }) => ({
            headerStyle: {
              backgroundColor: `${colors.blue.color}`,
            },
            headerTintColor: `${colors.yellow.color}`,
            headerLeft: () => (
              <BtnTopLeft color={colors.yellow.color} exit={false} onPress={null} />
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
