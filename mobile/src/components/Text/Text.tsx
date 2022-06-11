import React from 'react';
import { Text as RNText, StyleSheet } from "react-native";

type TextProps = {
  children?: string;
  type?: "default" | "title";
};

export default function Text(props: TextProps) {
  const { children } = props;

  conts getStyle = (type) => {
    if (type === "default") {
        return styles.
      } else {
      r
      }
  }

  return (
    <RNText style={}>{children}</RNText>
  )
}

const styles = StyleSheet.create({
  default: {
    fontFamily: "Cochin"
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold"
  }
});
