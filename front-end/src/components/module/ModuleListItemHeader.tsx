import { useLocalizedText } from '#root/utils/intl';

export default function ModuleListItemHeader({
  title,
  subhead,
  icon,
}: {
  icon?: { alt: string; src: string };
  subhead: React.ReactNode | React.ReactNode[];
  title: React.ReactNode | React.ReactNode[];
}) {
  return (
    <div className="module-item-header">
      <div className="module-item-list-icon-wrapper">
        <img
          src={icon?.src || '/images/logo-square-blue.svg'}
          alt={icon?.alt || useLocalizedText('Uppsala teknolog- och naturvetarkår')}
          role="presentation"
          className="involvement-list-icon"
        />
      </div>
      <div className="module-item-list-labels">
        <h4 className="without-decoration without-spacing">{title}</h4>
        <p className="card-subhead without-spacing" style={{ marginTop: 3 }}>
          {subhead}
        </p>
      </div>
    </div>
  );
}
