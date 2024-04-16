import { Locale, defaultLocale } from '#root/utils/intl';
import { isWithinIframe, usePageContext } from '#root/utils/page';

export default function Link({ locale, href, keepScrollPosition, hasSubpaths, active, ...props }: LinkProps) {
  const pageContext = usePageContext();
  const withinIframe = isWithinIframe(pageContext);

  const className = [
    props.className,
    (typeof active === 'boolean' ? active : isLinkActive(pageContext.urlPathname, href, hasSubpaths)) &&
      'active',
  ]
    .filter(Boolean)
    .join(' ');

  locale = locale || pageContext.locale;

  if (href && href.charAt(0) !== '#' && locale !== defaultLocale) {
    href = '/' + locale + href;
  }

  if (!withinIframe && !href.includes('#')) {
    href += '#module';
  }

  /* eslint-disable jsx-a11y/anchor-has-content */

  return (
    <a
      {...props}
      href={href}
      className={className}
      {...(keepScrollPosition ? { 'keep-scroll-position': true } : {})}
    />
  );
}

export function isLinkActive(pathname: string, href: string, hasSubpaths: boolean = false): boolean {
  return !hasSubpaths || href === '/' ? pathname === href : pathname.startsWith(href);
}

export type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  active?: boolean;
  hasSubpaths?: boolean;
  keepScrollPosition?: boolean;
  locale?: Locale;
};
