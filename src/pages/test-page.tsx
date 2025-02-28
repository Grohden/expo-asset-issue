import 'expo-image';
import 'expo-dev-client';
import React from 'react';
import { StatusBar, View, useColorScheme } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-controller';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import { PreBuildSection } from '../components/pre-build-section';
import { tw } from '../tw';

export function TestPage() {
  const isDarkMode = useColorScheme() === 'dark';
  const insets = useSafeAreaInsets();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View style={[backgroundStyle, tw.flex1]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <KeyboardAwareScrollView
        contentContainerStyle={{ paddingBottom: Math.max(insets.bottom, 12) }}
      >
        <View style={[tw.ph12, tw.pt12, tw.gap16]}>
          <PreBuildSection />
          <PreBuildSection />
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
}
