import { Controller } from 'react-hook-form';
import { ScrollIntoView } from 'react-native-scroll-into-view';
import { EnterExitAnimatedView } from '@/src/domains/app/components/enter-exit-animated-view';
import { layoutAnimation } from '@/src/domains/app/styles-animation';
import { tw } from '@/src/domains/app/tw';

const options = { align: 'top' } as const;

export const FormController: typeof Controller = (props) => (
  <EnterExitAnimatedView layout={layoutAnimation.default} style={tw.flex1}>
    <Controller
      {...props}
      render={(renderProps) => (
        <ScrollIntoView
          scrollIntoViewOptions={options}
          enabled={!!renderProps.fieldState.error?.message}
          scrollIntoViewKey={renderProps.formState.submitCount}
        >
          {props.render(renderProps)}
        </ScrollIntoView>
      )}
    />
  </EnterExitAnimatedView>
);
