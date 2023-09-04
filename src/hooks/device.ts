import {Platform} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export class Inset {
  static bottom(want?: number) {
    const {bottom} = useSafeAreaInsets();
    return Platform.select({
      ios: bottom,
      android: want ? want : 0,
    });
  }
  static top(want?: number) {
    const {top} = useSafeAreaInsets();
    return Platform.select({
      ios: top,
      android: want ? want : 0,
    });
  }
}
