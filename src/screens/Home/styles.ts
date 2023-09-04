import {sizes} from '@theme/colors';
import {theme} from '@theme/index';
import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pagination: {
    position: 'absolute',
    top: 10,
    zIndex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    flex: 1,
    width: sizes.width,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 100,
    width: sizes.width,
    alignSelf: 'center',
    zIndex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrowButton: {
    padding: 5,
    borderRadius: 50,
    height: 60,
    width: 60,
    backgroundColor: theme.colors.secondary,
    marginHorizontal: sizes.margin,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
