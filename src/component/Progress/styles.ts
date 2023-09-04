import {progress} from '@screens/Home/data';
import {sizes} from '@theme/colors';
import {theme} from '@theme/index';
import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    width: sizes.width / progress.length - sizes.margin - 10,
    height: 10,
    borderRadius: sizes.radious,
    marginHorizontal: sizes.margin - 4,
  },
});
