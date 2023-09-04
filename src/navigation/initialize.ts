import Navigators from '@navigators/index';
import {Provider} from '@theme/provider';
import {AppRegistry} from 'react-native';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
export const createRootContainer = () => {
  return AppRegistry.registerComponent('reactnativechat', () =>
    gestureHandlerRootHOC(Provider(Navigators)),
  );
};
