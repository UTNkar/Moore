import { StudyProgram, UnicoreUserProgram } from '#root/types';

export const studyProgramMocks = {
  datavetenskap: {
    degree: 'Kandidatprogrammet i datavetenskap',
    id: 1,
    name: 'Datavetenskap',
  } as StudyProgram,

  elektroteknik: {
    degree: 'Civilingenjörsprogrammet i elektroteknik',
    id: 4,
    name: 'Elektroteknik',
  } as StudyProgram,

  indek: {
    degree: 'Civilingenjörsprogrammet i industriell ekonomi',
    id: 5,
    name: 'Industriell ekonomi',
  } as StudyProgram,

  it: {
    degree: 'Civilingenjörsprogrammet i informationsteknologi',
    id: 1,
    name: 'Informationsteknologi',
  } as StudyProgram,

  kemiteknik: {
    degree: 'Civilingenjörsprogrammet i kemiteknik',
    id: 3,
    name: 'Kemiteknik',
  } as StudyProgram,

  maskinteknik: {
    degree: 'Högskoleingenjörsprogrammet i maskinteknik',
    id: 2,
    name: 'Maskinteknik',
  } as StudyProgram,
};

export const unicoreUserProgramMocks: Record<keyof typeof studyProgramMocks, UnicoreUserProgram> = {
  datavetenskap: {
    Benamning: studyProgramMocks.datavetenskap.name,
    Handlid: 101,
    Regdatum: '2018-08-30',
    Sokordid: 1,
  },

  elektroteknik: {
    Benamning: studyProgramMocks.elektroteknik.name,
    Handlid: 104,
    Regdatum: '2016-08-30',
    Sokordid: 4,
  },

  indek: {
    Benamning: studyProgramMocks.indek.name,
    Handlid: 105,
    Regdatum: '2018-01-15',
    Sokordid: 5,
  },

  it: {
    Benamning: studyProgramMocks.it.name,
    Handlid: 101,
    Regdatum: '2018-08-29',
    Sokordid: 1,
  },

  kemiteknik: {
    Benamning: studyProgramMocks.kemiteknik.name,
    Handlid: 103,
    Regdatum: '2019-08-30',
    Sokordid: 3,
  },

  maskinteknik: {
    Benamning: studyProgramMocks.maskinteknik.name,
    Handlid: 102,
    Regdatum: '2017-08-30',
    Sokordid: 2,
  },
};
