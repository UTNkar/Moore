import clsx from 'clsx';

export default function ModuleBodyWrapper({
  children,
  className,
  ...otherProps
}: JSX.IntrinsicElements['div']) {
  return (
    <div {...otherProps} className={clsx('sticky-content-body module', className)}>
      {children}
    </div>
  );
}
