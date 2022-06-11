
import React, { useEffect, useRef, useState } from "react"
import { Text, StyleSheet, View  } from "react-native"
import H from "@here/maps-api-for-javascript";




const MapDisplay = () => {
    const apiKey = "VydPmif68dXoHyntRnVzyFQh9ND9D1C7mCrtHEnyKH4";

    const refMap = useRef<HTMLElement>()

    useEffect(() => {
        const H = window.H;

        if (refMap.current) {
            const platform = new H.service.Platform({
                apikey: "VydPmif68dXoHyntRnVzyFQh9ND9D1C7mCrtHEnyKH4"
            });


            console.log(refMap.current)
        
            const defaultLayers = platform.createDefaultLayers();

            const map = new H.Map(
                refMap.current,
                defaultLayers.vector.normal.map,
                {
                  center: { lat: 50, lng: 5 },
                  zoom: 4,
                  pixelRatio: window.devicePixelRatio || 1
                }
              );

            const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

            const ui = H.ui.UI.createDefault(map, defaultLayers);
            
        }
        
    }, [])

    return ( <View ref={refMap} style={styles.container}></View>)

}

const styles = StyleSheet.create({
    container: {
        width: '100vw', height:'100vh', position: 'relative'
    }
  });


export default MapDisplay;