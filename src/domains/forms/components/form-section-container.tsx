import type { ReactNode } from 'react';
import { EnterExitAnimatedView } from '@/src/domains/app/components/enter-exit-animated-view';
import { layoutAnimation } from '@/src/domains/app/styles-animation';
import { tw } from '@/src/domains/app/tw';

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
