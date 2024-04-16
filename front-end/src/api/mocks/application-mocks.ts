import { PositionApplication, PositionApplicationReference } from '#root/types';

import { memberMocks } from './member-mocks';
import { positionMocks } from './position-mocks';
import { roleMocks } from './role-mocks';

/* eslint-disable sort-exports/sort-exports */

export const positionApplicationReferenceMocks: Record<
  keyof typeof roleMocks,
  PositionApplicationReference[]
> = {
  eventkoordinator: [
    {
      application_id: 4,
      comment: 'En unik förmåga att skapa minnesvärda evenemang och hantera logistik.',
      email: 'referens6@example.com',
      id: 6,
      name: 'Frida Fredriksson',
      position: 'Event Manager',
    },
  ],

  styrelseledamot: [
    {
      application_id: 3,
      comment: 'Visat exceptionellt engagemang och förståelse för studentorganisationens behov.',
      email: 'referens4@example.com',
      id: 4,
      name: 'Diana Danielsson',
      position: 'Ordförande',
    },
    {
      application_id: 3,
      comment: 'Pålitlig och kunnig ledare som alltid sätter teamets behov först.',
      email: 'referens5@example.com',
      id: 5,
      name: 'Erik Eriksson',
      position: 'Kassör',
    },
  ],

  systemutvecklare: [
    {
      application_id: 1,
      comment:
        'Visat exceptionell skicklighet inom systemutveckling och har varit en viktig del av vårt team.',
      email: 'referens1@example.com',
      id: 1,
      name: 'Anna Andersson',
      position: 'Senior Systemutvecklare',
    },
    {
      application_id: 1,
      comment: 'En snabb lärande utvecklare med ett öga för detaljer. Mycket rekommenderad.',
      email: 'referens2@example.com',
      id: 2,
      name: 'Berit Beritsson',
      position: 'Projektledare',
    },
  ],

  utbildningsansvarig: [
    {
      application_id: 5,
      comment: 'Visat stor kunskap och engagemang i utbildningsfrågor. Hans insatser har varit ovärderliga.',
      email: 'referens7@example.com',
      id: 7,
      name: 'Gunnar Gustafsson',
      position: 'Utbildningsansvarig',
    },
  ],

  viceProjektledare: [
    {
      application_id: 2,
      comment: 'En fantastisk förmåga att leda projekt och inspirera teamet till att nå sina mål.',
      email: 'referens3@example.com',
      id: 3,
      name: 'Carl Carlsson',
      position: 'Vice VD',
    },
  ],
};

export const positionApplicationMocks: Record<
  keyof typeof memberMocks,
  Partial<Record<keyof typeof roleMocks, PositionApplication>>
> = {
  annaLindberg: {
    styrelseledamot: {
      cover_letter: `Hej,\n\nAtt engagera mig i studentlivet har alltid varit en prioritet för mig. Min erfarenhet som ledare i olika studentorganisationer har gett mig en djup förståelse för vikten av samarbete, öppen kommunikation och hårt arbete. Jag är särskilt intresserad av att arbeta för att göra vår studentorganisation mer inkluderande och tillgänglig för alla studenter. Jag ser fram emot möjligheten att bidra med mina erfarenheter och passion till styrelsen.\n\nBästa hälsningar,\nAnna Lindberg`,
      gdpr: true,
      position: positionMocks.styrelseledamot,
      references: positionApplicationReferenceMocks.styrelseledamot,
      rejection_date: undefined,
      status: 'submitted',
    },
  },

  erikJohansson: {
    viceProjektledare: {
      cover_letter: `Sehr geehrtes Rekrutierungsteam,\n\nAls eine Person mit einer tiefen Leidenschaft für das Management und der Organisation von Events, habe ich eine starke Fähigkeit, Projekte von der Konzeption bis zur Vollendung zu führen. Meine Erfahrung in der Zusammenarbeit mit Teams und der Koordination mit verschiedenen Abteilungen hat es mir ermöglicht, effektive Kommunikationsstrategien zu entwickeln und Projekte rechtzeitig und innerhalb des Budgets abzuschließen. Ich freue mich auf die Möglichkeit, meine Fähigkeiten in einer dynamischen Umgebung einzusetzen.\n\nMit freundlichen Grüßen,\nErik Johansson`,
      gdpr: true,
      position: positionMocks.viceProjektledare,
      references: positionApplicationReferenceMocks.viceProjektledare,
      rejection_date: undefined,
      status: 'submitted',
    },
  },

  lisaSvensson: {
    eventkoordinator: {
      cover_letter: `Hej!\n\nAtt skapa oförglömliga evenemang som förenar människor har alltid varit min passion. Min erfarenhet inom eventplanering sträcker sig från små sammankomster till stora galor. Jag har en stark känsla för detaljer och kan hantera flera projekt samtidigt effektivt. Jag är ivrig att använda min kreativitet och organisatoriska färdigheter för att bidra till att göra era evenemang till en stor framgång.\n\nVänligen,\nLisa Svensson`,
      gdpr: true,
      position: positionMocks.eventkoordinator,
      references: positionApplicationReferenceMocks.eventkoordinator,
      rejection_date: undefined,
      status: 'submitted',
    },
  },

  lukasMuller: {
    utbildningsansvarig: {
      cover_letter: `Liebes Team,\n\nAls jemand, der in Deutschland studiert hat und ein tiefes Interesse an Bildungsfragen hat, bin ich begeistert von der Möglichkeit, als Utbildningsansvarig zu arbeiten. Ich habe Erfahrung in der Arbeit mit unterschiedlichen Bildungssystemen und bin besonders interessiert an der Entwicklung von Strategien, die den Zugang zur Bildung verbessern. Ich bin überzeugt, dass meine internationalen Erfahrungen und mein Engagement für Bildung mir ermöglichen werden, einen wertvollen Beitrag zu leisten.\n\nMit besten Grüßen,\nLukas Müller`,
      gdpr: true,
      position: positionMocks.utbildningsansvarig,
      references: positionApplicationReferenceMocks.utbildningsansvarig,
      rejection_date: undefined,
      status: 'submitted',
    },
  },

  saraOlsson: {
    systemutvecklare: {
      cover_letter: `Kära rekryteringsteam,\n\nJag har alltid haft en passion för teknik och problemlösning. Under min tid på universitetet har jag utvecklat starka färdigheter inom programmering och systemdesign. Jag är särskilt intresserad av att arbeta med att förbättra användarupplevelsen och effektivisera processer. Jag tror starkt på att kontinuerligt lära mig och anpassa mig till nya utmaningar, vilket gör mig till en värdefull tillgång för ert team.\n\nMed vänliga hälsningar,\nSara Olsson`,
      gdpr: true,
      position: positionMocks.systemutvecklare,
      references: positionApplicationReferenceMocks.systemutvecklare,
      rejection_date: undefined,
      status: 'submitted',
    },
  },
};
