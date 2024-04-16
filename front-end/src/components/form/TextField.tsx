import { forwardRef } from 'react';

import clsx from 'clsx';

import FormFieldWrapper from './FormFieldWrapper';

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ className, name, label, type = 'text', invalid, ...otherProps }, ref) => {
    return (
      <FormFieldWrapper {...otherProps} className={className}>
        <label htmlFor={name}>{label}</label>
        <input
          ref={ref}
          type={type}
          className={clsx('text-field w-input', invalid && 'invalid')}
          name={name}
        />
      </FormFieldWrapper>
    );
  },
);

export interface TextFieldProps extends React.HTMLAttributes<HTMLDivElement> {
  invalid?: boolean;
  label: React.ReactNode;
  name: string;
  type?: React.HTMLInputTypeAttribute;
}

export default TextField;
