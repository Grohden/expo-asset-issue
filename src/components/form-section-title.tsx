import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {tw} from '../tw';
import {BooleanController} from '../hooks/use-boolean-controller';

export const FormSectionTitle = ({
  title,
  openController,
}: {
  title: string;
  openController: BooleanController;
}) => (
  <TouchableOpacity
    style={[tw.flexRow, tw.gap16, tw.itemsCenter]}
    onPress={openController.toggle}>
    <View style={[tw.gap8, tw.flexRow, tw.itemsCenter]}>
      <Text>{openController.value ? '<' : '>'}</Text>
      <Text style={tw.flex1}>{title}</Text>
    </View>
  </TouchableOpacity>
);
