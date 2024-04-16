import React from 'react';

import * as _Builtin from './_Builtin';
import * as _interactions from './interactions';

const _interactionsData = JSON.parse(
  '{"events":{"e-6":{"id":"e-6","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-7"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"cf5eafae-b4bd-b55c-9cb3-c9cc84649719","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"cf5eafae-b4bd-b55c-9cb3-c9cc84649719","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1701617253940},"e-7":{"id":"e-7","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-6"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"cf5eafae-b4bd-b55c-9cb3-c9cc84649719","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"cf5eafae-b4bd-b55c-9cb3-c9cc84649719","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1701617253940}},"actionLists":{"a":{"id":"a","title":"Nav Dropdown Link (enter)","actionItemGroups":[{"actionItems":[{"id":"a-n","actionTypeId":"STYLE_BORDER","config":{"delay":0,"easing":"outQuint","duration":350,"target":{"useEventTarget":true,"id":"cf5eafae-b4bd-b55c-9cb3-c9cc84649719"},"globalSwatchId":"","rValue":0,"bValue":154,"gValue":69,"aValue":1}},{"id":"a-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuint","duration":350,"target":{"useEventTarget":"CHILDREN","selector":".navbar-dropdown-list-label.arrow","selectorGuids":["8bd34f03-6977-28d4-c76e-5c3e1191cb35","f1b08e13-f558-f3f9-7cc7-97e494a53fb1"]},"xValue":4,"yValue":0,"xUnit":"px","yUnit":"px","zUnit":"PX"}},{"id":"a-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuint","duration":350,"target":{"useEventTarget":"CHILDREN","selector":".navbar-dropdown-list-label.arrow","selectorGuids":["8bd34f03-6977-28d4-c76e-5c3e1191cb35","f1b08e13-f558-f3f9-7cc7-97e494a53fb1"]},"value":1,"unit":""}},{"id":"a-n-2","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"outQuint","duration":350,"target":{"useEventTarget":"CHILDREN","selector":".navbar-dropdown-list-label","selectorGuids":["8bd34f03-6977-28d4-c76e-5c3e1191cb35"]},"globalSwatchId":"","rValue":0,"bValue":154,"gValue":69,"aValue":1}}]}],"useFirstGroupAsInitialState":false,"createdOn":1701534292732},"a-2":{"id":"a-2","title":"Nav Dropdown Link (leave)","actionItemGroups":[{"actionItems":[{"id":"a-2-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuint","duration":350,"target":{"useEventTarget":"CHILDREN","selector":".navbar-dropdown-list-label.arrow","selectorGuids":["8bd34f03-6977-28d4-c76e-5c3e1191cb35","f1b08e13-f558-f3f9-7cc7-97e494a53fb1"]},"value":0,"unit":""}},{"id":"a-2-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuint","duration":350,"target":{"useEventTarget":"CHILDREN","selector":".navbar-dropdown-list-label.arrow","selectorGuids":["8bd34f03-6977-28d4-c76e-5c3e1191cb35","f1b08e13-f558-f3f9-7cc7-97e494a53fb1"]},"xValue":2,"yValue":4,"xUnit":"px","yUnit":"px","zUnit":"PX"}}]},{"actionItems":[{"id":"a-2-n","actionTypeId":"STYLE_BORDER","config":{"delay":0,"easing":"outQuint","duration":350,"target":{"useEventTarget":true,"id":"cf5eafae-b4bd-b55c-9cb3-c9cc84649719"},"globalSwatchId":"","rValue":224,"bValue":224,"gValue":224,"aValue":1}},{"id":"a-2-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuint","duration":350,"target":{"useEventTarget":"CHILDREN","selector":".navbar-dropdown-list-label.arrow","selectorGuids":["8bd34f03-6977-28d4-c76e-5c3e1191cb35","f1b08e13-f558-f3f9-7cc7-97e494a53fb1"]},"xValue":2,"yValue":4,"xUnit":"px","yUnit":"px","zUnit":"PX"}},{"id":"a-2-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuint","duration":350,"target":{"useEventTarget":"CHILDREN","selector":".navbar-dropdown-list-label.arrow","selectorGuids":["8bd34f03-6977-28d4-c76e-5c3e1191cb35","f1b08e13-f558-f3f9-7cc7-97e494a53fb1"]},"value":0,"unit":""}},{"id":"a-2-n-2","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"outQuint","duration":350,"target":{"useEventTarget":"CHILDREN","selector":".navbar-dropdown-list-label","selectorGuids":["8bd34f03-6977-28d4-c76e-5c3e1191cb35"]},"globalSwatchId":"","rValue":33,"bValue":39,"gValue":36,"aValue":1}}]}],"useFirstGroupAsInitialState":true,"createdOn":1701534292732}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}',
);

export function NavbarDropdownListItem({
  as: _Component = _Builtin.VFlex,
  label = 'Label',

  link = {
    href: '#',
  },

  description = '',
  arrow = '➚',
  showDescription = false,
}) {
  _interactions.useInteractions(_interactionsData);

  return (
    <_Component tag="main">
      <_Builtin.Link
        className="navbar-dropdown-list-item-wrapper"
        data-w-id="cf5eafae-b4bd-b55c-9cb3-c9cc84649719"
        button={false}
        block="inline"
        options={link}
      >
        <_Builtin.VFlex className="navbar-dropdown-list-item-label-wrapper" tag="div">
          <_Builtin.Heading
            className="navbar-dropdown-list-label without-decoration without-spacing"
            tag="h4"
          >
            {label}
          </_Builtin.Heading>
          <_Builtin.Heading
            className="navbar-dropdown-list-label arrow without-decoration without-spacing"
            tag="h4"
          >
            {arrow}
          </_Builtin.Heading>
        </_Builtin.VFlex>
        {showDescription ? (
          <_Builtin.Paragraph className="navbar-dropdown-list-description">{description}</_Builtin.Paragraph>
        ) : null}
      </_Builtin.Link>
    </_Component>
  );
}
