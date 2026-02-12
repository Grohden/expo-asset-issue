import 'expo-image';
import 'expo-dev-client';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'expo-image';
import { Pressable, StatusBar, Text, useColorScheme } from 'react-native';

import { Images } from '@/src/assets';
import { SafeAreaView } from '@/src/domains/app/components/safe-area-view';
import { tw } from '@/src/domains/app/tw';

export function LandingPage() {
  const navigation = useNavigation();
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = isDarkMode ? tw.bgDark : tw.bgWhite;

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
