import { PageContext } from 'vike/types';

/**
 * Returns whether the page context tells that the rendition is inside an iframe.
 * That would mean only the "module" should be rendered.
 */
export default function isWithinIframe(pageContext: PageContext): boolean {
  return pageContext.urlParsed.search.hasOwnProperty('iframe');
}
