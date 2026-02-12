import 'expo-image';
import 'expo-dev-client';
import { useForm } from 'react-hook-form';
import { StatusBar, View, useColorScheme } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-controller';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { wrapScrollView } from 'react-native-scroll-into-view';

import { tw } from '../../../tw';
import { FormSection } from '../components/form-section';
import { useBooleanController } from '../hooks/use-boolean-controller';

const CustomScrollView = wrapScrollView(KeyboardAwareScrollView);

export function FormPage() {
  const isDarkMode = useColorScheme() === 'dark';
  const insets = useSafeAreaInsets();
  const section1 = useBooleanController(true);
  const form1 = useForm();
  const form2 = useForm();

  const backgroundStyle = isDarkMode ? tw.bgDark : tw.bgWhite;

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
          <FormSection form={form1} openController={section1} />
          <FormSection form={form2} />
        </View>
      </CustomScrollView>
    </View>
  );
}
