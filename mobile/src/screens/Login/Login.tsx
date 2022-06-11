import React from 'react';
import { Button } from "../../components/Button/Button";
import { View } from "react-native";
import { LoginScreenProps } from '../RouteProps';




export const Login = (props: LoginScreenProps) => {
  const { navigation } = props;


  return (
    <View>
      <Button onPress={() => navigation.navigate('Home')}>Connect</Button>
    </View>
  )
}

