import React from 'react';
import {Text, TouchableOpacity, TextStyle, ViewStyle} from 'react-native';

import {styles} from './styles';

import {theme} from '@theme/index';
import DefaultIcon from '@component/DefaultIcon';
interface propsTypes {
  iconName?: string;
  title?: string;
  textStyle?: TextStyle;
  containerStyle?: ViewStyle;
  iconStyle?: TextStyle;
  iconProps?: any;
  onAction?: () => void;
  iconColor?: string;
  disabled?: boolean;
}

export default function ButtonIcon({
  iconName,
  title,
  textStyle,
  containerStyle,
  iconStyle,
  iconProps,
  onAction,
  iconColor = theme.colors.black,
  disabled = false,
}: propsTypes) {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[styles.container, containerStyle]}
      onPress={onAction}>
      <DefaultIcon
        iconName={iconName}
        style={iconStyle}
        color={iconColor}
        {...iconProps}
      />
      <Text style={[styles.textStyle, {...textStyle}]}>{title}</Text>
    </TouchableOpacity>
  );
}
