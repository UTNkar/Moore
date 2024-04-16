import wretch from 'wretch';

import type { ApiContext } from './api-context';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function getApi(context: ApiContext) {
  return (
    wretch('https://api.utn.se') // Base url
      // Authorization header
      .auth(`Bearer ${context.bearerToken}`)
      // Cors fetch options
      .options({ credentials: 'include', mode: 'cors' })
      // Handle 403 errors
      .resolve((_) => _.forbidden(() => null))
  );
}
