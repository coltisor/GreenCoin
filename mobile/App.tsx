import React from "react";
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Login} from "./src/screens/Login/Login";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from "./src/screens/Home/Home";
import {Rides} from "./src/screens/Rides/Rides";
import { Ride } from "./src/screens/Ride/Ride";
import {Wallet} from "./src/screens/Login/Wallet";


const Stack = createNativeStackNavigator();

export default function App() {
  //options={{ title:"Welcome, @rider", headerLeft: null }}
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ title:"Home", headerLeft: null }} />
        <Stack.Screen name="Ride" component={Ride}  options={{ title:"Green Ride", headerShown: true }} />
        <Stack.Screen name="Rides" component={Rides}  options={{ title:"My rides", headerShown: true }} />
        <Stack.Screen name="Wallet" component={Wallet}  options={{ title:"Login with Maiar", headerShown: true }} />
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
