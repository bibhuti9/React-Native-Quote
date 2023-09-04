import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import FlashMessage from 'react-native-flash-message';

type ThemeProviderFunction = <P>(
  Component: React.ComponentType,
) => React.ComponentType<P>;

export const Provider: ThemeProviderFunction = Component => {
  function wraper(props: any): JSX.Element {
    return (
      <SafeAreaProvider>
        <FlashMessage position="top" />
        <Component {...props} />
      </SafeAreaProvider>
    );
  }
  return wraper;
};
