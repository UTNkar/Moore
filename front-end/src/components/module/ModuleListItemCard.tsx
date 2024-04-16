import clsx from 'clsx';

import Link, { LinkProps } from '#root/components/Link';

export default function ModuleListItemCard({
  active,
  className: passedClassName,
  children,
  href,
  hasSubpaths,
  locale,
  ...otherProps
}: { active?: boolean } & React.HTMLAttributes<Element> &
  Partial<Pick<LinkProps, 'active' | 'href' | 'hasSubpaths' | 'locale'>>) {
  const className = clsx('module-item-list-card w-inline-block', active && 'active', passedClassName);

  if (href) {
    return (
      <Link {...otherProps} hasSubpaths={hasSubpaths} locale={locale} href={href} className={className}>
        {children}
      </Link>
    );
  } else {
    return (
      <div {...otherProps} className={className}>
        {children}
      </div>
    );
  }
}
