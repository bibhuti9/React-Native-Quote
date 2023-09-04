import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AppStackScreens} from './screenNames';
import {screensOptions} from '@navigators/options';

const Stack = createStackNavigator();

export default function AppStack(): JSX.Element {
  return (
    <Stack.Navigator screenOptions={screensOptions}>
      {AppStackScreens.map(screen => (
        <Stack.Screen
          name={screen.name}
          component={screen.component}
          key={screen.name}
        />
      ))}
    </Stack.Navigator>
  );
}
