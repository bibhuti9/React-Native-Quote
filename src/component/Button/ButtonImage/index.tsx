import React from 'react';
import {
  Text,
  TouchableOpacity,
  TextStyle,
  ViewStyle,
  Image,
} from 'react-native';

import {styles} from './styles';

interface propsTypes {
  iconName?: string;
  text?: string;
  textStyle?: TextStyle;
  containerStyle?: ViewStyle;
  iconStyle?: TextStyle;
  iconProps?: any;
  onAction?: () => void;
  iconColor?: string;
  disabled?: boolean;
}

export default function ButtonImage({
  iconName,
  text,
  textStyle,
  containerStyle,
  iconProps,
  iconStyle,
  onAction,
  disabled = false,
}: propsTypes) {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[styles.container, containerStyle]}
      onPress={onAction}>
      <Image style={iconStyle} source={iconName} {...iconProps} />
      {text && <Text style={[styles.textStyle, {...textStyle}]}>{text}</Text>}
    </TouchableOpacity>
  );
}
