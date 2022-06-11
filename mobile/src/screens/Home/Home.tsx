import React from 'react'
import {HomeScreenProps} from "../RouteProps";
import { Button  } from "react-native-paper";
import { StyleSheet, Text, View } from 'react-native';
import { Headline } from 'react-native-paper';
import { Subheading } from 'react-native-paper';
import { globalStyles } from "../../styles/global";


export const Home = (props: HomeScreenProps) => {
  const { navigation } = props;
  let greenAmount: number = 5;

  return (
    <View style={globalStyles.containerHome}>
      <Subheading style={styles.balance}>{"You currently have:" + greenAmount + "  Green"}</Subheading>


      <View style={ styles.buttonsContainer }>
        <Button
          mode="contained"
          icon="bike" 
          color="#5FD068"
          onPress={() => navigation.push('Rides')}>
          My past rides
        </Button>

        <Button 
          mode="contained"
          color="#5FD068"
          onPress={() => { navigation.push("Ride"); }}
        >
          New Ride
        </Button>

        <Button 
          mode="contained"
          color="#5FD068"
          onPress={() => { navigation.push("RideV2"); }}
        >
          New Ride On Map
        </Button>
      </View>
      

    </View>
  )
}

const styles = StyleSheet.create({
  balance: {

  },
  buttonsContainer: {

  }
});