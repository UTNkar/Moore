import { Position } from '#root/types';
import { addFromNow } from '#root/utils/intl';

import { roleMocks } from './role-mocks';

/* eslint-disable sort-exports/sort-exports */

export const positionMocks: Record<keyof typeof roleMocks, Position> = {
  eventkoordinator: {
    appointments: 1,
    comment:
      'Särskilt för denna mandatperiod ska innehavaren fokusera på att förbättra samarbetet med externa partners.',
    id: 4,
    recruitment_end: addFromNow({ days: 14, hours: 0 }),
    recruitment_start: addFromNow({ days: -30, hours: 0 }),
    role: roleMocks.eventkoordinator,
    term_from: addFromNow({ days: 14, hours: 0 }),
    term_to: addFromNow({ days: 14, months: 12 }),
  },

  styrelseledamot: {
    appointments: 1,
    comment:
      'Särskilt för denna mandatperiod ska styrelseledamoten arbeta närmare med studentorganisationer.',
    id: 3,
    recruitment_end: addFromNow({ days: 14, hours: 0 }),
    recruitment_start: addFromNow({ days: -30, hours: 0 }),
    role: roleMocks.styrelseledamot,
    term_from: addFromNow({ days: 14 }),
    term_to: addFromNow({ days: 14, months: 12 }),
  },

  systemutvecklare: {
    appointments: 1,
    comment: 'Särskilt för denna mandatperiod ska fokus ligga på att förbättra säkerheten i våra IT-system.',
    id: 1,
    recruitment_end: addFromNow({ days: 14, hours: 0 }),
    recruitment_start: addFromNow({ days: -30, hours: 0 }),
    role: roleMocks.systemutvecklare,
    term_from: addFromNow({ days: 14 }),
    term_to: addFromNow({ days: 14, months: 12 }),
  },

  utbildningsansvarig: {
    appointments: 1,
    comment:
      'Särskilt för denna mandatperiod ska innehavaren initiera nya projekt för att förbättra studiemiljön.',
    id: 5,
    recruitment_end: addFromNow({ days: 14, hours: 0 }),
    recruitment_start: addFromNow({ days: -30, hours: 0 }),
    role: roleMocks.utbildningsansvarig,
    term_from: addFromNow({ days: 14 }),
    term_to: addFromNow({ days: 14, months: 12 }),
  },

  viceProjektledare: {
    appointments: 1,
    comment:
      'Särskilt för denna mandatperiod ska vice-projektledaren fokusera på att öka engagemanget hos nya medlemmar.',
    id: 2,
    recruitment_end: addFromNow({ days: 14, hours: 0 }),
    recruitment_start: addFromNow({ days: -30, hours: 0 }),
    role: roleMocks.viceProjektledare,
    term_from: addFromNow({ days: 14 }),
    term_to: addFromNow({ days: 14, months: 12 }),
  },
};

export const positionListMock: Position[] = [positionMocks.eventkoordinator, positionMocks.viceProjektledare];
