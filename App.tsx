import React from 'react';
import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import { Images } from './src/assets';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={[backgroundStyle, styles.flex1]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View
        style={[backgroundStyle, styles.flex1, styles.alignCenter, styles.justifyCenter]}
      >
        <Image source={Images.dawg} style={styles.square100} />
        <Text>Dawg blink ;D</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  flex1: { flex: 1 },
  alignCenter: { alignItems: 'center' },
  justifyCenter: { justifyContent: 'center' },
  square100: { width: 100, height: 100 },
});

export default App;
