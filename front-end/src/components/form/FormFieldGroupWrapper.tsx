import clsx from 'clsx';

export default function FormFieldGroupWrapper({ className, ...otherProps }: JSX.IntrinsicElements['div']) {
  return <div {...otherProps} className={clsx('w-layout-vflex form-field-group', className)} />;
}
