import { StyleSheet } from 'react-native';
import { colors } from "./colors";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 150,
  },
  containerHome: {
    flex: 1,
    backgroundColor: colors.gray,
  },
  primaryButton: {
    width : 255,
    margin : 5, 
    height : 50,
    borderRadius : 50,
    alignItems : "center",
    justifyContent: "center",

  }
});