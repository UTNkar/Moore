import { useMemo } from 'react';

import { useIntl } from 'react-intl';

import { usePageContext } from '#root/utils/page';

import { Locale } from './locales';
import translate from './translate';

export default function useLocalizedText(
  text: string,
  locale: Locale = usePageContext().locale,
  key?: string,
): string {
  const intl = useIntl();
  const localizedText = useMemo(() => translate(text, intl, key), [text, intl, key]);

  return localizedText;
}
