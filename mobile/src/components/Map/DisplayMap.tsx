import React, { useRef, useState } from 'react';
import H from "@here/maps-api-for-javascript";
import { useEffect } from 'react';
import { Alert, StyleSheet, View } from 'react-native';

export const DisplayMap = () => {
    const apiKey = "VydPmif68dXoHyntRnVzyFQh9ND9D1C7mCrtHEnyKH4"
    const [currentLocation , setCurrentLocation] = useState<any>(null)

    const mapRef = useRef<HTMLElement>();

    const findCoordinates = () => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const location = JSON.stringify(position);
9
        console.log(location);  

        setCurrentLocation(location)
      },
      error => Alert.alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  };
   findCoordinates();

   useEffect(()=>{
    if (mapRef.current) {
      const platform = new H.service.Platform({
        apikey: apiKey
      });

      const layers = platform.createDefaultLayers();
      const mapTMP = new H.Map(
        mapRef.current,
        layers.vector.normal.map,
        {
          pixelRatio: window.devicePixelRatio || 1,
          center: {lat: 50, lng: 5},
          zoom: 4,
        },
      );
      const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(mapTMP));
      const ui = H.ui.UI.createDefault(mapTMP, layers);

      addMarkersToMap(mapTMP)  
    }
   } , []);

    return (
        <View ref={mapRef} style={styles.container}></View>
    )  
}

const styles = StyleSheet.create({
    container: {
        width: '100vw', height:'100vh', position: 'relative'
    }
  });



const addMarkersToMap = (map : any) => {
    var parisMarker = new H.map.Marker({lat:48.8567, lng:2.3508});
    map.addObject(parisMarker);

    var romeMarker = new H.map.Marker({lat:41.9, lng: 12.5});
    map.addObject(romeMarker);


}