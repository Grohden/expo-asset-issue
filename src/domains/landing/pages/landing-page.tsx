import 'expo-image';
import 'expo-dev-client';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'expo-image';
import { useEffect } from 'react';
import { Pressable, StatusBar, Text, useColorScheme, View } from 'react-native';
import NitroCookies from 'react-native-nitro-cookies';
import { Images } from '@/src/assets';
import { SafeAreaView } from '@/src/domains/app/components/safe-area-view';
import { tw } from '@/src/domains/app/tw';

const Action = (props: { onPress: () => void; name: string }) => (
  <Pressable
    onPress={props.onPress}
    style={[
      tw.bgNeutralHigher,
      tw.p8,
      tw.rounded8,
      tw.itemsCenter,
      tw.justifyCenter,
    ]}
  >
    <Text style={tw.textWhite}>{props.name}</Text>
  </Pressable>
);

export function LandingPage() {
  const navigation = useNavigation();
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = isDarkMode ? tw.bgDark : tw.bgWhite;

  useEffect(() => {
    void (async () => {
      try {
        await NitroCookies.clearAll();
        await NitroCookies.clearAll(true);
      } catch (error) {
        console.log('Error clearing cookies', error);
      }
    })();
  }, []);

  return (
    <SafeAreaView
      style={[
        backgroundStyle,
        tw.flex1,
        tw.itemsCenter,
        tw.justifyCenter,
        tw.gap32,
      ]}
    >
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={[tw.itemsCenter, tw.gap8]}>
        <Image source={Images.image} style={tw.square100} />
        <Text>This image renders!</Text>
      </View>
      <View style={[tw.flexRow, tw.gap8]}>
        <Action name="Forms" onPress={() => navigation.navigate('TestPage')} />
        <Action name="WebPage" onPress={() => navigation.navigate('WebPage')} />
      </View>
    </SafeAreaView>
  );
}
