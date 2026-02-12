import { LinearTransition } from 'react-native-reanimated';

export const layoutAnimation = {
  default: LinearTransition.duration(200).damping(1000).stiffness(200),
  spring: LinearTransition.springify().damping(15).stiffness(70),
};
