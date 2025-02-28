import React from 'react';
import { FadeIn, FadeOut } from 'react-native-reanimated';
import type { UseFormReturn } from 'react-hook-form';
import { Button, View } from 'react-native';

import {
  type BooleanController,
  useBooleanController,
} from '../../hooks/use-boolean-controller';
import { tw } from '../../tw';
import { ChipField } from '../../components/chip-field';
import { EnterExitAnimatedView } from '../../components/enter-exit-animated-view';
import { FormSection } from '../../components/form-section';
import { FormSectionTitle } from '../../components/form-section-title';
import { SelectContainer } from '../../components/select-container';
import { TextField } from '../../components/text-field';
import { TestController } from './test-controller';

const required = { required: 'This field is required' };

export const TestSection = ({
  openController,
  form,
}: {
  openController?: BooleanController;
  form: UseFormReturn<any>;
}) => {
  const section = useBooleanController(false, openController);

  form.formState.submitCount; // subscribe to submit count proxy
  const handleSubmit = form.handleSubmit(
    () => {},
    () => {},
  );

  return (
    <FormSection>
      <View style={tw.gap8}>
        <Button title="Trigger Validations" onPress={handleSubmit} />
        <FormSectionTitle title="Form Section" openController={section} />
      </View>
      {section.value && (
        <EnterExitAnimatedView
          entering={FadeIn}
          exiting={FadeOut}
          style={tw.gap16}
        >
          <TestController
            name="testOne"
            control={form.control}
            rules={required}
            render={({ field, fieldState }) => (
              <SelectContainer
                value={field.value}
                placeholder={field.name}
                message={fieldState.error?.message}
                onChange={field.onChange}
              />
            )}
          />
          <TestController
            name="testTwo"
            control={form.control}
            rules={required}
            render={({ field, fieldState }) => (
              <TextField
                value={field.value}
                onChangeText={field.onChange}
                placeholder={field.name}
                message={fieldState.error?.message}
              />
            )}
          />
          <TestController
            name="testThree"
            control={form.control}
            rules={required}
            render={({ field, fieldState }) => (
              <ChipField
                placeholder={field.name}
                message={fieldState.error?.message}
              />
            )}
          />
          <TestController
            name="testFour"
            control={form.control}
            rules={required}
            render={({ field, fieldState }) => (
              <SelectContainer
                value={field.value}
                placeholder={field.name}
                message={fieldState.error?.message}
                onChange={field.onChange}
              />
            )}
          />
          <TestController
            name="testFive"
            control={form.control}
            rules={required}
            render={({ field, fieldState }) => (
              <TextField
                value={field.value}
                onChangeText={field.onChange}
                placeholder={field.name}
                message={fieldState.error?.message}
              />
            )}
          />
          <TestController
            name="testSix"
            control={form.control}
            rules={required}
            render={({ field, fieldState }) => (
              <ChipField
                placeholder={field.name}
                message={fieldState.error?.message}
              />
            )}
          />
        </EnterExitAnimatedView>
      )}
    </FormSection>
  );
};
