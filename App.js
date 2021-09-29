import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, Touchable, View } from "react-native";
import Sandbox from "./src/pages/Sandbox/Sandbox";
import Home from "./src/pages/Home/Home";
import styles from "./src/assets/css/styles";
import BtnTopLeft from "./src/components/Btn/BtnTopLeft";
import Icon from 'react-native-vector-icons/FontAwesome'
import { TouchableOpacity } from "react-native-gesture-handler";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* <Stack.Screen
          name="Home"
          component={Home}
          options={({ navigation }) => ({
            headerShown: false,
            headerStyle: {
              backgroundColor: "#22368E",
            },
            headerTintColor: "#FFEC14",
            headerRight: () => (
              <TouchableOpacity onPress={null}>
                <Icon name='star' size={35} color= "#FFEC14"/>
              </TouchableOpacity>
            ),
          })}
        /> */}
        <Stack.Screen
          name="Home"
          component={Home}
          options={({ navigation }) => ({
            headerShown: false          
          })}
        />
        <Stack.Screen
          name="Sandbox"
          component={Sandbox}
          options={({ navigation }) => ({
            headerStyle: {
              backgroundColor: "#22368E",
            },
            headerTintColor: "#FFEC14",
            headerLeft: () => (
              <BtnTopLeft color="#FFEC14" exit={false} onPress={null} />
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
