import { AppRegistry, Platform, UIManager } from 'react-native';
import { name as appName } from './app.json';
import App from './src/app';

if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental?.(true);
}

AppRegistry.registerComponent(appName, () => App);
