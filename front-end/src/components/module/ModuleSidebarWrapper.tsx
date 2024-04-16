import clsx from 'clsx';

export default function ModuleSidebarWrapper({
  children,
  className,
  ...otherProps
}: JSX.IntrinsicElements['div']) {
  return (
    <div {...otherProps} className={clsx('sticky-content-sidebar module', className)}>
      {children}
    </div>
  );
}
