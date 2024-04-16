import type { OnHydrationEndAsync } from 'vike/types';

export default async function onHydrationEnd(): ReturnType<OnHydrationEndAsync> {
  document.documentElement!.classList.add('interactive');
  document.documentElement!.classList.remove('non-interactive');

  if (process.env.NODE_ENV === 'development') {
    console.info('Page is now interactive.');
  }
}
