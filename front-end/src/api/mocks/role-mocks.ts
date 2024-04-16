import { Role } from '#root/types';

import { teamMocks } from './team-mocks';

export const roleMocks = {
  eventkoordinator: {
    archived: false,
    contact_email: 'eventkoordinator@utn.se',
    description:
      '<p>Eventkoordinatorn spelar en <b>central roll</b> i planeringen och genomförandet av evenemang. Arbetet innebär tätt samarbete med andra team och externa partners för att skapa oförglömliga upplevelser.</p><p>Mer information finns på vår <a href="https://utn.se">hemsida</a>.</p>',
    id: 4,
    name: 'Eventkoordinator',
    role_type: 'group_leader',
    teams: [teamMocks.eventgruppen],
  } as Role,

  styrelseledamot: {
    archived: false,
    contact_email: 'styrelseledamot@utn.se',
    description:
      '<p>Att vara <i>styrelseledamot</i> innebär att fatta strategiska beslut för hela kårorganisationen. Det är en position som kräver ansvar, engagemang och en vilja att bidra till studentkårens framtid.</p><p>Engagemang inom kåren öppnar upp för många <b>utvecklande möjligheter</b>.</p>',
    id: 3,
    name: 'Styrelseledamot',
    role_type: 'presidium',
    teams: [teamMocks.presidiet],
  } as Role,

  systemutvecklare: {
    archived: false,
    contact_email: 'systemutvecklare@utn.se',
    contact_phone_number: '018-471 00 00',
    description:
      '<p>Som <b>systemutvecklare</b> arbetar du med att utveckla och underhålla de digitala system som möjliggör kårens dagliga arbete. Detta inkluderar allt från webbutveckling till databashantering.</p><p>Detta är en <i>unik möjlighet</i> att bidra med teknisk expertis till en ideell organisation.</p>',
    id: 1,
    name: 'Systemutvecklare',
    role_type: 'admin',
    teams: [teamMocks.digitaliseringsgruppen],
  } as Role,

  utbildningsansvarig: {
    archived: false,
    contact_email: 'utbildningsansvarig@utn.se',
    description:
      '<p>Utbildningsansvarig har till uppgift att bevaka utbildningsfrågor och agera som studenternas röst. Arbetet omfattar dialog med universitetet och att <b>organisera utbildningsrelaterade evenemang</b>.</p><p>Detta är en chans att <i>verkligen göra skillnad</i> för studenternas utbildningskvalitet.</p>',
    id: 5,
    name: 'Utbildningsansvarig',
    role_type: 'engaged',
    teams: [teamMocks.utbildningsutskottet],
  } as Role,

  viceProjektledare: {
    archived: false,
    contact_email: 'vice.projektledare@utn.se',
    description:
      '<p>Som Vice-projektledare stöttar du projektledaren i alla aspekter av projektgenomförandet. Detta innebär att hantera schemaläggning, budgetering och teamkoordination för att säkerställa att allt löper smidigt.</p><p>Du får också en <b>unik insyn</b> i planeringsprocessen av stora evenemang och chansen att utveckla <i>ledarskapsfärdigheter</i>.</p>',
    id: 2,
    name: 'Vice-projektledare',
    role_type: 'board',
    teams: [teamMocks.balkommitten],
  } as Role,
};
