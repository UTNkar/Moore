import { Duration, add } from 'date-fns';

const now = Date.now();

export function addFromNow(duration: Duration): string {
  return add(now, duration).toISOString();
}
