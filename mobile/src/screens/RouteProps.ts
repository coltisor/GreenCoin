import {NativeStackScreenProps} from "@react-navigation/native-stack";

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Rides: undefined;
  Wallet: undefined;
};

export type LoginScreenProps = NativeStackScreenProps<RootStackParamList, 'Login'>;
export type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
export type RidesScreenProps = NativeStackScreenProps<RootStackParamList, 'Rides'>;
export type WalletScreenProps = NativeStackScreenProps<RootStackParamList, 'Wallet'>;
