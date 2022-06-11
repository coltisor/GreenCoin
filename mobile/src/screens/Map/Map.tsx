import React from 'react';
import { View } from "react-native";
import {MapScreenProps} from "../RouteProps";

export const Map = (props: MapScreenProps) => {
  console.log('MAP');
  return (
    <DisplayMap/>
  )
}
