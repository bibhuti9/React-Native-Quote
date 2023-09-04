import {sizes, typo} from '@theme/colors';
import {theme} from '@theme/index';
import {Font} from '@typo/types';
import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    width: sizes.width,
    height: sizes.height,
    backgroundColor: theme.colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
  quoteContainer: {
    backgroundColor: theme.colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    margin: sizes.margin,
    padding: sizes.padding,
    borderRadius: sizes.radious,
    opacity: 0.6,
  },
  text: {
    color: theme.colors.black,
    textAlign: 'center',
    fontStyle: 'italic',
    letterSpacing: 1,
    fontFamily: Font.Italic,
  },
  author: {
    fontStyle: 'italic',
    fontSize: typo.S,
    alignSelf: 'flex-end',
    marginTop: sizes.margin + 10,
  },
});
