import { Section } from './member-types';

export interface ForgotPasswordArgs {
  username: string;
}

export interface LoginArgs {
  password: string;
  username: string;
}

export interface RegisterArgs {
  email: string;
  password: string;
  password_confirmation?: string;
  person_number: string;
  phone_number: string;
  privacy_policy_accepted?: true;
  section: Section['id'];
  username: string;
}
