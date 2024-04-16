import { forwardRef } from 'react';

import { FormCheckboxInput, FormCheckboxWrapper } from '#root/devlink/_Builtin';

const CheckboxField = forwardRef<HTMLInputElement, CheckboxFieldProps>(
  ({ className, name, label, invalid, ...otherProps }, ref) => {
    return (
      <FormCheckboxWrapper>
        <FormCheckboxInput {...otherProps} name={name} id={name} />
        <span {...{ for: name }}>{label}</span>
      </FormCheckboxWrapper>
    );
  },
);

export interface CheckboxFieldProps extends React.HTMLAttributes<HTMLInputElement> {
  invalid?: boolean;
  label: React.ReactNode;
  name: string;
}

export default CheckboxField;
