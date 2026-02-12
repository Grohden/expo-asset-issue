import {
  TransitionPresets,
  createStackNavigator,
} from '@react-navigation/stack';
import React from 'react';

import { FormPage } from './domains/forms/pages/form-page';
import { LandingPage } from './domains/landing/pages/landing-page';

const Modal = createStackNavigator();

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
