import 'expo-image';
import 'expo-dev-client';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { KeyboardProvider } from 'react-native-keyboard-controller';
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import { Navigator } from './domains/app/router';
import { tw } from './domains/app/tw';

function App() {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <KeyboardProvider>
        <GestureHandlerRootView style={tw.flex1}>
          <NavigationContainer>
            <Navigator />
          </NavigationContainer>
        </GestureHandlerRootView>
      </KeyboardProvider>
    </SafeAreaProvider>
  );
}

export default App;
