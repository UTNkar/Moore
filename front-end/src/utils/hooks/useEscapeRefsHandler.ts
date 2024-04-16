import { DependencyList, RefObject, useEffect } from 'react';

/**
 * Calls the {@link handler} when anything outside the area(s) of the ref(s) are clicked
 * or whenever the escape key is pressed.
 */
export default function useEscapeRefsHandler(
  refs: RefObject<Node>[],
  handler: () => any,
  deps: DependencyList = [],
): void {
  useEffect(() => {
    function handleClick(event: MouseEvent): void {
      // call handler if none of the referenced elements contain the event target
      if (refs.every((ref) => ref.current && !ref.current.contains(event.target as Node))) {
        handler();
      }
    }

    function handleKeydown({ keyCode }: KeyboardEvent): void {
      // handle escape key
      if (keyCode !== 27) {
        return;
      }

      handler();
    }

    document.addEventListener('click', handleClick);
    document.addEventListener('keydown', handleKeydown);

    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('keydown', handleKeydown);
    };
  }, deps);
}
