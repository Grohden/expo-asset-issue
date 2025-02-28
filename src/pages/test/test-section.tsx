import React from 'react';
import { FadeIn, FadeOut } from 'react-native-reanimated';
import { useForm } from 'react-hook-form';

import { useBooleanController } from '../../hooks/use-boolean-controller';
import { tw } from '../../tw';
import { ChipField } from '../../components/chip-field';
import { EnterExitAnimatedView } from '../../components/enter-exit-animated-view';
import { FormSection } from '../../components/form-section';
import { FormSectionTitle } from '../../components/form-section-title';
import { SelectContainer } from '../../components/select-container';
import { TextField } from '../../components/text-field';
import { TestController } from './test-controller';

export const TestSection = () => {
  const section = useBooleanController(false);
  const form = useForm();

  return (
    <FormSection>
      <FormSectionTitle title="Dawg" openController={section} />
      {section.value && (
        <EnterExitAnimatedView
          entering={FadeIn}
          exiting={FadeOut}
          style={tw.gap16}
        >
          <TestController
            name="testOne"
            control={form.control}
            render={({ field }) => (
              <SelectContainer value={field.value} placeholder={field.name} />
            )}
          />
          <TestController
            name="testTwo"
            control={form.control}
            render={({ field }) => (
              <TextField
                value={field.value}
                onChangeText={field.onChange}
                placeholder={field.name}
              />
            )}
          />
          <TestController
            name="testThree"
            control={form.control}
            render={({ field }) => <ChipField placeholder={field.name} />}
          />
          <TestController
            name="testFour"
            control={form.control}
            render={({ field }) => (
              <SelectContainer value={field.value} placeholder={field.name} />
            )}
          />
          <TestController
            name="testFive"
            control={form.control}
            render={({ field }) => (
              <TextField
                value={field.value}
                onChangeText={field.onChange}
                placeholder={field.name}
              />
            )}
          />
          <TestController
            name="testSix"
            control={form.control}
            render={({ field }) => <ChipField placeholder={field.name} />}
          />
        </EnterExitAnimatedView>
      )}
    </FormSection>
  );
};
