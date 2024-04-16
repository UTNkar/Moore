import clsx from 'clsx';

export default function ButtonGroupWrapper({
  large,
  className,
  children,
  ...otherProps
}: JSX.IntrinsicElements['div'] & { large?: boolean }) {
  return (
    <div
      {...otherProps}
      className={clsx(
        'w-layout-vflex',
        {
          'large-button-group-wrapper': large,
          'medium-button-group-wrapper': !large,
        },
        className,
      )}
    >
      {large ? <div className="w-layout-vflex button-group-wrapper">{children}</div> : children}
    </div>
  );
}
