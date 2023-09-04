import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import {styles} from './styles';
import {PropsTypes} from './types';

export default function Button({
  text,
  textStyle,
  containerStyle,
  textProps,
  onAction,
  ...other
}: PropsTypes) {
  return (
    <TouchableOpacity
      onPress={onAction}
      style={[styles.container, containerStyle]}
      {...other}>
      <Text style={[textStyle]} {...textProps}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}
