import React, {useState} from 'react';
import {TextInput, View} from 'react-native';

import {FieldContainer} from './field-container';
import {tw} from '../tw';
import {Chip} from './chip';

export const ChipField = () => {
  const [list, setList] = useState(() =>
    new Array(10).fill(0).map((_, i) => i),
  );

  return (
    <View style={[tw.flex1, tw.gap8]}>
      <FieldContainer>
        <TextInput style={[tw.flex1]} placeholder="Placeholder" />
      </FieldContainer>
      <View style={[tw.flexRow, tw.wrap, tw.gap8]}>
        {list.map(i => (
          <Chip
            key={i}
            onPress={() => {
              setList(prev => prev.filter((_, j) => j !== i));
            }}
          />
        ))}
      </View>
    </View>
  );
};
