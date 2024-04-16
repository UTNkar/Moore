import clsx from 'clsx';

import { LocalizedText } from '#root/utils/intl';
import { usePageContext } from '#root/utils/page';
import type { Falsy } from '#root/utils/types';

import Link, { LinkProps, isLinkActive } from './Link';

export interface TabOptions extends Omit<LinkProps, 'children' | 'active'> {
  fallback?: boolean;
  key?: React.Key;
  label: string;
}

export interface TabsProps {
  tabs: (TabOptions | 'space' | Falsy)[];
}

export default function Tabs({ tabs }: TabsProps): JSX.Element {
  const urlPathname = usePageContext().urlPathname;

  const activeTab = (tabs.find(
    (tab) => typeof tab !== 'string' && tab && isLinkActive(urlPathname, tab.href, tab.hasSubpaths),
  ) || tabs.find((tab) => typeof tab !== 'string' && tab && tab.fallback)) as TabOptions | undefined;

  return (
    <div className="module-tabs w-layout-hflex">
      {tabs.map((tab, index) => {
        if (tab === 'space') {
          return <div key={index} className="spacer" />;
        } else if (!tab) {
          return null;
        }

        // eslint-disable-next-line jsx-a11y/anchor-has-content
        return (
          <Link key={index} {...tab} active={activeTab === tab} className={clsx('module-tab', tab.className)}>
            <LocalizedText element="h4" className="without-decoration without-spacing">
              {tab.label}
            </LocalizedText>
          </Link>
        );
      })}
    </div>
  );
}
