import 'expo-image';
import 'expo-dev-client';
import React from 'react';
import {
  Pressable,
  SafeAreaView,
  StatusBar,
  Text,
  useColorScheme,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import {tw} from '../tw';
import {Images} from '../assets';
import {Image} from 'expo-image';
import {useNavigation} from '@react-navigation/native';

export function LandingPage() {
  const navigation = useNavigation();
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={[backgroundStyle, tw.flex1]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Pressable
        onPress={() => navigation.navigate('TestPage')}
        style={[backgroundStyle, tw.flex1, tw.alignCenter, tw.justifyCenter]}>
        <Image source={Images.dawg} style={tw.square100} />
        <Text>Click me!</Text>
      </Pressable>
    </SafeAreaView>
  );
}
