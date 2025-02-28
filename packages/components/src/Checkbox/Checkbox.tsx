import React from 'react';
import { useFocusRing } from '@react-aria/focus';
import { VisuallyHidden } from '@react-aria/visually-hidden';
import { useCheckbox } from '@react-aria/checkbox';
import { useToggleState } from '@react-stately/toggle';
import { ToggleProps } from '@react-types/checkbox';

import { ComponentProps } from '@marigold/types';
import { Exclamation } from '@marigold/icons';

import { CheckboxIcon, CheckboxIconProps } from './CheckboxIcon';
import { Box } from '../Box';
import { Label } from '../Label';
import { ValidationMessage } from '../ValidationMessage';

// Theme Extension
// ---------------
export interface CheckboxThemeExtension<Value> {
  checkbox?: {
    [key: string]: Value;
  };
}

// Checkbox Input
// ---------------
type CheckboxInputProps = CheckboxIconProps &
  ToggleProps &
  ComponentProps<'input'>;

const CheckboxInput: React.FC<CheckboxInputProps> = ({
  error,
  indeterminated = false,
  ...props
}) => {
  const state = useToggleState(props);
  const ref = React.useRef<HTMLInputElement>(null);
  const { inputProps } = useCheckbox(props, state, ref);
  const { focusProps } = useFocusRing();
  const { children, ...restProps } = props;

  return (
    <Box pr="xsmall">
      <VisuallyHidden>
        <input {...inputProps} {...focusProps} ref={ref} {...restProps} />
      </VisuallyHidden>
      <CheckboxIcon
        checked={props.checked}
        variant={props.variant}
        disabled={props.disabled}
        indeterminated={indeterminated}
        error={error}
      />
    </Box>
  );
};

// Checkbox
// ---------------
export interface CheckboxProps extends CheckboxInputProps {
  id: string;
  required?: boolean;
  labelVariant?: string;
  errorMessage?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  required,
  labelVariant = 'inline',
  errorMessage,
  ...props
}) => (
  <>
    <Box
      as={Label}
      __baseCSS={{
        ':hover': { cursor: props.disabled ? 'not-allowed' : 'pointer' },
      }}
      htmlFor={props.id}
      required={required}
      variant={`label.${labelVariant}`}
      color={props.disabled ? 'disabled' : 'text'}
    >
      <CheckboxInput error={props.error} {...props} />
      {props.children}
    </Box>
    {props.error && errorMessage && (
      <ValidationMessage>
        <Exclamation size={16} />
        {errorMessage}
      </ValidationMessage>
    )}
  </>
);
