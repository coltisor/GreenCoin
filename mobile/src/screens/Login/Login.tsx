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
        <View style={styles.logo}> 
          <Text  style={styles.logoLetter} >G</Text>
        </View>
        <View style={styles.name}>GreenCoin</View>

        <Subheading style={styles.motto}>Ride Safe, Ride Green</Subheading>
      </View>

      <View style={styles.loginContainer}>
        <Subheading style={styles.loginWith}>Log in with</Subheading>

        <Button
          mode="contained"
          color="#5FD068"
          onPress={() => navigation.navigate('Home')}
          compact={true}
          style={styles.loginButton}>
            <Text style={styles.buttonText} >Maiar</Text>
         
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
    display : 'flex',
    alignContent : "center",
    justifyContent : "center",
    height : "60%" , 
  
  },
  loginContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: "column",
    gap: 16, 
    padding : 7,
    height : "30%",
    width: "60%"
    
  },
  loginButton :  {
    color: "#5FD068",
    marginLeft : 5,
    fontWeight : "bold",
    width : "100%",
    height : "30%",
    borderRadius : 50, 
    display : "flex",
    alignContent : "center",
    justifyContent : "center",
    fontSize : 40
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
  logo : {
    width : "200px",
    height : "200px",
    backgroundColor : '#5FD068',
    display :"flex",
    alignItems : "center",
    justifyContent: "center",
    borderRadius : "50%", 


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


