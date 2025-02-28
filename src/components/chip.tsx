import React from 'react';
import { Pressable, Text } from 'react-native';

import { layoutAnimation } from '../styles-animation';
import { tw } from '../tw';
import { EnterExitAnimatedView } from './enter-exit-animated-view';

export const Chip = (props: { text: string; onPress?: () => void }) => (
  <EnterExitAnimatedView layout={layoutAnimation.default}>
    <Pressable
      onPress={props.onPress}
      style={[
        tw.flexRow,
        tw.itemsCenter,
        tw.ph16,
        tw.pv6,
        tw.bgNeutralLower,
        tw.rounded16,
      ]}
    >
      <Text>{props.text}</Text>
    </Pressable>
  </EnterExitAnimatedView>
);
