import {
  ParseOptions,
  formatDate as dateFnsFormatDate,
  formatDistanceToNow,
  formatRelative,
  parse,
} from 'date-fns';
import { Locale as DateFnsLocale, enUS, sv } from 'date-fns/locale';

import { usePageContext } from '#root/utils/page';
import { Falsy } from '#root/utils/types';

import { Locale } from './locales';

export const dateFormats = {
  long: 'EEEE d MMMM yyyy',
  longWithoutYear: 'EEEE d MMMM',
  medium: 'd MMMM',
  short: 'd/mm',
};

export function formatDate<DateType extends Date = Date>(
  date: DateArg<DateType>,
  locale: Locale,
  formatStr: string = dateFormats.long,
  referenceDate: DateType | number = new Date() as DateType,
): string | undefined {
  const dateFnsLocale = getDateFnsLocale(locale);
  const parsedDate = parseDate(date, undefined, referenceDate, { locale: dateFnsLocale });

  return parsedDate
    ? dateFnsFormatDate(parsedDate.toISOString(), formatStr, { locale: dateFnsLocale, weekStartsOn: 1 })
    : undefined;
}

export function formatRelativeDate<DateType extends Date = Date>(
  date: DateArg<DateType>,
  locale: Locale,
  referenceDate: DateType | number = new Date() as DateType,
): string | undefined {
  const dateFnsLocale = getDateFnsLocale(locale);
  const parsedDate = parseDate(date, undefined, referenceDate, { locale: dateFnsLocale });

  return parsedDate
    ? formatDistanceToNow(parsedDate.toISOString(), {
        addSuffix: true,
        locale: dateFnsLocale,
      })
    : undefined;

  return parsedDate
    ? formatRelative(parsedDate, referenceDate, {
        locale: dateFnsLocale,
        weekStartsOn: 1,
      })
    : undefined;
}

export function getDateFnsLocale(locale: Locale): DateFnsLocale {
  switch (locale) {
    case 'en':
      return enUS;
    default:
      return sv;
  }
}

export function parseDate<DateType extends Date = Date>(
  date: DateArg<DateType>,
  formatStr: string = 'yyyy-mm-dd',
  referenceDate: DateType | number = Date.now(),
  options?: ParseOptions,
): DateType | undefined {
  if (!date) {
    return undefined;
  }

  let parsedDate: DateType | undefined;

  try {
    if (typeof date === 'string' || typeof date === 'number') {
      parsedDate = new Date(date) as DateType;

      if (!isNaN(parsedDate.valueOf())) {
        return parsedDate;
      }
    } else if (date instanceof Date && !isNaN(parsedDate.valueOf())) {
      return date;
    }
  } catch (_) {
    //
  }

  parsedDate = parse(date as string, formatStr, referenceDate, { weekStartsOn: 1, ...options });

  return parsedDate && (!(parsedDate instanceof Date) || !isNaN(parsedDate.valueOf()))
    ? parsedDate
    : undefined;
}

export function useDateFnsLocale(locale: Locale = usePageContext().locale): DateFnsLocale {
  return getDateFnsLocale(locale);
}

export function useFormattedDate<DateType extends Date = Date>(
  date: DateArg<DateType>,
  formatStr?: string,
  referenceDate: DateType | number = Date.now(),
  locale: Locale = usePageContext().locale,
): string | undefined {
  return formatDate(date, locale, formatStr, referenceDate);
}

export function useFormattedRelativeDate<DateType extends Date = Date>(
  date: DateArg<DateType>,
  referenceDate: DateType | number = Date.now(),
  locale: Locale = usePageContext().locale,
): string | undefined {
  return formatRelativeDate(date, locale, referenceDate);
}

export type DateArg<DateType extends Date = Date> = string | DateType | Falsy;
