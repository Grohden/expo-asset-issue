import 'react-native';
import { it } from '@jest/globals';
import React from 'react';
import renderer from 'react-test-renderer';

import App from '../src/app';

it('renders correctly', () => {
  renderer.create(<App />);
});
