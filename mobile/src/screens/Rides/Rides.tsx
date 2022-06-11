import React from 'react';
import { View } from "react-native";
import { MapScreenProps } from "../RouteProps";
import { Subheading } from 'react-native-paper';
import { Text } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { Avatar } from 'react-native-paper';

export const Rides = (props: MapScreenProps) => {
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
      {rides.map((item, index) => {
        return (
          <View style={styles.card} key={index}>
            <Avatar.Text size={64} label={item.green.toString()} color="#5FD068" style={styles.green } />
            <View style={styles.date}><Text>{item.date}</Text></View>
            <View style={styles.details}>
              <Subheading style={styles.detail}>{item.duration + "min"}</Subheading>
              <Subheading style={styles.detail}>{item.distance + "KM"}</Subheading>
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
    paddingVertical: 8,
    paddingHorizontal: 16,
    flexDirection: "row",
    marginBottom: 8,
    justifyContent: "space-between",
    alignItems: "center"
  },
  green: {
    backgroundColor: "#fff",
  },
  date: {

  },
  details: {
    gap: 8,
  },
  detail: {

  },
});
