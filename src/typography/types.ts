import {TextStyle} from 'react-native';
import {typo} from '@theme/colors';

export interface PropsTypes {
  font?: Font.Italic | Font.Robot;
  children?: string | null;
  style?: TextStyle;
  size?: typo.L | typo.M | typo.S | typo.XL | typo.SM;
  other?;
}

export enum Font {
  Robot = 'Roboto-Regular',
  Italic = 'Courgette-Regular',
}
