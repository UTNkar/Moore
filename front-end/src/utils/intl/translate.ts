import { IntlShape } from 'react-intl';

import translations from '#root/translations';

import { defaultLocale, defaultTranslationLocale } from './locales';

export default function translate(text: string, intl: IntlShape, key: string = text): string {
  if (intl.locale === defaultLocale) {
    return text || key;
  }

  const textTranslations = translations[key];

  if (!textTranslations) {
    console.error('No translation(s) of "' + key + '" found.');

    return text || key;
  } else if (
    (typeof textTranslations === 'string' && intl.locale !== defaultTranslationLocale) ||
    !textTranslations[intl.locale]
  ) {
    console.error('No translation of "' + key + '" and locale "' + intl.locale + '" found.');

    return text || key;
  }

  if (typeof textTranslations === 'string') {
    return textTranslations;
  } else {
    return textTranslations[intl.locale];
  }
}
