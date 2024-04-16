import { Section } from '#root/types';

export async function loginCheck(username: string, password: string): Promise<string> {
  const loginData = new FormData();

  loginData.append('username', username);
  loginData.append('password', password);
  loginData.append('next', '/');

  const login = await fetch('https://utn.se/accounts/login/', {
    body: loginData,
    method: 'POST',
  }).then((response) => response.json());

  return login;
}

export async function registerMember(_args: RegisterMemberArgs): Promise<void> {
  throw new Error('Not implemented');
}

export interface LoginArgs {
  password: string;
  username: string;
}

export interface RegisterMemberArgs {
  email: string;
  person_number: string;
  phone_number: string;
  section: Section['id'];
  username: string;
}
