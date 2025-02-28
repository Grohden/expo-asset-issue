import React from 'react';
import { Pressable, Text } from 'react-native';

import { FieldContainer } from './field-container';
import { tw } from '../tw';

export const SelectContainer = (props: {
  value: string;
  onChange: (data: string) => void;
  placeholder?: string;
  message?: string;
}) => (
  <FieldContainer message={props.message}>
    <Pressable style={tw.flexRow} onPress={() => props.onChange('New Value')}>
      <Text style={[tw.flex1, props.placeholder && tw.textNeutral]}>
        {props.value || props.placeholder}
      </Text>
      <Text>⌄</Text>
    </Pressable>
  </FieldContainer>
);
