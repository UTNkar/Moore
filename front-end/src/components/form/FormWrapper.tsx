import clsx from 'clsx';

export default function FormWrapper({ className, ...otherProps }: React.FormHTMLAttributes<HTMLFormElement>) {
  return <form {...otherProps} className={clsx('w-form', className)} />;
}
