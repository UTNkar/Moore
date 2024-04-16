import { Section } from '#root/types';

import { studyProgramMocks } from './study-program-mocks';

export const sectionMocks = {
  dv: {
    abbreviation: 'DV',
    id: 1,
    name: 'DV-sektionen',
    studies: [studyProgramMocks.datavetenskap],
  } as Section,

  e: {
    abbreviation: 'E',
    id: 4,
    name: 'E-sektionen',
    studies: [studyProgramMocks.elektroteknik],
  } as Section,

  h: {
    abbreviation: 'H',
    id: 2,
    name: 'H-sektionen',
    studies: [studyProgramMocks.maskinteknik],
  } as Section,

  i: {
    abbreviation: 'I',
    id: 5,
    name: 'I-sektionen',
    studies: [studyProgramMocks.indek],
  } as Section,

  it: {
    abbreviation: 'IT',
    id: 1,
    name: 'IT-sektionen',
    studies: [studyProgramMocks.it],
  } as Section,

  k: {
    abbreviation: 'KEMI',
    id: 3,
    name: 'K-sektionen',
    studies: [studyProgramMocks.kemiteknik],
  } as Section,
};

// eslint-disable-next-line sort-exports/sort-exports
export const sectionListMocks = (Object.keys(sectionMocks) as (keyof typeof sectionMocks)[])
  .sort((a, b) => a.localeCompare(b))
  .map((key) => sectionMocks[key]);
