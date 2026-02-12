import type { ReactNode } from 'react';
import React from 'react';

import { layoutAnimation } from '../../../styles-animation';
import { tw } from '../../../tw';
import { EnterExitAnimatedView } from '../../app/components/enter-exit-animated-view';

export const FormSectionContainer = ({ children }: { children: ReactNode }) => (
  <EnterExitAnimatedView
    layout={layoutAnimation.default}
    style={[
      tw.bgWhite,
      tw.pv24,
      tw.ph16,
      tw.border1,
      tw.borderNeutral,
      tw.rounded8,
      tw.gap32,
    ]}
  >
    {children}
  </EnterExitAnimatedView>
);
