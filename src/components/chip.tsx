import React from 'react';
import { Pressable, Text } from 'react-native';
import FontAwesome6 from '@react-native-vector-icons/fontawesome6';

import { layoutAnimation } from '../styles-animation';
import { tw } from '../tw';
import { EnterExitAnimatedView } from './enter-exit-animated-view';

export const Chip = (props: { text: string; onPress?: () => void }) => (
  <EnterExitAnimatedView layout={layoutAnimation.default}>
    <Pressable
      style={[
        tw.flexRow,
        tw.itemsCenter,
        tw.justifyCenter,
        tw.ph12,
        tw.pv6,
        tw.bgNeutralLower,
        tw.rounded16,
        tw.gap8,
      ]}
      onPress={props.onPress}
    >
      <Text style={tw.textNeutralHigher}>{props.text}</Text>
      <FontAwesome6
        name="circle-xmark"
        iconStyle="regular"
        size={tw.font14.fontSize}
        color={tw.textNeutralHigher.color}
      />
    </Pressable>
  </EnterExitAnimatedView>
);
