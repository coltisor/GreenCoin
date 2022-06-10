import React from 'react'

type TextProps = {
  children?: string;
};

export default function Text(props: TextProps) {
  const { children } = props;

  return (
    <div>{children}</div>
  )
}
