import React from 'react';
import { TextInput } from 'react-native';

import { tw } from '../../../tw';
import { FieldContainer } from './field-container';

export const TextField = (props: {
  value: string;
  onChangeText: (value: string) => void;
  placeholder?: string;
  message?: string;
}) => (
  <FieldContainer message={props.message}>
    <TextInput
      style={[tw.flex1]}
      value={props.value}
      placeholderTextColor={tw.textNeutral.color}
      placeholder={props.placeholder}
      onChangeText={props.onChangeText}
    />
  </FieldContainer>
);
