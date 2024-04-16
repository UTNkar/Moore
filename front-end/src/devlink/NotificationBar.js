import React from 'react';

import * as _Builtin from './_Builtin';

export function NotificationBar({
  as: _Component = _Builtin.Block,
  title = 'Idag är det julafton',
  text = '– och farmor vill ha klappar.',
  aktiv = true,
  secondaryBackground = false,
  content = ' och farmor behöver sina klappar.',
}) {
  return aktiv ? (
    <_Component className="notification-bar-wrapper" tag="div">
      <_Builtin.BlockContainer
        className="center container"
        grid={{
          type: 'container',
        }}
        tag="div"
      >
        <_Builtin.RichText className="notification-bar" tag="div">
          {content}
        </_Builtin.RichText>
      </_Builtin.BlockContainer>
      {secondaryBackground ? (
        <_Builtin.Block className="notification-bar-secondary-background" tag="div" />
      ) : null}
    </_Component>
  ) : null;
}
