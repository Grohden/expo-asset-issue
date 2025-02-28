import 'expo-image';
import 'expo-dev-client';
import React from 'react';
import { StatusBar, View, useColorScheme, Button } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-controller';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { wrapScrollView } from 'react-native-scroll-into-view';
import { useForm } from 'react-hook-form';

import { TestSection } from './test-section';
import { tw } from '../../tw';
import { useBooleanController } from '../../hooks/use-boolean-controller';

const CustomScrollView = wrapScrollView(KeyboardAwareScrollView);

export function TestPage() {
  const isDarkMode = useColorScheme() === 'dark';
  const insets = useSafeAreaInsets();
  const section1 = useBooleanController(true);
  const form1 = useForm();
  const form2 = useForm();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View style={[backgroundStyle, tw.flex1]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <CustomScrollView
        contentContainerStyle={{ paddingBottom: Math.max(insets.bottom, 12) }}
      >
        <View style={[tw.ph12, tw.pt12, tw.gap16]}>
          <TestSection form={form1} openController={section1} />
          <TestSection form={form2} />
        </View>
      </CustomScrollView>
    </View>
  );
}
