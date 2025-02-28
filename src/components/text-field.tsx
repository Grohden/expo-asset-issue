import React from 'react';
import {TextInput} from 'react-native';

import {FieldContainer} from './field-container';
import {tw} from '../tw';

export const TextField = () => {
  return (
    <FieldContainer>
      <TextInput style={[tw.flex1]} placeholder="Placeholder" />
    </FieldContainer>
  );
};
