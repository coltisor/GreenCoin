import React from 'react';
import { LoginScreenProps } from '../RouteProps';
import { Button  } from "react-native-paper";
import { StyleSheet, Text, View } from 'react-native';
import { Headline } from 'react-native-paper';
import { Subheading } from 'react-native-paper';
import { globalStyles } from "../../styles/global";


export const Login = (props: LoginScreenProps) => {
  const { navigation } = props;

  return (
    <View style={globalStyles.container}>
      <View style={styles.logoContainer}>
        <Headline style={styles.name}>GreenCoin</Headline>

        <Subheading style={styles.motto}>Ride Safe, Ride Green</Subheading>
      </View>

      <View style={styles.loginContainer}>
        <Subheading style={styles.loginWith}>Log in with</Subheading>

        <Button
          mode="contained"
          color="#5FD068"
          onPress={() => navigation.navigate('Home')}
          compact={true}
          style={globalStyles.primaryButton}>
          Maiar App
        </Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  logoContainer: {
    alignItems: 'center',

    gap: 8,
  },
  loginContainer: {
    alignItems: 'center',
    flexDirection: "row",

    gap: 16,
  },

  name: {

  },
  motto: {

  },
  loginWith: {

  },
});


