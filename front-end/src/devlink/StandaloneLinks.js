import React from 'react';

import * as _Builtin from './_Builtin';

export function StandaloneLinks({
  as: _Component = _Builtin.Paragraph,

  phone = {
    href: '#',
  },

  email = {
    href: '#',
  },

  emailLabel = '',

  url = {
    href: '#',
  },

  urlLabel = '',
  phoneVisible = false,
  emailVisible = false,
  urlVisible = false,
  phoneLabel = '072-253 32 11',
}) {
  return (
    <_Component className="standalone-link">
      {urlVisible ? (
        <_Builtin.Link button={false} block="" options={url}>
          {urlLabel}
        </_Builtin.Link>
      ) : null}
      {emailVisible ? (
        <_Builtin.Link button={false} block="" options={email}>
          {emailLabel}
        </_Builtin.Link>
      ) : null}
      <br />
      {phoneVisible ? (
        <_Builtin.Link button={false} block="" options={phone}>
          {phoneLabel}
        </_Builtin.Link>
      ) : null}
    </_Component>
  );
}
