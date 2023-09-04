import React from 'react';
import {View} from 'react-native';

import {styles} from './styles';
import {theme} from '@theme/index';

export default function ProgressBar({item, isLast, initialIndex, index}) {
  const bgcolor =
    index <= initialIndex ? theme.colors.secondary : theme.colors.primary;
  return <View style={[styles.container, {backgroundColor: bgcolor}]} />;
}
