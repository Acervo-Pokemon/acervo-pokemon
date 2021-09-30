import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native";
import Details from './src/pages/Details/Details'
import Sandbox from "./src/pages/Sandbox/Sandbox";
import Home from "./src/pages/Home/Home";
import styles from "./src/assets/css/styles";
import BtnTopLeft from "./src/components/Btn/BtnTopLeft";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={({ navigation }) => ({
            headerStyle: {
              backgroundColor: "#22368E",
            },
            headerTintColor: "#FFEC14",
            headerRight: () => (
              <Text style={{ fontSize: 20, color: "#FFEC14" }}>Favoritos</Text>
            ),
          })}
        />
        <Stack.Screen
          name="Detalhes"
          component={Details}
          options={({ navigation }) => ({
            headerStyle: {
              backgroundColor: "#22368E",
            },
            headerTintColor: "#FFEC14",
            headerLeft: () => (
              <BtnTopLeft color="#FFEC14" exit={false} onPress={() => navigation.navigate('Home')} />
            ),
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
