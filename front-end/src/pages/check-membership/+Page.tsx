import React from 'react';

import { toast } from 'react-toastify';

import { checkMembership } from '#root/api';
import ModuleListItemCard from '#root/components/module/ModuleListItemCard';
import ModuleSidebarWrapper from '#root/components/module/ModuleSidebarWrapper';
import { LocalizedText, useLocalizedText } from '#root/utils/intl';

interface FormData {
  personalNumber: string;
}

export default function CheckMembershipPage() {
  const [formData, setFormData] = React.useState<FormData>({ personalNumber: '' });

  const handleInputChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;

      formData.personalNumber = value;
      setFormData({ ...formData });
    },
    [formData.personalNumber],
  );

  const localiedText = {
    checkMembership: useLocalizedText('Kontrollera medlemskap'),
    member: useLocalizedText('Du är medlem'),
    notMember: useLocalizedText('Du är inte medlem'),
  };

  const handleSubmit = React.useCallback(
    (event: React.FormEvent<HTMLFormElement>): void => {
      event.preventDefault();

      checkMembership(formData.personalNumber)
        .then((isMember) => {
          if (isMember) {
            toast.success(localiedText.member, {
              hideProgressBar: true,
              position: 'bottom-right',
              theme: 'colored',
            });
          } else {
            toast.error(localiedText.notMember, {
              hideProgressBar: true,
              position: 'bottom-right',
              theme: 'colored',
            });
          }
        })
        .catch((error: Error) => {
          toast.error(error.message, { hideProgressBar: true });
        });
    },
    [formData, localiedText.member, localiedText.notMember],
  );

  return (
    <>
      <ModuleSidebarWrapper>
        <ModuleListItemCard>
          <LocalizedText element="h2" className="without-spacing">
            Kontrollera medlemskap
          </LocalizedText>
          <LocalizedText element="p" className="without-spacing">
            Skriv ditt personnummer med 12 siffror för att se om du är registrerad som medlem i UTN. Annars är
            du varmt välkommen att bli medlem.
          </LocalizedText>
        </ModuleListItemCard>
      </ModuleSidebarWrapper>
      <div className="sticky-content-body module">
        <div className="w-form">
          <form onSubmit={handleSubmit}>
            <div className="w-layout-vflex form-field-wrapper">
              <label htmlFor="ssn">
                <LocalizedText>Personnummer</LocalizedText>
              </label>
              <input
                id="ssn"
                className="text-field w-input"
                type="text"
                autoComplete="off"
                required
                onChange={handleInputChange}
                placeholder="YYYYDDMM-XXXX"
              />
            </div>
            <div className="w-layout-vflex medium-button-group-wrapper">
              <input
                type="submit"
                className="medium-button secondary w-button"
                value={localiedText.checkMembership}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
