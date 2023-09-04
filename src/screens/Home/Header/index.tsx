import React from 'react';
import {View} from 'react-native';
import Animated from 'react-native-reanimated';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {styles} from './styles';
import {heightStyle, onAnimation, height} from './animation';

import {theme} from '@theme/index';
import ButtonIcon from '@component/Button/ButtonIcon';

const Buttons = ({icon, onAction}) => {
  return (
    <ButtonIcon
      onAction={onAction}
      iconName={icon}
      iconProps={{type: 'feather'}}
      containerStyle={styles.bubbleButton}
    />
  );
};

export default function Header() {
  const {top} = useSafeAreaInsets();

  const onPress = () => {
    onAnimation();
  };
  const onAddUser = () => {};

  return (
    <Animated.View
      style={[heightStyle, styles.container, {marginTop: top + 50, left: 20}]}>
      <View>
        <Buttons icon={'share-2'} onAction={onAddUser} />
        <Buttons icon={'save'} onAction={() => {}} />
      </View>

      <ButtonIcon
        onAction={onPress}
        iconName={height.value === 60 ? 'settings' : 'x'}
        containerStyle={styles.button}
        iconColor={theme.colors.black}
        iconProps={{size: 25, type: 'feather'}}
      />
    </Animated.View>
  );
}
