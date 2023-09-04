import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('screen');

const baseColors = {
  primary: '#ffe8d8',
  secondary: '#f79354',
  success: '#4DB740', //70C04F
  error: '#D53D32', //FF0000
  warning: '#EC8A00',
  grey: '#F5F9FF',
  searchBg: '#9B9B9B',
};

export const colors = {
  ...baseColors,
  primary: '#ffe8d8',
  primaryDark: '#EDB66E',
  primaryLight: '#fae9de',
  primaryLight2: '#f4e9e2',
  secondary: '#f79354',
  gray: '#FCFDFF',
  grey0: '#F5F6F8',
  grey1: '#C4C4C4',
  grey2: '#BFBFBF',
  grey3: '#fae9de', // Body primary color
  grey5: '#707070',
  greyLight: '#d9d7d7',
  greyOutline: '#E2E2E2',
  disabled: '#9B9B9B',
  divider: '#9B9B9B',
  searchBg: '#9B9B9B',
  black: '#000',
  white: '#fff',
  platform: {
    android: baseColors,
    ios: baseColors,
    web: baseColors,
    default: baseColors,
  },
};

export enum typo {
  XL = 34,
  L = 25,
  M = 20,
  S = 18,
  SM = 15,
}

export const sizes = {
  padding: 15,
  margin: 15,
  radious: 10,
  ...typo,
  width,
  height,
  bold: 'bold',
  bold1: '900',
  bold2: '700',
  bold3: '500',
  bold4: 'normal',
  space1: 10,
  space2: 15,
  space3: 20,
};
