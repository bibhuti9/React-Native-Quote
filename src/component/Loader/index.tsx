import {ActivityIndicator} from 'react-native';
import React from 'react';
import {Overlay} from '@rneui/themed';
import {theme} from '@theme/index';

export interface propsTypes {
  status: boolean;
}

export default function Loader({status}: propsTypes) {
  return (
    <Overlay isVisible={status}>
      <ActivityIndicator size="large" color={theme.colors.primary} />
    </Overlay>
  );
}
