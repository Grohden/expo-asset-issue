import type { StaticParamList } from '@react-navigation/native';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import { FormPage } from '@/src/domains/forms/pages/form-page';
import { LandingPage } from '@/src/domains/landing/pages/landing-page';

type RootParamList = {
  LandingPage: undefined;
  TestPage: undefined;
};

const Modal = createStackNavigator<RootParamList>();

export function Navigator() {
  return (
    <Modal.Navigator>
      <Modal.Group
        screenOptions={{
          ...TransitionPresets.ModalPresentationIOS,
          presentation: 'modal',
        }}
      >
        <Modal.Screen name="LandingPage" component={LandingPage} />
        <Modal.Screen name="TestPage" component={FormPage} />
      </Modal.Group>
    </Modal.Navigator>
  );
}

type RootStackParamList = StaticParamList<typeof Modal>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
