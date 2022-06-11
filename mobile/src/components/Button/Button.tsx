import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from "react-native";
import { white } from "react-native-paper/lib/typescript/styles/colors";
import { colors } from "../../styles/colors";

type ButtonProps = {
  type?: "default" | "primary" | "fab" | "fabRed" | "fabBig";
  onPress?: () => void;
  children?: string;
  style?: any;
};

export const Button = (props: ButtonProps) => {
  const { type = "primary", children, onPress, style } = props;

  const getStyle = () => {
    if (type === "fabRed") {
      return {
        bg: styles.fabBgRed,
        fab: styles.fabRed,
        text: { ...styles.fabText, ...styles.fabRedText },
      }
    }
    if (type === "fab") {
      return {
        bg: styles.fabBg,
        fab: styles.fab,
        text: styles.fabText,
      }
    }
    if (type === "fabBig") {
      return {
        bg: styles.fab2Bg,
        fab: styles.fab2,
        text: styles.fabText,
      }
    }
  }

  return (
    <View style={{ ...getStyle()?.bg, ...(style ?? {}) }}>
      <TouchableOpacity
        activeOpacity={0.5} 
        onPress={() => { onPress && onPress(); }}
        style={{ ...getStyle()?.fab }}>
          <Text style={getStyle()?.text}>{children}</Text>
      </TouchableOpacity>
    </View>
  );
};

const fabSize: number = 100;
const fab2Size: number = 130;
const styles = StyleSheet.create({
  fabBg: {
    width: fabSize,
    height: fabSize,
    borderRadius: fabSize,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "black",
    borderWidth: 5,
    borderColor: "#A4ECA2",
  },
  fab: {
    width: fabSize,
    height: fabSize,
    borderRadius: fabSize,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#4DB146",
    borderWidth: 5,
    borderColor: "#A4ECA2",
  },
  fabBgRed: {
    width: fabSize,
    height: fabSize,
    borderRadius: fabSize,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "black",
    borderWidth: 5,
    borderColor: "#F1958F",
  }, 
  fabRed: {
    width: fabSize,
    height: fabSize,
    borderRadius: fabSize,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#EF4135",
    borderWidth: 5,
    borderColor: "#F1958F",
  }, 

  fab2Bg: {
    width: fab2Size,
    height: fab2Size,
    borderRadius: fab2Size,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.p600,
  },
  fab2: {
    width: fab2Size,
    height: fab2Size,
    borderRadius: fab2Size,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.p500,
  },
  fabText: {
    fontSize: 20,
    color: "white"
  },
  fabRedText: {
    color: colors.white,
  }
});
