import clsx from 'clsx';

import { Container as WebflowContainer } from '#root/devlink/_Builtin';
import { PropsWithChildren } from '#root/utils/types';

export default function Container(props: PropsWithChildren<JSX.IntrinsicElements['div']>) {
  const { children, className, ...otherProps } = props;

  return (
    <WebflowContainer {...otherProps} tag="div" className={clsx('container', className)}>
      {children}
    </WebflowContainer>
  );
}
