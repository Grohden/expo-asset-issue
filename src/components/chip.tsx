import {Pressable, Text} from 'react-native';
import React from 'react';

import {tw} from '../tw';
import {EnterExitAnimatedView} from './enter-exit-animated-view';
import {layoutAnimation} from '../styles-animation';

export const Chip = (props: {onPress?: () => void}) => (
  <EnterExitAnimatedView layout={layoutAnimation.default}>
    <Pressable
      onPress={props.onPress}
      style={[
        tw.flexRow,
        tw.itemsCenter,
        tw.ph16,
        tw.pv6,
        tw.bgNeutralHigher,
        tw.rounded16,
      ]}>
      <Text>Chip</Text>
    </Pressable>
  </EnterExitAnimatedView>
);
