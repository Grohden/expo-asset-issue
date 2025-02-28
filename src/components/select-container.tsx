import React from 'react';
import { Text, View } from 'react-native';

import { FieldContainer } from './field-container';
import { tw } from '../tw';

export const SelectContainer = (props: {
  value: string;
  placeholder?: string;
  message?: string;
}) => (
  <FieldContainer message={props.message}>
    <View style={tw.flexRow}>
      <Text style={[tw.flex1, props.placeholder && tw.textNeutral]}>
        {props.value || props.placeholder}
      </Text>
      <Text>⌄</Text>
    </View>
  </FieldContainer>
);
