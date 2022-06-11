import React from 'react';
import { View , Image, } from "react-native";
import { MapScreenProps } from "../RouteProps";
import { Subheading } from 'react-native-paper';
import { Text } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { Avatar } from 'react-native-paper';
import Ionicons from '@expo/vector-icons/Ionicons';


import { colors } from '../../styles/colors';

export const Rides = (props: MapScreenProps) => {
  console.log('MAP');

  const rides = [
    {
      date: "11 Jun 2022",
      duration: 10,
      green: 3,
      distance: 750,
      route: "",
    },
    {
      date: "10 Jun 2022",
      duration: 500,
      green: 5,
      distance: 2250,
      route: "",
    }
  ];

  return (
    <View style={styles.cards}>
      {rides.map((item, index) => {
        return (
          <View style={styles.card} key={index}>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent:"center"}}>
              <View style={{  flexDirection: "row", alignItems: "center", justifyContent:"center" , height : 47 , width : 47}}>
                  <Avatar.Text size={47} label={item.green.toString()} color={colors.white} style={{  ...styles.green}} />
                  <Image style={{position: "absolute",
                                 right: 0,
                                 bottom: 0, 
                                 height: 16, 
                                 width: 16, 
                                 backgroundColor: colors.btn, 
                                 borderRadius: 45 
                              }}
                         source={require('./Coin.png')} />
                </View>
              <View>
                 <Text style={styles.date}>{item.date}</Text>
                 </View>
            </View>
      
            <View style={styles.details}>
              <Subheading style={styles.detail}>
                {item.distance  < 999 ? item.distance.toString() +  " m"  : (item.distance / 1000).toString() + " km" }
                </Subheading>
              <Subheading style={styles.detail}>{converteTime(item.duration) }</Subheading>
            </View>


          </View>
          
        );
      })}
    </View>
  )
}

const converteTime = ( n : any) =>{
    const num = Number(n);
    const hours = (num / 60);
    const rhours = Math.floor(hours);
    const minutes = (hours - rhours) * 60;
    const rminutes = Math.round(minutes);

    if (rhours < 1) {
      return rminutes + "min"
    }else {
      return rhours + "h " + rminutes + "min"
    }
}

const styles = StyleSheet.create({
  cards: {
    gap: 8,
  },
  card: {
    backgroundColor: colors.white,
    height : 70,
    paddingVertical: 8,
    paddingHorizontal: 16,
    flexDirection: "row",
    marginBottom: 8,
    justifyContent: "space-between",
    alignItems: "center"
  },
  green: {
    backgroundColor: colors.btn,
    width : 47 ,
    height : 47 ,
    padding:0,
    margin: 0,
    alignItems :"center",
    justifyContent: "center"
    
  },
  date : {
    paddingLeft : 15,
    fontSize : 18,
  },
  details: {
    gap: 8,
    alignItems  : "flex-end"
  },
  detail: {
    fontSize : 18
  },
});
