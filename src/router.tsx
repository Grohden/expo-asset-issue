import {
  TransitionPresets,
  createStackNavigator,
} from '@react-navigation/stack';
import React from 'react';

import { LandingPage } from './pages/landing-page';
import { TestPage } from './pages/test-page';

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
        <Modal.Screen name="TestPage" component={TestPage} />
      </Modal.Group>
    </Modal.Navigator>
  );
}
