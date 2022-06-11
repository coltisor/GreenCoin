import React from 'react'
import { View } from "react-native"
import WebView from "react-native-webview"
import { WalletScreenProps } from "../RouteProps"

export const Wallet = (props: WalletScreenProps) => {
  return (
    <WebView source={{ uri: 'https://dapp-template.elrond.com/' }} />
  )
}