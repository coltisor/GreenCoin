import React from "react";
import { Button as PaperButton } from "react-native-paper";
import { StyleSheet, Text, View } from 'react-native';

type ButtonProps = {
  type?: "default" | "primary";
  children?: string;
};

export const Button = (props: ButtonProps) => {
  const { type = "primary", children } = props;

  return <PaperButton mode="contained">{ children }</PaperButton>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
