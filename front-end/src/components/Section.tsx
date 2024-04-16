import clsx from 'clsx';

import { Section as WebflowSection } from '#root/devlink/_Builtin/Basic';
import { PropsWithChildren } from '#root/utils/types';

export default function Section(
  props: PropsWithChildren<{ emphasised?: boolean; subdued?: boolean } & JSX.IntrinsicElements['div']>,
) {
  const { children, emphasised, subdued, className, ...otherProps } = props;

  return (
    <WebflowSection
      {...otherProps}
      tag="section"
      className={clsx('section', { emphasised: emphasised, subdued: subdued }, className)}
    >
      {children}
    </WebflowSection>
  );
}
