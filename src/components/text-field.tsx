import React from 'react';
import { TextInput } from 'react-native';

import { tw } from '../tw';
import { FieldContainer } from './field-container';

export const TextField = () => {
  return (
    <FieldContainer>
      <TextInput style={[tw.flex1]} placeholder="Placeholder" />
    </FieldContainer>
  );
};
