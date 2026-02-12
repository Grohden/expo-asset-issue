import type { ComponentProps } from 'react';
import { View } from 'react-native';
import Animated, { useReducedMotion } from 'react-native-reanimated';

type AnimatedProps = Pick<
  ComponentProps<typeof Animated.View>,
  'layout' | 'entering' | 'exiting'
>;

type ViewProps = Pick<
  ComponentProps<typeof View>,
  // BE CAREFUL: this is not meant to be used with animated styles
  //  it was not tested with them, and will probably break when
  //  passed to normal view (when reduced motion is disabled)!
  'style' | 'children'
>;

export const EnterExitAnimatedView = ({
  layout,
  entering,
  exiting,
  ...props
}: AnimatedProps & ViewProps) => {
  // https://github.com/software-mansion/react-native-reanimated/issues/6987
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return <View {...props} />;
  }

  return (
    <Animated.View
      layout={layout}
      entering={entering}
      exiting={exiting}
      {...props}
    />
  );
};
