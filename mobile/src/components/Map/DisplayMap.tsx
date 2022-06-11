import React, { useRef, useState } from 'react';
import H from "@here/maps-api-for-javascript";
import { useEffect } from 'react';
import { StyleSheet, View, ViewComponent } from 'react-native';

export const DisplayMap = () => {
    const apiKey = "VydPmif68dXoHyntRnVzyFQh9ND9D1C7mCrtHEnyKH4"

   const mapRef = useRef<HTMLElement>();

   const [state , setState] = useState<any>(null)

   useEffect(()=>{

    if (mapRef.current) {
    const platform = new H.service.Platform({
        apikey: 'VydPmif68dXoHyntRnVzyFQh9ND9D1C7mCrtHEnyKH4'
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

      setState(mapTMP)
        
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