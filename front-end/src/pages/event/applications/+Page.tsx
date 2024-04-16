import ModuleBodyWrapper from '#root/components/module/ModuleBodyWrapper';
import ModuleSidebarWrapper from '#root/components/module/ModuleSidebarWrapper';
import { PageProps } from '#root/utils/page';

export default function EventApplicationsPage({ pageContext }: PageProps) {
  return (
    <>
      <ModuleSidebarWrapper />
      <ModuleBodyWrapper />
    </>
  );
}
