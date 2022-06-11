import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from "react-native";
import { white } from "react-native-paper/lib/typescript/styles/colors";
import { colors } from "../../styles/colors";

type ButtonProps = {
  type?: "default" | "primary" | "fab" | "fabRed";
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
  }

  return (
    <View style={{ ...getStyle()?.bg, ...(style ?? {})}}>
      <TouchableOpacity
        activeOpacity={0.5} 
        onPress={() => { onPress && onPress(); }}
        style={getStyle()?.fab}>
          <Text style={getStyle()?.text}>{children}</Text>
      </TouchableOpacity>
    </View>
  );
};

const fabSize: number = 98;
const styles = StyleSheet.create({
  fabBg: {
    width: fabSize,
    height: fabSize,
    borderRadius: fabSize,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.p600,
  },
  fab: {
    width: fabSize,
    height: fabSize,
    borderRadius: fabSize,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.p500,
  },

  fabBgRed: {
    width: fabSize,
    height: fabSize,
    borderRadius: fabSize,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "red",
  }, 
  fabRed: {
    width: fabSize,
    height: fabSize,
    borderRadius: fabSize,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "red",
  }, 
  fabText: {
    fontSize: 20,
  },
  fabRedText: {
    color: colors.white,
  }
});
