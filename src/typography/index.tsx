import {Text, StyleSheet, TextStyle} from 'react-native';
import React from 'react';

import {typo} from '@theme/colors';
import {Font, PropsTypes} from '@typo/types';

export default function Typography({
  children,
  font = Font.Robot,
  style,
  size = typo.L,
  ...other
}: PropsTypes) {
  const styles = StyleSheet.create({
    text: {
      fontSize: size,
    },
  });
  return (
    <Text style={[styles.text, style]} {...other}>
      {children}
    </Text>
  );
}
