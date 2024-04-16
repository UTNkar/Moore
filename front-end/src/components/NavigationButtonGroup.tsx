import { useLocalizedText } from '#root/utils/intl';

import Button from './Button';
import ButtonGroupWrapper from './ButtonGroupWrapper';

export default function NavigationButtonGroup({ exclude }: { exclude?: 'involvement' | 'event' | 'member' }) {
  const links = (
    [
      ['involvement', 'Engagemang'],
      ['event', 'Event'],
      ['member', 'Medlemskap'],
    ] as ['involvement' | 'event' | 'member', string][]
  )
    .filter((tuple) => tuple[0] !== exclude)
    .map((tuple, i) => {
      return (
        <Button
          key={i}
          large
          secondary
          href={'/' + tuple[0]}
          left={i === 0 || (!exclude && i === 1)}
          right={i > 0}
        >
          {useLocalizedText(tuple[1])}
        </Button>
      );
    });

  return <ButtonGroupWrapper large>{links}</ButtonGroupWrapper>;
}
