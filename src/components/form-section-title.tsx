import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import type { BooleanController } from '../hooks/use-boolean-controller';
import { tw } from '../tw';

export const FormSectionTitle = ({
  title,
  openController,
}: {
  title: string;
  openController: BooleanController;
}) => (
  <TouchableOpacity
    style={[tw.flexRow, tw.gap16, tw.itemsCenter]}
    onPress={openController.toggle}
  >
    <View style={[tw.gap8, tw.flexRow, tw.itemsCenter]}>
      <Text style={[tw.flex1, tw.font24]}>
        {openController.value ? '⌃' : '>'} {title}
      </Text>
    </View>
  </TouchableOpacity>
);
