import 'expo-image';
import 'expo-dev-client';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import FullStory from '@fullstory/react-native';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import { KeyboardProvider } from 'react-native-keyboard-controller';

import { Navigator } from './router';
import { tw } from './tw';

function App() {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <KeyboardProvider>
        <GestureHandlerRootView style={tw.flex1}>
          <NavigationContainer
            onStateChange={(state) => {
              const currentRoute = state?.routes[state.index!];

              if (currentRoute) {
                FullStory.event('Navigation', {
                  currentRouteName: currentRoute.name,
                });
              }
            }}
          >
            <Navigator />
          </NavigationContainer>
        </GestureHandlerRootView>
      </KeyboardProvider>
    </SafeAreaProvider>
  );
}

export default App;
