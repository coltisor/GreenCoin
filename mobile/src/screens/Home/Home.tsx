import React from 'react'
import {HomeScreenProps} from "../RouteProps";
import { Button  } from "react-native-paper";
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { globalStyles } from "../../styles/global";
import { Button as RoundedButton } from "../../components/Button/Button";

import { colors } from '../../styles/colors';


export const Home = (props: HomeScreenProps) => {
  const { navigation } = props;
  let greenAmount: number = 5;

  return (
    <View style={globalStyles.containerHome}>
      <View style={styles.balance}>
        
        <View style={styles.balanceLogo}>
          <Image source={require('./Coin.png')} />
        </View>

        <View>
          <Text style={{ fontSize: 18}}>You have</Text>
          <Text style={styles.balanceText}>{ greenAmount + " GreenCoin"}</Text>
        </View>
      </View>

      <View style={ styles.buttonsContainer }>

        <Image style={{ width: 327, height: 295 }} source={require('./Illustr.png')} />
        
        <View style={{marginTop: -30}}>
          <Button
            mode="contained"
            uppercase={false}
            color= {colors.green}
            style={styles.buttonsActions }
            onPress={() => navigation.push('Rides')}>
            <Text style={{ fontSize: 20 }}>My past rides</Text>
          </Button>

          <Button
            mode="contained"
            uppercase={false}
            color= {colors.btn}
            style={styles.buttonsActions }
            onPress={() => navigation.push('Ride')}>
            <Text style={{ fontSize: 20, color: colors.white }}>New Ride</Text>
          </Button>

          <Button
              mode="text"
              color="black"
              uppercase={false}
              onPress={() => navigation.push('Login')}
              style={styles.buttonsActions }
              >
            <Text style={{ fontSize: 20 }}>Log Out</Text>
          </Button> 
        </View>
       </View>
    </View>
  )
}

const styles = StyleSheet.create({
  balance: {
    height : 113,
    backgroundColor: colors.green,
    alignItems : "center",
    flexDirection: 'row',
    paddingHorizontal: 20
  },
  balanceText :{
    fontSize : 30,
    fontWeight : 'normal',
  },
  balanceLogo : {
    backgroundColor : "white",
    borderRadius : 50,
    marginRight : 10,
    alignItems : "center",
    justifyContent : "center"  
  } ,
  balanceLogoText : { 
    fontSize: 40,
    color : colors.green   
  } ,
  buttonsContainer: {
    height: "40%",
    padding : 5,
    display :"flex",
    alignItems :"center",
    marginTop : 40
  },
  buttonsActions : {
    width : 255,
    margin : 5, 
    height : 50,
    borderRadius : 50,
    alignItems : "center",
    justifyContent: "center",
    marginBottom: 16
  },
  newRideContainer : {
    alignItems :"center",
    justifyContent: "center",
  },
  newRideButtonText :{
    fontSize : 17,
    color : colors.white,
    textShadowOffset :  { width : 1 , height : 1 },
    textShadowColor :  "rgba(27,27,27,0.6)",
    fontWeight : '700',
  }
});