import {NativeStackScreenProps} from "@react-navigation/native-stack";

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Map: undefined;
  Rides: undefined;
  RidesV2: undefined;
};

export type LoginScreenProps = NativeStackScreenProps<RootStackParamList, 'Login'>;
export type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
export type MapScreenProps = NativeStackScreenProps<RootStackParamList, 'Map'>;
export type RidesScreenProps = NativeStackScreenProps<RootStackParamList, 'Rides'>;
export type RidesV2ScreenProps = NativeStackScreenProps<RootStackParamList, 'RidesV2'>;
