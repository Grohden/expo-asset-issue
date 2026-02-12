import React from 'react';
import type { UseFormReturn } from 'react-hook-form';
import { Button, View } from 'react-native';
import { FadeIn, FadeOut } from 'react-native-reanimated';

import { tw } from '../../../tw';
import { EnterExitAnimatedView } from '../../app/components/enter-exit-animated-view';
import {
  type BooleanController,
  useBooleanController,
} from '../hooks/use-boolean-controller';
import { ChipField } from './chip-field';
import { FormController } from './form-controller';
import { FormSectionContainer } from './form-section-container';
import { FormSectionTitle } from './form-section-title';
import { SelectContainer } from './select-container';
import { TextField } from './text-field';

const required = { required: 'This field is required' };

export const FormSection = ({
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
    <FormSectionContainer>
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
          <FormController
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
          <FormController
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
          <FormController
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
          <FormController
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
          <FormController
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
          <FormController
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
    </FormSectionContainer>
  );
};
