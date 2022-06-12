import React, { useEffect, useRef, useState } from 'react';
import { View } from "react-native";
import { RideScreenProps } from "../RouteProps";
import MapView, { Polyline, Marker } from 'react-native-maps';
import { StyleSheet, Text, Dimensions, Image } from 'react-native';
import { Provider, Modal, Portal, Avatar } from 'react-native-paper';
import { colors } from "../../styles/colors";
import { Button } from "../../components/Button/Button";
import { Button as PrimaryButton  } from "react-native-paper";
import * as Location from 'expo-location';
import { globalStyles } from "../../styles/global";
import { calculateDistanceFromCoords, getDistance } from "../../helpers/helpers";


export const Ride = (props: RideScreenProps) => {
  const { navigation } = props;

  const [green, setGreen] = useState<number>(0);
  const [distance, setDistance] = useState<number>(0);
  
  const [started, setStarted] = useState<number>(-1);
  const [location, setLocation] = useState<any>(null);
  const [route, setRoute] = useState<any>([]);

  const mapRef = useRef<any>(null);

  const ADDRESS = "erd1z3d4ntcly8n6r5dzyv83wfe6gq7542qaz2g0zsv7nk3ux7efttkqwt8wsu";

  /**
   * RECORD BTN
   */
  const fabClick = () => {
    setStarted(started+1);
  };

  /**
   * PIN
   */
  useEffect(() => {
    setRoute([]);
    updateLocation(); 
    
    const interval = setInterval(() => {   
      updateLocation(); 
    }, 3000);

    return () => {
      setRoute([]);
      clearInterval(interval);
    }
  }, []);

  const updateLocation = () => {
    // console.log('CO');

    (async () => {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          console.log('Update Location: No rights');
              return;
        }

        let location = await Location.getCurrentPositionAsync({
            accuracy: Location.Accuracy.BestForNavigation,
        });
        
        setLocation(location);

        // console.log(location);
      } catch (error) {
        console.log('Update Location: Error', error);
      }
    })();   
  }

  /**
   * Follow Pin
   */
  useEffect(() => {
    goToMyLocation();
  }, [location]);

  const goToMyLocation = async () => {
    if (mapRef && mapRef.current) {
      mapRef.current.animateCamera({center: {"latitude": location?.coords?.latitude, "longitude": location?.coords?.longitude}});
    }
  }

  /**
   * Get Coords From Location Object
   */
  const getCoordinatesFromLocation = (location: any) => {
    if (!location?.coords?.longitude) {
      return {longitude:0, latitude: 0};
    }

    return { longitude: location?.coords?.longitude, latitude: location?.coords?.latitude};
  }
  
  /**
   * STEPS
   */
  useEffect(() => {
    if (started === -1) {
      setStarted(0);
    }
    if (started === 1) {
      const coords = getCoordinatesFromLocation(location);
      if (coords) {
        let tmp = JSON.parse(JSON.stringify(route)); 
        tmp.push(coords);
        setRoute(tmp);
      }
    }
  }, [location]);

  /**
   * ROUTE
   */
  useEffect(() => {
    if (started === 2) {
      mintCoins();
    }
  }, [started]);

  const mintCoins = async () => {
    const distanceCalc = calculateDistanceFromCoords(route);
    //console.log(distanceCalc);

    let promise = await fetch("https://greencoinhacktm.herokuapp.com/carbonHero", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({
        distance: distanceCalc,
        address: ADDRESS,
      }),
    });

    let result = await promise.json();
    console.log(result);
    
    setGreen(result.earned);
    setStarted(3);
  }

  /**
   * Return view
   * ---------------------------------------------------
   */
  return (
     <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.map}
        minZoomLevel={15}
        maxZoomLevel={16}
      >
        <Marker
          coordinate={getCoordinatesFromLocation(location)}
          title="My Marker"
        />

        <Polyline
          coordinates={route}
          strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
          strokeColors={[
            colors.p500
          ]}
          strokeWidth={6}
        />
      </MapView>

      <View style={styles.fabContainer}>
        {
          (started === 0 || started === 1) && (
            <Button
              type={started == 0 ? "fab" : "fabRed"}
              onPress={fabClick}>
              {started == 0 ? "Start" : "Finish"}
            </Button>
          )
        }
        
      </View>

      <Provider>
        <Portal>
          <Modal visible={started === 2} dismissable={false} contentContainerStyle={styles.modalContainer }>
            <View style={styles.modalMint}>
                <Image style={{  marginBottom: 8,height: 45, width: 45, backgroundColor: "#4DB146", borderRadius: 45 }} source={require('./Coin.png')} />
              <Text style={{...{ fontSize: 24}}}>M I N T I N G</Text>
              <Text style={{...{fontSize: 18}}}>Please wait...</Text>
            </View>
          </Modal>

          <Modal visible={started === 3} dismissable={false} contentContainerStyle={styles.modalContainer }>
            <View style={styles.modal}>
              <Text style={{...{marginBottom: 16, fontSize: 24, color: colors.btn, fontWeight: "bold"}}}>C O N G R A T S !</Text>
              <Text style={{ ...{ marginBottom: 16, fontSize: 18 } }}>{"You received"}</Text>
              <View style={{ marginBottom: 16, flexDirection: "row", alignItems: "center", justifyContent:"center"}}>
                <Avatar.Text size={64} label={green.toString()} color={colors.white} style={{  ...styles.green}} />
                <Image style={{ position: "absolute", right: -10, bottom: -10, height: 45, width: 45, backgroundColor: "#4DB146", borderRadius: 45 }} source={require('./Coin.png')} />
              </View>
              <View style={{flexDirection: "row", alignItems: "center"}}>
                <Text style={{ ...{ fontSize: 18 } }}>{"For "}</Text>
                <Text style={{...{fontSize: 22, fontWeight: "bold"}}}>{getDistance(distance)}</Text>
                <Text style={{...{fontSize: 18}}}>{" of Green Ride"}</Text>
              </View>
            </View>

            <PrimaryButton
              uppercase={false}
              mode="contained"
              color={colors.btn}
              onPress={() => navigation.navigate('Home')}
              compact={true}
              style={globalStyles.primaryButton}>
              <Text style={{ fontSize: 20, color: colors.white }}>
                Finish
              </Text>
            </PrimaryButton>
          </Modal>
        </Portal>
      </Provider>
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
  modalContainer: {
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
  },
  modal: {
    backgroundColor: colors.white,
    padding: 20,
    borderRadius: 16,
    width: "80%",
    alignSelf: "center",
    marginBottom: "10%",
    justifyContent: "center",
    alignItems: "center",
  },
  mb1: {
    marginBottom: 16,
  },
  modalMint: {
    width: 218,
    height: 218,
    borderRadius: 218,
    borderWidth: 18,
    borderColor: "#D2F5D1",
    backgroundColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
  },
  green: {
    height: 100,
    width: 100,
    borderRadius: 100,
    backgroundColor: colors.btn,
    borderWidth: 4,
    borderColor: "#A4ECA2"
  },
});

