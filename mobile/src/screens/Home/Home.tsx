import React from 'react'
import { View } from "react-native";
import {HomeScreenProps} from "../RouteProps";
import {Button} from "../../components/Button/Button";


export const Home = (props: HomeScreenProps) => {
  const { navigation } = props;
  return (
    <View>
      <Button onPress={ () => {navigation.push('Rides'); console.log('click');} }>My past rides</Button>

      <Button onPress={ () => {navigation.push("Rides"); console.log('click');} }>New Ride</Button>
    </View>
  )
}
