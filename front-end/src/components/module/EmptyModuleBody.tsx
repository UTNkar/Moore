import clsx from 'clsx';

import classes from './EmptyModuleBody.module.css';

export default function EmptyModuleBody({
  children,
  className,
  message,
  extraSad,
  ...otherProps
}: JSX.IntrinsicElements['div'] & { extraSad?: boolean; message?: React.ReactNode }) {
  return (
    <div {...otherProps} className={clsx(classes.root, className)}>
      <span className={'material-symbols-sharp'}>
        {extraSad ? 'sentiment_very_dissatisfied' : 'sentiment_dissatisfied'}
      </span>

      {message && <p>{message}</p>}

      {children}
    </div>
  );
}
