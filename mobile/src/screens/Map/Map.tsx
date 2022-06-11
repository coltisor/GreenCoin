import React, { useState } from 'react'
import { DisplayMap } from '../../components/Map/DisplayMap';
import { Alert } from "react-native"

export const Map = () => {
  const [currentLocation , setCurrentLocation] = useState<any>(null)

 const findCoordinates = () => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const location = JSON.stringify(position);

        setCurrentLocation(location)
      },
      error => Alert.alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  };

  console.log(currentLocation);
  

  return (
    <DisplayMap/>
  )
}
