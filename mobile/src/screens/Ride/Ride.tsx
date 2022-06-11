import React, { useState } from 'react';
import { View } from "react-native";
import { MapScreenProps } from "../RouteProps";
import MapView from 'react-native-maps';
import { StyleSheet, Text, Dimensions } from 'react-native';
import { colors } from "../../styles/colors";
import { Button } from "../../components/Button/Button";

export const Ride = (props: MapScreenProps) => {
  const [started, setStarted] = useState<boolean>(false);
  const fabClick = () => {
    setStarted(!started);
  };

  return (
     <View style={styles.container}>
      <MapView
        style={styles.map}
        showsUserLocation={true}
        followsUserLocation={true}
      />

      <View style={styles.fabContainer}>
        <Button
          type={!started ? "fab" : "fabRed"}
          onPress={fabClick}>
          {!started ? "Start" : "Finish"}
        </Button>
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
    bottom: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

