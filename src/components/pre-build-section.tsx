import React from 'react';
import {FormSectionTitle} from './form-section-title';
import {tw} from '../tw';
import {FormSection} from './form-section';
import {useBooleanController} from '../hooks/use-boolean-controller';
import {TextField} from './text-field';
import {SelectContainer} from './select-container';
import {ChipField} from './chip-field';
import {EnterExitAnimatedView} from './enter-exit-animated-view';
import {FadeIn, FadeOut} from 'react-native-reanimated';

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
