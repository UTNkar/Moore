import clsx from 'clsx';

export default function ModuleContentDivider({
  className,
  ...otherProps
}: Omit<JSX.IntrinsicElements['div'], 'children'>) {
  return <div {...otherProps} className={clsx('divider module-content', className)} />;
}
