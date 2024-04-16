import type { OnPageTransitionStartAsync } from 'vike/types';

export default async function onPageTransitionStart(): ReturnType<OnPageTransitionStartAsync> {
  document.querySelector('body')!.classList.add('page-transition');

  if (process.env.NODE_ENV === 'development') {
    console.info('Started page transition.');
  }
}
