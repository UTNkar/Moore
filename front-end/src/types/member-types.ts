import type { Role, Team } from './involvement-types';

export interface Member {
  date_joined: string;
  email: string;
  is_active: boolean;
  is_staff: boolean;
  name: string;
  person_nr: string;
  phone_number: string;
  registration_year: string;
  roles: Role[];
  section: Section;
  status: 'unknown' | 'nonmember' | 'member' | 'alumnus';
  status_changed: string;
  study: StudyProgram;
  teams: Team[];
  unicore_id: number;
  unicore_user_data: UnicoreUser;
  username: string;
}

export interface Section {
  abbreviation: string;
  id: number;
  name: string;
  studies: StudyProgram[];
}

export interface StudyProgram {
  degree: string;
  id: number;
  name: string;
}

export interface UnicoreUser {
  Adress1: string;
  Adress2: string;
  Adress3: string;
  AdressFromdatum?: string;
  AdressHandlid?: number;
  AdressRegdatum?: string;
  AdressTomdatum?: string;
  Adressid?: number;
  Adresstyp?: number;
  Alder?: number;
  Avlidendatum?: string;
  Avplock: boolean;
  Betalningdatum?: string;
  Efternamn: string;
  Epost: string;
  Fodelsedatum?: string;
  Fornamn: string;
  Handlid: number;
  Huvudpersonid: number;
  Id: number;
  Ingautskick: boolean;
  IngenMedlemstidning: boolean;
  Kvinna: boolean;
  Man: boolean;
  Medlemsnr: string;
  Personnr: string;
  Postnr: string;
  Postort: string;
  Program: UnicoreUserProgram[];
  Regdatum?: string;
  Registrerad: boolean;
  Sekretess: boolean;
  Tele1: boolean;
  Tele2: boolean;
  Tele3: boolean;
}

export interface UnicoreUserProgram {
  Benamning: string;
  Handlid: number;
  Regdatum?: string;
  Sokordid: number;
}
