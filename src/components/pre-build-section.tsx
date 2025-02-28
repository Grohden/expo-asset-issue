import React from 'react';
import { FadeIn, FadeOut } from 'react-native-reanimated';

import { useBooleanController } from '../hooks/use-boolean-controller';
import { tw } from '../tw';
import { ChipField } from './chip-field';
import { EnterExitAnimatedView } from './enter-exit-animated-view';
import { FormSection } from './form-section';
import { FormSectionTitle } from './form-section-title';
import { SelectContainer } from './select-container';
import { TextField } from './text-field';

const SubView = () => (
  <EnterExitAnimatedView entering={FadeIn} exiting={FadeOut} style={tw.gap16}>
    <SelectContainer />
    <TextField />
    <ChipField />
    <SelectContainer />
    <TextField />
    <ChipField />
    <SelectContainer />
    <TextField />
    <ChipField />
  </EnterExitAnimatedView>
);
export const PreBuildSection = () => {
  const section = useBooleanController(false);

  return (
    <FormSection>
      <FormSectionTitle title="Dawg" openController={section} />
      {section.value && <SubView />}
    </FormSection>
  );
};
