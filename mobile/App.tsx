import { StyleSheet, Text, View } from 'react-native';
import { Map } from "./src/screens/Map/Map";  

export default function App() {
 
  return (
    <Map />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
