import React from "react";
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Login} from "./src/screens/Login/Login";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from "./src/screens/Home/Home";
import {Map} from "./src/screens/Map/Map";
import {Rides} from "./src/screens/Rides/Rides";
import {Ride} from "./src/screens/Ride/Ride";


const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ title:"Welcome, @rider", headerLeft: null }} />
        <Stack.Screen name="Map" component={Map} />
        <Stack.Screen name="Ride" component={Ride} options={{ title:"Ride safe, ride green", headerLeft: null }}/>
        <Stack.Screen name="Rides" component={Rides} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
