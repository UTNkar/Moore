import { useMemo } from 'react';

import { LinkProps } from '#root/components/Link';
import ModuleListItemCard from '#root/components/module/ModuleListItemCard';
import ModuleListItemHeader from '#root/components/module/ModuleListItemHeader';
import { Position } from '#root/types';
import { dateFormats, useFormattedDate } from '#root/utils/intl';

export default function PositionModuleListItem({
  position,
  active,
  ...otherProps
}: {
  active: boolean;
  position: Position;
} & LinkProps) {
  return (
    <ModuleListItemCard {...otherProps} active={active}>
      <PositionModuleListItemHeader position={position} />
    </ModuleListItemCard>
  );
}

export function PositionModuleListItemHeader({
  position,
  ...otherProps
}: {
  position: Position;
} & JSX.IntrinsicElements['div']) {
  const { teamName, endDate } = useMemo(() => {
    const teamName = position.role.teams?.[0]?.name;
    const endDate = position.recruitment_end;

    return { endDate, teamName };
  }, [position]);

  const formattedEndDate = useFormattedDate(endDate, dateFormats.longWithoutYear);

  return (
    <ModuleListItemHeader
      {...otherProps}
      title={position.role.name}
      subhead={
        <>
          {teamName && formattedEndDate ? teamName + ' - ' : teamName || ''}
          {formattedEndDate}
        </>
      }
    />
  );
}
