import { FormattedMessage } from 'react-intl';

import { useAuthenticatedMember, usePositionApplications } from '#root/api';
import PositionModuleListItem, {
  PositionModuleListItemHeader,
} from '#root/components/involvement/PositionModuleListItem';
import EmptyModuleBody from '#root/components/module/EmptyModuleBody';
import ModuleBodyWrapper from '#root/components/module/ModuleBodyWrapper';
import ModuleContentDivider from '#root/components/module/ModuleContentDivider';
import ModuleRichText from '#root/components/module/ModuleRichText';
import ModuleSidebarWrapper from '#root/components/module/ModuleSidebarWrapper';
import { useFormattedDate } from '#root/utils/intl';
import { PageProps, useActiveItem } from '#root/utils/page';

import { InvolvementApplicationsPageData } from './+data';

export default function InvolvementApplicationsPage({ pageContext }: PageProps) {
  const authenticatedMember = useAuthenticatedMember<InvolvementApplicationsPageData>('authenticatedMember');

  const positionApplications = usePositionApplications<InvolvementApplicationsPageData>(
    'positionApplications',
    authenticatedMember.data,
  );

  const activePositionApplication = useActiveItem(positionApplications.data, {
    fallbackFirst: true,
    idKey: 'id',
    numberKeys: ['id'],
    stringKeys: [],
  });

  const activePosition = activePositionApplication?.position;

  const formattedTermOfOffice = {
    from: useFormattedDate(activePosition?.term_from),
    to: useFormattedDate(activePosition?.term_to),
  };

  if (!positionApplications.data?.length) {
    return (
      <>
        <EmptyModuleBody message={<FormattedMessage id="Du har inte sökt några poster, än." />} />
      </>
    );
  }

  return (
    <>
      <ModuleSidebarWrapper>
        {positionApplications.data?.map((positionApplication) => {
          return (
            <PositionModuleListItem
              key={positionApplication.id}
              href={'/involvement/applications/' + positionApplication.id}
              active={activePositionApplication === positionApplication}
              position={positionApplication.position}
            />
          );
        })}
      </ModuleSidebarWrapper>

      <ModuleBodyWrapper>
        {activePosition && (
          <>
            <PositionModuleListItemHeader position={activePosition} />

            <ModuleContentDivider />

            {formattedTermOfOffice.from && formattedTermOfOffice.to && (
              <FormattedMessage
                tagName="p"
                id="Mandatperioden löper mellan {from_date} och {to_date}."
                values={{ from_date: formattedTermOfOffice.from, to_date: formattedTermOfOffice.to }}
              />
            )}

            {activePosition.role.description && <ModuleRichText html={activePosition.role.description} />}

            {activePosition.comment && <ModuleRichText html={activePosition.comment} />}
          </>
        )}
      </ModuleBodyWrapper>
    </>
  );
}
