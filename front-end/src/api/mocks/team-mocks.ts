import { Team } from '#root/types';

export const teamMocks = {
  balkommitten: {
    description: 'Planerar och genomför årets största festligheter, inklusive den årliga balen.',
    id: 2,
    logo: '/logos/balkommitten.png',
    name: 'Balkommittén',
  } as Team,

  digitaliseringsgruppen: {
    description: 'Ansvarar för UTN:s digitala infrastruktur och utveckling av medlemssystem.',
    id: 1,
    logo: '/logos/digitaliseringsgruppen.png',
    name: 'Digitaliseringsgruppen',
  } as Team,

  eventgruppen: {
    description: 'Skapar och koordinerar sociala evenemang för att förbättra studentlivet.',
    id: 4,
    logo: '/logos/eventgruppen.png',
    name: 'Eventgruppen',
  } as Team,

  presidiet: {
    description: 'UTN:s högsta verkställande organ, ansvarar för den dagliga driften.',
    id: 3,
    logo: '/logos/presidiet.png',
    name: 'Presidiet',
  } as Team,

  utbildningsutskottet: {
    description: 'Arbetar med utbildningsfrågor och studenters rättigheter.',
    id: 5,
    logo: '/logos/utbildningsutskottet.png',
    name: 'Utbildningsutskottet',
  } as Team,
};
