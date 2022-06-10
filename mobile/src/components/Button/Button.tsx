import React from "react";
import { Button as PaperButton } from "react-native-paper";

type ButtonProps = {
  type: "default" | "primary";
};

export const Button = (props: ButtonProps) => {
  const { type } = props;
  return <PaperButton>Button</PaperButton>;
};
