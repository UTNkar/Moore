import clsx from 'clsx';

export default function FormFieldWrapper({
  className,
  invalid,
  ...otherProps
}: JSX.IntrinsicElements['div'] & { invalid?: boolean }) {
  return (
    <div
      {...otherProps}
      className={clsx('w-layout-vflex form-field-wrapper', invalid && 'invalid', className)}
    />
  );
}
