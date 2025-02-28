import 'expo-image';
import 'expo-dev-client';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'expo-image';
import React from 'react';
import {
  Pressable,
  SafeAreaView,
  StatusBar,
  Text,
  useColorScheme,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import { Images } from '../assets';
import { tw } from '../tw';

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
        style={[backgroundStyle, tw.flex1, tw.itemsCenter, tw.justifyCenter]}
      >
        <Image source={Images.image} style={tw.square100} />
        <Text>Click me!</Text>
      </Pressable>
    </SafeAreaView>
  );
}
