import {sizes} from '@theme/colors';
import {theme} from '@theme/index';
import {StyleSheet} from 'react-native';
import {getShadow} from '../../../theme/commonStyle';
export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 1,

    backgroundColor: theme.colors.secondary,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'flex-end',
    overflow: 'hidden',
  },
  button: {
    backgroundColor: theme.colors.secondary,
    borderRadius: 50,
    width: 60,
    height: 60,
    ...getShadow(2),
    justifyContent: 'center',
    alignItems: 'center',
  },
  bubbleButton: {
    marginVertical: sizes.margin,
  },
});
