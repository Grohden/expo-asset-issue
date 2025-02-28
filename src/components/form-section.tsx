import type {ReactNode} from 'react';
import React from 'react';

import {tw} from '../tw';
import {EnterExitAnimatedView} from './enter-exit-animated-view';
import {layoutAnimation} from '../styles-animation';

export const FormSection = ({children}: {children: ReactNode}) => (
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
    ]}>
    {children}
  </EnterExitAnimatedView>
);
