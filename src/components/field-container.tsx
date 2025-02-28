import type React from 'react';
import { Pressable, View } from 'react-native';

import { tw } from '../tw';

const noop = () => {};

export const FieldContainer = ({ children }: { children: React.ReactNode }) => (
  <Pressable
    style={[
      tw.flexRow,
      tw.border1,
      tw.borderNeutral,
      tw.rounded4,
      tw.minHeight48,
      tw.itemsCenter,
      tw.ph12,
    ]}
    onPress={noop}
  >
    <View style={tw.flex1}>{children}</View>
  </Pressable>
);
