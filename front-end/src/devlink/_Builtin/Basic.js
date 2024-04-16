import * as React from 'react';

import { DevLinkContext } from '../devlinkContext';
import * as utils from '../utils';

export function Block({ tag = 'div', ...props }) {
  return React.createElement(tag, props);
}

export function BlockContainer({ tag = 'div', className = '', ...props }) {
  return React.createElement(tag, {
    className: className + ' w-layout-blockcontainer',
    ...props,
  });
}

export function Blockquote(props) {
  return <blockquote {...props} />;
}

export function Cell({ tag = 'div', className = '', ...props }) {
  return React.createElement(tag, {
    className: className + ' w-layout-cell',
    ...props,
  });
}

export function Column({ tag = 'div', className = '', columnClasses = '', ...props }) {
  return React.createElement(tag, {
    className: className + ' w-col ' + columnClasses,
    ...props,
  });
}

export const Container = React.forwardRef(function Container({ tag = 'div', className = '', ...props }, ref) {
  return React.createElement(tag, {
    className: className + ' w-container',
    ref,
    ...props,
  });
});

export function Grid({ tag = 'div', className = '', ...props }) {
  return React.createElement(tag, {
    className: className + ' w-layout-grid',
    ...props,
  });
}

export function HFlex({ tag = 'div', className = '', ...props }) {
  return React.createElement(tag, {
    className: className + ' w-layout-hflex',
    ...props,
  });
}

export function HtmlEmbed({ tag = 'div', className = '', value = '', ...props }) {
  return React.createElement(tag, {
    className: className + ' w-embed',
    dangerouslySetInnerHTML: { __html: utils.removeUnescaped(value) },
    ...props,
  });
}

export function Icon({ widget, className = '', ...props }) {
  return React.createElement('div', {
    className: className + ` w-icon-${widget.icon}`,
    ...props,
  });
}

export function Image({ alt, ...props }) {
  const { renderImage: UserImage } = React.useContext(DevLinkContext);

  return UserImage ? <UserImage alt={alt || ''} {...props} /> : <img alt={alt || ''} {...props} />;
}

export function Layout({ tag = 'div', className = '', ...props }) {
  return React.createElement(tag, {
    className: className + ' w-layout-layout wf-layout-layout',
    ...props,
  });
}

export const Link = function Link({
  options = { href: '#' },
  className = '',
  button = false,
  children,
  block = '',
  ...props
}) {
  const { renderLink: UserLink } = React.useContext(DevLinkContext);

  if (button) className += ' w-button';
  if (block === 'inline') className += ' w-inline-block';

  if (UserLink) {
    return (
      <UserLink className={className} {...options} {...props}>
        {children}
      </UserLink>
    );
  }

  const { href, target, preload = 'none' } = options;

  const shouldRenderResource = preload !== 'none' && typeof href === 'string' && !href.startsWith('#');

  return (
    <>
      <a href={href} target={target} className={className} {...props}>
        {children}
      </a>
      {shouldRenderResource && <link rel={preload} href={href} />}
    </>
  );
};

export function List({ tag = 'ul', unstyled = true, className = '', ...props }) {
  return React.createElement(tag, {
    className: className + (unstyled ? ' w-list-unstyled' : ''),
    role: 'list',
    ...props,
  });
}

export function ListItem(props) {
  return React.createElement('li', props);
}

export function NotSupported({ _atom = '' }) {
  return <div>{`This builtin is not currently supported: ${_atom}`}</div>;
}

export function Row({ tag = 'div', className = '', columns, children, ...props }) {
  return React.createElement(
    tag,
    { className: className + ' w-row', ...props },
    columns
      ? React.Children.map(children, (child, index) => {
          if (child && typeof child === 'object' && child.type !== Column) return child;

          const columnClasses = Object.entries(columns ?? {}).reduce((acc, [key, value]) => {
            const width = transformWidths(value === 'custom' ? '6|6' : value, index);

            acc.add(width ? columnClass(width, key) : '');
            return acc;
          }, new Set());

          return React.cloneElement(child, {
            columnClasses: [...columnClasses].join(' '),
            ...child.props,
          });
        })
      : children,
  );
}

export function Section({ tag = 'section', ...props }) {
  return React.createElement(tag, props);
}

const transformWidths = (width, index) => {
  const widths = width?.split('|') ?? [];

  return widths.length > 1 ? widths[index] : width;
};

const columnClass = (width, key) => {
  if (/stack$/.test(width)) return 'w-col-stack';
  if (/main$/.test(key)) return `w-col-${width}`;
  return `w-col-${key}-${width}`;
};

export function Span(props) {
  return <span {...props} />;
}

export function VFlex({ tag = 'div', className = '', ...props }) {
  return React.createElement(tag, {
    className: className + ' w-layout-vflex',
    ...props,
  });
}
