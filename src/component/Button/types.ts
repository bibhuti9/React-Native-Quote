import {TextStyle, ViewStyle} from 'react-native';

export interface PropsTypes {
  text?: string;
  textStyle?: TextStyle;
  containerStyle?: ViewStyle;
  onAction?: () => void;
  textProps?;
  other?;
}
