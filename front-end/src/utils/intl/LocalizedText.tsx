import { Fragment, createElement } from 'react';
import { PageContext } from 'vike/types';

import clsx from 'clsx';

import { Locale } from './locales';
import useLocalizedText from './useLocalizedText';

export default function LocalizedText({
  children,
  pageContext,
  locale,
  id,
  withoutSpacing,
  className: passedClassName,
  ...otherProps
}: LocalizedTextProps) {
  const text = useLocalizedText(children, locale || pageContext?.locale, id);

  const className = clsx(withoutSpacing && 'without-spacing', passedClassName);

  if (Object.keys(otherProps).length || className) {
    return createElement(otherProps.element || 'span', { ...otherProps, className }, text);
  }

  return createElement(Fragment, {}, text);
}

export interface LocalizedTextBaseProps extends Pick<React.HTMLAttributes<HTMLElement>, 'className'> {
  /** The text to have localized. */
  children?: string;
  /**
   * If specified, the text will be contained inside an element of this type. If any element props are specified,
   * such as `className`, an element will be rendered regardless and default to `<span>` if this prop is undefined.
   */
  element?: 'p' | 'span' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'blockquote' | 'li' | 'cite';
  /** The identifier of the translation, which defaults to the provided {@link children}. */
  id?: string;
  /** Overrides the locale of the page context. */
  locale?: Locale;
  /** Page context to infer a locale from. */
  pageContext?: PageContext;
  /** Whether margins should be removed. */
  withoutSpacing?: boolean;
}

export type LocalizedTextProps = LocalizedTextWithIDProps | LocalizedTextWithChildrenProps;

export interface LocalizedTextWithChildrenProps extends LocalizedTextBaseProps {
  children: string;
  id?: string;
}

export interface LocalizedTextWithIDProps extends LocalizedTextBaseProps {
  children?: string;
  id: string;
}
