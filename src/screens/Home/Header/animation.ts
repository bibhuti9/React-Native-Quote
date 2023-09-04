import Animated, {
  useSharedValue,
  withSpring,
  useAnimatedStyle,
} from 'react-native-reanimated';
export const height = useSharedValue(60);

export const heightStyle = useAnimatedStyle(() => ({
  height: height.value,
}));

export const onAnimation = () => {
  height.value = withSpring(height.value === 60 ? 190 : 60);
};
