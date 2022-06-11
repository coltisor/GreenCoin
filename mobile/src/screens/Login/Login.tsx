import React from 'react';
import { LoginScreenProps } from '../RouteProps';
import { Button  } from "react-native-paper";
import { StyleSheet, Text, View, Image } from 'react-native';
import { Headline } from 'react-native-paper';
import { Subheading } from 'react-native-paper';
import { globalStyles } from "../../styles/global";
import { colors } from "../../styles/colors";

export const Login = (props: LoginScreenProps) => {
  const { navigation } = props;

  return (
    <View style={globalStyles.container}>

      <View style={styles.logoContainer}>
        <View style={styles.logo}> 
          <Image style={{width: 200, height: 225}} source={require('./Logo.png')} />
        </View>
{/* 
        <Text style={styles.name}>GreenCoin</Text>
        <Text style={styles.motto}>Ride Safe, Ride Green</Text> */}
      </View>

      <View style={styles.loginContainer}>
        <Text style={{ ...styles.loginWith, marginBottom: 16, fontSize: 30 }}>Login with</Text>

        <Button
          uppercase={false}
          mode="contained"
          color={colors.btn}
          onPress={() => navigation.navigate('Home')}
          compact={true}
          style={styles.loginButton}>
            <Text style={styles.buttonText}>Maiar app</Text>
        </Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  logoContainer: {
    alignItems: 'center',
    gap: 8,
    marginBottom : 50,
    alignContent : "center",
    justifyContent : "center",
  },
  loginContainer: {
    alignItems: 'center',
    flexDirection: "column",
    padding: 7,
    width: 300,
    paddingBottom: 0
  },
  loginButton :  {
    color: "#5FD068",
    marginLeft : 5,
    fontWeight : "bold",
    width : 180,
    height : 60,
    borderRadius : 50, 
    alignContent : "center",
    justifyContent : "center",
    fontSize: 40,
  },
  name: {
    fontSize : 40,
    height : 50,
    margin : 0,
    padding : 0
  },
  motto: {
    fontSize : 20

  },
  loginWith: {

    fontSize : 20

  },
  logo: {
    paddingTop: 60,
    alignItems: "center",
    justifyContent: "center",
  },

  logoLetter:{
     fontSize : 100, 
     color :"white"
  }
  ,
  buttonText :{
    fontSize : 20,
    color : "white",
    
  }
});


