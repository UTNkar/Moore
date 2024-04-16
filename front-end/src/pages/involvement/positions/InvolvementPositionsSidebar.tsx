import { usePositionsWithApplications } from '#root/api';
import PositionModuleListItem from '#root/components/involvement/PositionModuleListItem';
import ModuleSidebarWrapper from '#root/components/module/ModuleSidebarWrapper';
import { Position } from '#root/types';

export default function InvolvementPositionsSidebar({
  positionsWithApplications,
  activePosition,
}: {
  activePosition?: Position;
  positionsWithApplications: ReturnType<typeof usePositionsWithApplications>;
}) {
  return (
    <ModuleSidebarWrapper>
      {positionsWithApplications.data?.map((position) => {
        return (
          <PositionModuleListItem
            key={position.id}
            href={
              position.application
                ? '/involvement/applications/' + position.application.id
                : '/involvement/' + position.id
            }
            active={activePosition?.id === position.id}
            position={position}
          />
        );
      })}
    </ModuleSidebarWrapper>
  );
}
