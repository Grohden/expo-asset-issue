import FontAwesome6 from '@react-native-vector-icons/fontawesome6';
import React from 'react';
import { Pressable, Text } from 'react-native';

import { tw } from '../../../tw';
import { FieldContainer } from './field-container';

export const SelectContainer = (props: {
  value: string;
  placeholder?: string;
  message?: string;
  onChange?: (value: string) => void;
}) => (
  <FieldContainer message={props.message}>
    <Pressable style={tw.flexRow} onPress={() => props.onChange?.('Change!')}>
      <Text style={[tw.flex1, !props.value && tw.textNeutral]}>
        {props.value || props.placeholder}
      </Text>
      <FontAwesome6
        name="chevron-down"
        size={12}
        iconStyle="solid"
        color={tw.textBlack.color}
      />
    </Pressable>
  </FieldContainer>
);
