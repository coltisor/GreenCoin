import React from 'react';
import { Button } from "../../components/Button/Button";
import { View } from "react-native";
import { LoginScreenProps } from '../RouteProps';
import { WalletConnectProvider } from '@elrondnetwork/erdjs-wallet-connect-provider/out';
import { useWalletConnect } from '@walletconnect/react-native-dapp';


const bridgeUrl = "https://bridge.walletconnect.org";


export const Login = (props: LoginScreenProps) => {
  const { navigation } = props;
  const connector = useWalletConnect();


  return (
    <View>
      <Button onPress={() => connector.connect()}>Connect</Button>
    </View>
  )
}

