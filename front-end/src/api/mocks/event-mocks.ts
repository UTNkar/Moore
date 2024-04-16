import { Event, EventApplication, EventTicket } from '#root/types';
import { addFromNow } from '#root/utils/intl';

/* eslint-disable sort-exports/sort-exports */

export const eventMocks = {
  forsranningen: {
    base_price: 0,
    base_price_nonmember: 0,
    contact_email: 'forsranningen@utn.se',
    description: 'Ett våghalsigt äventyr längs Fyrisån.',
    end_date: addFromNow({ days: 15 }),
    end_of_application: addFromNow({ days: 5 }),
    num_participants_per_ticket: 5,
    num_tickets: 40,
    price_list: {
      fields: [
        { Name: 'Lagmedlem', Price: 0, Required: true, Type: 'checkbox' },
        { Name: 'Forsränningspaket', Price: 200, Required: false, Type: 'checkbox' },
      ],
      id: 4,
      name: 'Biljettalternativ',
    },
    price_per_participant: 0,
    price_per_participant_nonmember: 0,
    start_date: addFromNow({ days: -15 }),
  } as Event,

  naturvetarbalen: {
    base_price: 750,
    base_price_nonmember: 850,
    contact_email: 'balen@utn.se',
    description: 'En storslagen bal för alla naturvetare.',
    end_date: addFromNow({ days: 10 }),
    end_of_application: addFromNow({ hours: 16 }),
    num_participants_per_ticket: 1,
    num_tickets: 200,
    price_list: {
      fields: [
        { Name: 'Sektionsmedlem', 'Non-member price': 850, Price: 750, Required: true, Type: 'checkbox' },
        { Name: 'Alkoholfritt alternativ', Price: 0, Required: false, Type: 'checkbox' },
      ],
      id: 1,
      name: 'Biljettalternativ',
    },
    price_per_participant: 750,
    price_per_participant_nonmember: 850,
    raffle_has_been_held: false,
    start_date: addFromNow({ days: -15 }),
  } as Event,

  polhacks: {
    base_price: 200,
    base_price_nonmember: 250,
    contact_email: 'polhacks@utn.se',
    description: 'LAN och e-sportsevenemang för teknikintresserade.',
    end_date: addFromNow({ days: 10 }),
    end_of_application: addFromNow({ hours: 16 }),
    first_come_first_serve: true,
    num_participants_per_ticket: 1,
    num_tickets: 100,
    price_list: {
      fields: [
        { Name: 'Deltagare', 'Non-member price': 250, Price: 200, Required: true, Type: 'checkbox' },
        { Name: 'Extra monitorplats', Price: 50, Required: false, Type: 'checkbox' },
      ],
      id: 3,
      name: 'Biljettalternativ',
    },
    price_per_participant: 200,
    price_per_participant_nonmember: 250,
    start_date: addFromNow({ days: -15 }),
  } as Event,

  rebusrallyt: {
    base_price: 100,
    base_price_nonmember: 150,
    contact_email: 'rebusrallyt@utn.se',
    description: 'En heldag med kluriga problem och fysiska utmaningar.',
    end_date: addFromNow({ days: 10 }),
    end_of_application: addFromNow({ hours: 16 }),
    num_participants_per_ticket: 4,
    num_tickets: 50,
    price_list: {
      fields: [
        { Name: 'Lagmedlem', 'Non-member price': 150, Price: 100, Required: true, Type: 'checkbox' },
        { Name: 'T-shirt', Price: 100, Required: false, Type: 'checkbox' },
      ],
      id: 2,
      name: 'Biljettalternativ',
    },
    price_per_participant: 100,
    price_per_participant_nonmember: 150,
    start_date: addFromNow({ days: -15 }),
  } as Event,
};

export const eventTicketMocks = {
  forsranningen: {
    id: 4,
    locked: false,
    num_extra_participants: 4, // A team of 5
    payment_satus: 'paid',
    ticket_number: 404,
    total_payment: 200, // Assuming member price for a forsränningspaket
  } as EventTicket,

  naturvetarbalen: {
    id: 1,
    locked: false,
    num_extra_participants: 0,
    payment_satus: 'paid',
    ticket_number: 101,
    total_payment: 750, // Assuming member price
  } as EventTicket,

  polhacks: {
    id: 3,
    locked: false,
    num_extra_participants: 0,
    payment_satus: 'paid',
    ticket_number: 303,
    total_payment: 200, // Assuming member price
  } as EventTicket,

  rebusrallyt: {
    id: 2,
    locked: false,
    num_extra_participants: 3, // A team of 4
    payment_satus: 'paid',
    ticket_number: 202,
    total_payment: 400, // Assuming member price for a team
  } as EventTicket,
};

export const eventApplicationMocks = {
  forsranningen: {
    event: eventMocks.forsranningen,
    id: 4,
    ticket: eventTicketMocks.forsranningen,
  } as EventApplication,

  naturvetarbalen: {
    event: eventMocks.naturvetarbalen,
    id: 1,
  } as EventApplication,

  polhacks: {
    event: eventMocks.polhacks,
    id: 3,
    ticket: eventTicketMocks.polhacks,
  } as EventApplication,

  rebusrallyt: {
    event: eventMocks.rebusrallyt,
    id: 2,
    ticket: eventTicketMocks.rebusrallyt,
  } as EventApplication,
};
