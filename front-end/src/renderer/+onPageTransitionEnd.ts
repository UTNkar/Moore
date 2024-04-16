import type { OnPageTransitionEndAsync } from 'vike/types';

export default async function onPageTransitionEnd(): ReturnType<OnPageTransitionEndAsync> {
  document.querySelector('body')!.classList.remove('page-transition');

  if (process.env.NODE_ENV === 'development') {
    console.debug('Ended page transition.');
  }
}
