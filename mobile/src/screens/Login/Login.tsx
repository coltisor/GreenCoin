import React from 'react';
import { Button } from "../../components/Button/Button";
import { View } from "react-native";
import { LoginScreenProps } from '../RouteProps';
import { AuthenticatedRoutesWrapper } from "@elrondnetwork/dapp-core";


export const Login = (props: LoginScreenProps) => {
  const { navigation } = props;

  return (
    <View>
      <DappUI.WalletConnectLoginContainer
        callbackRoute= "home"
        shouldRenderDefaultCss={false}
      />  
      <Button onPress={() => { navigation.navigate('Home'); console.log('click'); }}>Login with Maiar</Button>
    </View>
  )
}

