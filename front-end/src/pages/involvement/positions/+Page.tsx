import { FormattedMessage } from 'react-intl';

import { useAuthenticatedMember, usePositionsWithApplications } from '#root/api';
import { PositionModuleListItemHeader } from '#root/components/involvement/PositionModuleListItem';
import EmptyModuleBody from '#root/components/module/EmptyModuleBody';
import ModuleBodyWrapper from '#root/components/module/ModuleBodyWrapper';
import ModuleContentDivider from '#root/components/module/ModuleContentDivider';
import ModuleRichText from '#root/components/module/ModuleRichText';
import { useFormattedDate } from '#root/utils/intl';
import { PageProps, useActiveItem } from '#root/utils/page';

import type { InvolvementPageData } from './+data';
import InvolvementPositionsSidebar from './InvolvementPositionsSidebar';

export default function InvolvementPage({ pageContext }: PageProps<InvolvementPageData>) {
  const authenticatedMember = useAuthenticatedMember<InvolvementPageData>('authenticatedMember');

  const positions = usePositionsWithApplications<InvolvementPageData>(
    'positionsWithApplications',
    authenticatedMember.data,
  );

  const activePosition = useActiveItem(positions.data, {
    fallbackFirst: true,
    idKey: 'id',
    numberKeys: ['id'],
    stringKeys: [],
  });

  const formattedTermOfOffice = {
    from: useFormattedDate(activePosition?.term_from),
    to: useFormattedDate(activePosition?.term_to),
  };

  if (!positions.data?.length) {
    return (
      <>
        <EmptyModuleBody
          extraSad
          message={
            <FormattedMessage id="Du kan inte söka några poster för tillfället, men titta gärna tillbaka imorgon!" />
          }
        />
      </>
    );
  }

  return (
    <>
      <InvolvementPositionsSidebar positionsWithApplications={positions} activePosition={activePosition} />

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
