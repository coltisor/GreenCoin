import React from 'react';
import { View } from "react-native";
import { Button } from 'react-native-paper';
import { MapScreenProps } from "../RouteProps";
import { Headline } from 'react-native-paper';
import { Subheading } from 'react-native-paper';

export const Ride = (props: MapScreenProps) => {
  console.log('MAP');

  const rides = [
    {
      date: "11 Jun 2022",
      duration: 500,
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
      {rides.map((item) => {
        return (
          <View style={styles.card}>
            <View style={styles.green}>{item.green}</View>
            <View style={styles.date}>{item.date}</View>
            <View style={styles.details}>
              <Subheading style={styles.duration}>{item.duration + "min"}</Subheading>
              <Subheading style={styles.duration}>{item.distance + "KM"}</Subheading>
            </View>
          </View>
        );
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {

  }, 
  fab: {
    
  },
  cards: {
    gap: 8,
  },
  card: {
    backgroundColor: "#5FD068",
    padding: 8,
    flexDirection: "row",
    gap: 8,
  },
  green: {
    width: 64,
    height: 64,
    borderRadius: 50,
    backgroundColor: "#fff",
  },
  date: {

  },
  details: {
    gap: 8,
  }
});
