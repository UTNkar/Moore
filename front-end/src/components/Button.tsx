import clsx from 'clsx';

import Link, { LinkProps } from './Link';

export default function Button({
  large,
  className: passedClassName,
  children,
  locale,
  href,
  hasSubpaths,
  keepScrollPosition,
  inputType,
  secondary,
  left,
  right,
  ...otherProps
}: React.HTMLAttributes<HTMLElement> & {
  inputType?: 'submit';
  large?: boolean;
  left?: boolean;
  right?: boolean;
  secondary?: boolean;
} & Partial<Pick<LinkProps, 'href' | 'hasSubpaths' | 'keepScrollPosition' | 'locale'>>) {
  const className = clsx(
    'w-button',
    {
      'large-button': large,
      left,
      'medium-button': !large,
      right,
      secondary,
    },
    passedClassName,
  );

  if (inputType === 'submit') {
    return <input type="submit" className={className} value={children as string} />;
  } else if (href) {
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    return <Link {...otherProps} {...{ className, hasSubpaths, href, keepScrollPosition, locale }} />;
  } else {
    return <button type="button" className={className} {...otherProps} />;
  }
}
