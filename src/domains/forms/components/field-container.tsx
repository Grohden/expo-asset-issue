import type { ReactNode } from 'react';
import { Text, View } from 'react-native';

import { tw } from '@/src/domains/app/tw';

export const FieldContainer = ({
  message,
  children,
}: {
  children: ReactNode;
  message?: string;
}) => (
  <View style={[tw.gap8]}>
    <View
      style={[
        tw.flexRow,
        tw.border1,
        message ? tw.borderError : tw.borderNeutral,
        tw.rounded4,
        tw.minHeight48,
        tw.itemsCenter,
        tw.ph12,
      ]}
    >
      <View style={tw.flex1}>{children}</View>
    </View>
    {!!message && <Text style={tw.textError}>{message}</Text>}
  </View>
);
