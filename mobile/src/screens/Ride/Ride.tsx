import React from 'react';
import { View } from "react-native";
import { TouchableOpacity } from "react-native";
import { MapScreenProps } from "../RouteProps";
import MapView from 'react-native-maps';
import { StyleSheet, Text, Dimensions } from 'react-native';
import { FAB } from 'react-native-paper';
import { colors } from "../../styles/colors";

export const Ride = (props: MapScreenProps) => {

  return (
     <View style={styles.container}>
      <MapView style={styles.map} />
      <View style={styles.fabContainer}>
        <TouchableOpacity
          activeOpacity={0.8} 
          onPress={() => { console.log('CLICK'); }}
          style={styles.fab}>
            <Text>Start</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  fabContainer: {
    position: 'absolute',
    right: 0,
    left: 0,
    bottom: 128,
    justifyContent: 'center',
    alignItems: 'center'
  },
  fab: {
    backgroundColor: colors.p500,
    width: 128,
    height: 128,
    borderRadius: 128,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

