export interface Event {
  base_price: number;
  base_price_nonmember: number;
  contact_email?: string;
  description?: string;
  end_date: string;
  end_of_application: string;
  first_come_first_serve?: boolean;
  image?: string;
  info_for_participants?: string;
  last_payment_date?: string;
  num_participants_per_ticket: number;
  num_tickets: number;
  price_list?: EventCosts;
  price_per_participant: number;
  price_per_participant_nonmember: number;
  raffle_has_been_held?: boolean;
  start_date: string;
}

export interface EventApplication {
  event: Event;
  id: number;
  ticket?: EventTicket;
}

export interface EventCosts {
  fields: EventCostsField[];
  id: number;
  name: string;
}

export interface EventCostsField {
  Choices?: string[];
  Name?: string;
  'Non-member price'?: number;
  Price?: number;
  Required?: boolean;
  Type?: 'text' | 'long text' | 'number' | 'checkbox' | 'Dropdown';
}

export interface EventTicket {
  id: number;
  locked: boolean;
  num_extra_participants: number;
  payment_satus: 'unpaid' | 'pending' | 'paid';
  ticket_number: number;
  total_payment: number;
}
