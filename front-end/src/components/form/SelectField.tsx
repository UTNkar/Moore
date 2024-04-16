import { forwardRef } from 'react';

import FormFieldWrapper from './FormFieldWrapper';

const SelectField = forwardRef<HTMLSelectElement, SelectFieldProps>(
  ({ className, name, label, options, optional, invalid, nullOption, ...otherProps }, ref) => {
    return (
      <FormFieldWrapper {...otherProps}>
        <label htmlFor={name}>{label}</label>
        <select ref={ref} className="text-field w-input" name={name} id={name}>
          {optional && (
            <option value={nullOption} key={-1}>
              -
            </option>
          )}
          {options.map((option, i) => (
            <option value={option[1]} key={i}>
              {option[0]}
            </option>
          ))}
        </select>
      </FormFieldWrapper>
    );
  },
);

export interface SelectFieldProps extends React.HTMLAttributes<HTMLDivElement> {
  invalid?: boolean;
  label: React.ReactNode;
  name: string;
  nullOption?: string | undefined | null;
  optional?: boolean;
  options: [label: string, value: string][];
}

export default SelectField;
