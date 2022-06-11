import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import {Login} from "./src/screens/Login/Login";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from "./src/screens/Home/Home";
import {Map} from "./src/screens/Map/Map";
import {Rides} from "./src/screens/Rides/Rides";
import { DappProvider } from "@elrondnetwork/dapp-core";


const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <DappProvider
      environment="devnet"
      customNetworkConfig={{ name: 'asd', apiTimeout: 6000 }}
    >
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} options={{ headerLeft: null }} />
          <Stack.Screen name="Map" component={Map} />
          <Stack.Screen name="Rides" component={Rides} />
        </Stack.Navigator>
      </NavigationContainer>
    </DappProvider>
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
