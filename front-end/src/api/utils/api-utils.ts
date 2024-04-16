import type { ApiContext } from './api-context';
import { memberMocks } from '../mocks';

export function getApiMockMember(context: ApiContext): keyof typeof memberMocks {
  if (!context.mockMember) {
    context.mockMember = memberMockKeys[Math.floor(Math.random() * memberMockKeys.length)];
  }

  return context.mockMember;
}

const memberMockKeys = Object.keys(memberMocks.annaLindberg) as (keyof typeof memberMocks)[];
