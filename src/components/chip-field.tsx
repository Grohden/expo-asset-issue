import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';

import { tw } from '../tw';
import { Chip } from './chip';
import { FieldContainer } from './field-container';

export const ChipField = (props: {
  value?: string;
  placeholder?: string;
  message?: string;
}) => {
  const [list, setList] = useState(() =>
    new Array(10).fill(0).map((_, i) => i),
  );

  return (
    <View style={[tw.flex1, tw.gap8]}>
      <FieldContainer message={props.message}>
        <Text style={[props.placeholder && tw.textNeutral]}>
          {props.value || props.placeholder}
        </Text>
      </FieldContainer>
      <View style={[tw.flexRow, tw.wrap, tw.gap8]}>
        {list.map((i) => (
          <Chip
            key={i}
            text={`Chip ${i}`}
            onPress={() => {
              setList((prev) => prev.filter((_, j) => j !== i));
            }}
          />
        ))}
      </View>
    </View>
  );
};
