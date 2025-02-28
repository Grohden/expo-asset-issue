import type React from 'react';
import { Pressable, Text, View } from 'react-native';

import { tw } from '../tw';

const noop = () => {};

export const FieldContainer = ({
  message,
  children,
}: { children: React.ReactNode; message?: string }) => (
  <View style={[tw.flexColumn, tw.gap8]}>
    <Pressable
      style={[
        tw.flexRow,
        tw.border1,
        message ? tw.borderError : tw.borderNeutral,
        tw.rounded4,
        tw.minHeight48,
        tw.itemsCenter,
        tw.ph12,
      ]}
      onPress={noop}
    >
      <View style={tw.flex1}>{children}</View>
    </Pressable>
    {!!message && <Text style={tw.textError}>{message}</Text>}
  </View>
);
