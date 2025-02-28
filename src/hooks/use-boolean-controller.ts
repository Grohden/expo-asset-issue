import { type Dispatch, type SetStateAction, useMemo, useState } from 'react';

export type BooleanController = {
  value: boolean;
  setValue: Dispatch<SetStateAction<boolean>>;
  toggle: () => void;
};

export const useBooleanController = (
  initialValue: boolean,
  delegate?: BooleanController,
) => {
  const [value, setValue] = useState(initialValue);

  return useMemo((): BooleanController => {
    if (delegate) {
      return delegate;
    }

    return { value, setValue, toggle: () => setValue(!value) };
  }, [delegate, value]);
};
