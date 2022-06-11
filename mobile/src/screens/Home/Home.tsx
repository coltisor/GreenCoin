import React from 'react'
import {HomeScreenProps} from "../RouteProps";
import { Button  } from "react-native-paper";
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { globalStyles } from "../../styles/global";

import { colors } from '../../styles/colors';


export const Home = (props: HomeScreenProps) => {
  const { navigation } = props;
  let greenAmount: number = 5;

  return (
    <View style={globalStyles.containerHome}>
      <View style={styles.balance}>
        
        <View style={styles.balanceLogo}>
        </View>
        <Text style={styles.balanceText}>{ greenAmount + " GreenCoin"}</Text>
      </View>

      <View style={ styles.buttonsContainer }>
        <Button
          mode="contained"
          icon= "logout"
          color="white"
          onPress={() => navigation.push('Login')}
          style={styles.buttonsActions }
          >
            <Text style={styles.buttonsActionsText }> Log Out </Text>
        
          </Button>
          <Button
            mode="contained"
            icon="bike" 
            color= {colors.p300}
            style={styles.buttonsActions }
            onPress={() => navigation.push('Rides')}>
            <Text style={styles.buttonsActionsText }> My past rides</Text>
          </Button>
       </View>

       <View style ={styles.newRideContainer}>
          <TouchableOpacity
            onPress={() => { navigation.push("Ride") }}
            style={styles.newRideButton}>
            <Text  style={styles.newRideButtonText}>New Ride</Text>
          </TouchableOpacity>
       </View>
    </View>
  )
}

const styles = StyleSheet.create({
  balance: {
    height : "15%",
    backgroundColor :colors.p300,
    display :"flex",
    alignItems : "center",
    justifyContent :  "center",
    flexDirection: 'row'
  },
  balanceText :{
    fontSize : 25,
    fontWeight : '700',
    color :"white",
    textShadowOffset :  { width : 2 , height : 3 },
    textShadowColor :  "rgba(27,27,27,0.6)"
  },
  balanceLogo : {
    width :  "70px",
    height : "70px",
    backgroundColor : "white",
    borderRadius : 50,
    marginRight : "10px",
    display : 'flex',
    alignItems : "center",
    justifyContent : "center"  
  } ,
  balanceLogoText : { 
    fontSize: 40,
    color : colors.p300   
  } ,
  buttonsContainer: {
    width :  "100%",
    height:"60%",
    padding : 5,
    display :"flex",
    alignItems :"center",
    marginTop : 40
  },
  buttonsActions : {
    width : "80%",
    margin : 5, 
    height : "50px",
    borderRadius : 50,
    display :"flex",
    alignItems : "center",
    justifyContent :"center"
  },
  buttonsActionsText : {
  },
  newRideContainer : {
    display :"flex",
    alignItems :"center",
    justifyContent : "center",
  },
  newRideButton : {
    borderRadius : 50,
    width : "100px",
    height :"100px",
    backgroundColor : colors.p300,
    display : "flex",
    alignItems : "center",
    justifyContent : "center"
  },
  newRideButtonText :{
    fontSize : 17,
    color : colors.white,
    textShadowOffset :  { width : 1 , height : 1 },
    textShadowColor :  "rgba(27,27,27,0.6)",
    fontWeight : '700',

  

  }
});