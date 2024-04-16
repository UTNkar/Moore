import type { Member } from './member-types';

export interface Position {
  appointments: number;
  comment?: string;
  id: number;
  recruitment_end: string;
  recruitment_start: string;
  role: Role;
  term_from: string;
  term_to: string;
}

export interface PositionApplication {
  cover_letter: string;
  gdpr: boolean;
  id: number;
  position: Position;
  references: PositionApplicationReference[];
  rejection_date?: string;
  status: 'draft' | 'submitted' | 'approved' | 'disapproved' | 'appointed' | 'turned_down';
}

export interface PositionApplicationReference {
  application_id: number;
  comment?: string;
  email?: string;
  id: number;
  name: string;
  phone_number?: string;
  position: string;
}

export interface PositionWithApplication extends Position {
  application: PositionApplication | undefined;
}

export interface Role {
  archived: boolean;
  contact_email: string;
  contact_phone_number?: string;
  current_positions?: Position[];
  description?: string;
  election_email?: string;
  id: number;
  members?: Member[];
  name: string;
  phone_number?: string;
  role_type: 'admin' | 'fum' | 'board' | 'presidium' | 'group_leader' | 'engaged';
  teams?: Team[];
}

export interface Team {
  description?: string;
  id: number;
  logo?: string;
  name: string;
}
