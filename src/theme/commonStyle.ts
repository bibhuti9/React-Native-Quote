import {Platform, StyleSheet} from 'react-native';
import {theme} from './index';
import {sizes} from './colors';
export const getShadow = (elevation: number) => {
  return Platform.select({
    ios: {
      zIndex: elevation,
      shadowColor: '#000',
      shadowOpacity: 0.0015 * elevation + 0.18,
      shadowRadius: 0.54 * elevation,
      shadowOffset: {
        width: 1,
        height: 1,
      },
    },
    android: {
      elevation: elevation,
      shadowColor: theme.colors.black,
      shadowOpacity: 0,
      shadowRadius: 0,
      shadowOffset: {
        width: 0,
        height: 0,
      },
    },
  });
};
export const commonStyle = StyleSheet.create({
  contianer: {
    padding: sizes.padding + 5,
  },
  iconStyle: {
    width: 30,
    height: 30,
  },
  buttonSquare: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonCircle: {
    width: 40,
    height: 40,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  smallImageStyle: {
    height: 45,
    width: 45,
  },
});
