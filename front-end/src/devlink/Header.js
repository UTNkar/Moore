import React from 'react';

import * as _Builtin from './_Builtin';
import * as _interactions from './interactions';
import { NavbarDropdownItem } from './NavbarDropdownItem';
import { NavbarDropdownListItem } from './NavbarDropdownListItem';
import { NotificationBar } from './NotificationBar';

const _interactionsData = JSON.parse(
  '{"events":{"e-8":{"id":"e-8","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-7","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-9"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"23c8289b-b6ee-d11c-0e4b-dc3321f53b55","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"selector":".menu-button","originalId":"f7f89f7d-61b7-a46f-33fe-12388520b4be","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1701681689120},"e-12":{"id":"e-12","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-5","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-13"}},"mediaQueries":["main"],"target":{"selector":".navbar-dropdown-item-wrapper","originalId":"79f90808-0363-6b63-c04f-4f1182c7e592","appliesTo":"CLASS"},"targets":[{"selector":".navbar-dropdown-item-wrapper","originalId":"79f90808-0363-6b63-c04f-4f1182c7e592","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1701686954615},"e-13":{"id":"e-13","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-6","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-12"}},"mediaQueries":["main"],"target":{"selector":".navbar-dropdown-item-wrapper","originalId":"79f90808-0363-6b63-c04f-4f1182c7e592","appliesTo":"CLASS"},"targets":[{"selector":".navbar-dropdown-item-wrapper","originalId":"79f90808-0363-6b63-c04f-4f1182c7e592","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1701686954617},"e-16":{"id":"e-16","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-17"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"62b33408-518a-bd6c-a47e-55fa8a1a886b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"62b33408-518a-bd6c-a47e-55fa8a1a886b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1701690169584},"e-18":{"id":"e-18","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-19"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"122af353-f487-076b-1688-dd1b81b2a3b1","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"122af353-f487-076b-1688-dd1b81b2a3b1","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1701692079761},"e-20":{"id":"e-20","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-9","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-21"}},"mediaQueries":["medium","small","tiny"],"target":{"selector":".navbar-item-wrapper","originalId":"4d705668-726f-184c-6a13-fc800684c888","appliesTo":"CLASS"},"targets":[{"selector":".navbar-item-wrapper","originalId":"4d705668-726f-184c-6a13-fc800684c888","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1701694075877},"e-21":{"id":"e-21","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-10","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-20"}},"mediaQueries":["medium","small","tiny"],"target":{"selector":".navbar-item-wrapper","originalId":"4d705668-726f-184c-6a13-fc800684c888","appliesTo":"CLASS"},"targets":[{"selector":".navbar-item-wrapper","originalId":"4d705668-726f-184c-6a13-fc800684c888","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1701694075878}},"actionLists":{"a-7":{"id":"a-7","title":"Menu (show)","actionItemGroups":[{"actionItems":[{"id":"a-7-n-19","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".navbar-menu-wrapper","selectorGuids":["8bd34f03-6977-28d4-c76e-5c3e1191cb2e"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-7-n-10","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".navbar-menu-wrapper","selectorGuids":["8bd34f03-6977-28d4-c76e-5c3e1191cb2e"]},"value":"block"}},{"id":"a-7-n-20","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".navbar-menu-wrapper","selectorGuids":["8bd34f03-6977-28d4-c76e-5c3e1191cb2e"]},"yValue":-24,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-7-n-6","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".menu-button.hide","selectorGuids":["8bd34f03-6977-28d4-c76e-5c3e1191cb39","d2c990da-6381-2399-bfe4-6d5f3d076282"]},"value":"block"}},{"id":"a-7-n-18","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".menu-button.hide","selectorGuids":["8bd34f03-6977-28d4-c76e-5c3e1191cb39","d2c990da-6381-2399-bfe4-6d5f3d076282"]},"value":0,"unit":""}},{"id":"a-7-n-21","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".menu-button.hide","selectorGuids":["8bd34f03-6977-28d4-c76e-5c3e1191cb39","d2c990da-6381-2399-bfe4-6d5f3d076282"]},"xValue":0.35,"yValue":0.35,"locked":true}},{"id":"a-7-n-13","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".navbar-menu-overlay","selectorGuids":["60b67a82-f8c7-81e4-a167-f6d742996ba1"]},"value":"block"}},{"id":"a-7-n-17","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".navbar-menu-overlay","selectorGuids":["60b67a82-f8c7-81e4-a167-f6d742996ba1"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-7-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuint","duration":350,"target":{"useEventTarget":"SIBLINGS","selector":".navbar-menu-wrapper","selectorGuids":["8bd34f03-6977-28d4-c76e-5c3e1191cb2e"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-7-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuint","duration":350,"target":{"useEventTarget":"SIBLINGS","selector":".navbar-menu-wrapper","selectorGuids":["8bd34f03-6977-28d4-c76e-5c3e1191cb2e"]},"value":1,"unit":""}},{"id":"a-7-n-9","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"outQuint","duration":200,"target":{"selector":".menu-button.show","selectorGuids":["8bd34f03-6977-28d4-c76e-5c3e1191cb39","38824b83-f205-6890-f918-441d768aab28"]},"xValue":0.35,"yValue":0.35,"zValue":null,"locked":true}},{"id":"a-7-n-5","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"outQuint","duration":350,"target":{"selector":".menu-button.hide","selectorGuids":["8bd34f03-6977-28d4-c76e-5c3e1191cb39","d2c990da-6381-2399-bfe4-6d5f3d076282"]},"xValue":1,"yValue":1,"zValue":null,"locked":true}},{"id":"a-7-n-15","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":100,"target":{"selector":".menu-button.hide","selectorGuids":["8bd34f03-6977-28d4-c76e-5c3e1191cb39","d2c990da-6381-2399-bfe4-6d5f3d076282"]},"value":1,"unit":""}},{"id":"a-7-n-14","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":100,"target":{"selector":".menu-button.show","selectorGuids":["8bd34f03-6977-28d4-c76e-5c3e1191cb39","38824b83-f205-6890-f918-441d768aab28"]},"value":0,"unit":""}},{"id":"a-7-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":100,"target":{"useEventTarget":"SIBLINGS","selector":".navbar-menu-overlay","selectorGuids":["60b67a82-f8c7-81e4-a167-f6d742996ba1"]},"value":1,"unit":""}}]},{"actionItems":[{"id":"a-7-n-7","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".menu-button.show","selectorGuids":["8bd34f03-6977-28d4-c76e-5c3e1191cb39","38824b83-f205-6890-f918-441d768aab28"]},"value":"none"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1701681708279},"a-5":{"id":"a-5","title":"Navbar Dropdown (open)","actionItemGroups":[{"actionItems":[{"id":"a-5-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".navbar-dropdown-list-wrapper","selectorGuids":["8bd34f03-6977-28d4-c76e-5c3e1191cb34"]},"value":0,"unit":""}},{"id":"a-5-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".navbar-dropdown-list-wrapper","selectorGuids":["8bd34f03-6977-28d4-c76e-5c3e1191cb34"]},"yValue":-6,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]},{"actionItems":[{"id":"a-5-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".navbar-dropdown-list-wrapper","selectorGuids":["8bd34f03-6977-28d4-c76e-5c3e1191cb34"]},"value":"block"}}]},{"actionItems":[{"id":"a-5-n","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"outCirc","duration":350,"target":{"useEventTarget":"CHILDREN","selector":".navbar-item-wrapper","selectorGuids":["8bd34f03-6977-28d4-c76e-5c3e1191cb30"]},"globalSwatchId":"","rValue":0,"bValue":152,"gValue":76,"aValue":1}},{"id":"a-5-n-6","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuint","duration":350,"target":{"useEventTarget":"CHILDREN","selector":".navbar-dropdown-list-wrapper","selectorGuids":["8bd34f03-6977-28d4-c76e-5c3e1191cb34"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-5-n-7","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":100,"target":{"useEventTarget":"CHILDREN","selector":".navbar-dropdown-list-wrapper","selectorGuids":["8bd34f03-6977-28d4-c76e-5c3e1191cb34"]},"value":1,"unit":""}},{"id":"a-5-n-8","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"outQuint","duration":350,"target":{"useEventTarget":"CHILDREN","selector":".navbar-item-icon","selectorGuids":["8bd34f03-6977-28d4-c76e-5c3e1191cb33"]},"xValue":null,"yValue":null,"zValue":-180,"xUnit":"deg","yUnit":"deg","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1701597505825},"a-6":{"id":"a-6","title":"Navbar Dropdown (close)","actionItemGroups":[{"actionItems":[{"id":"a-6-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".navbar-dropdown-list-wrapper","selectorGuids":["8bd34f03-6977-28d4-c76e-5c3e1191cb34"]},"value":"block"}},{"id":"a-6-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".navbar-dropdown-list-wrapper","selectorGuids":["8bd34f03-6977-28d4-c76e-5c3e1191cb34"]},"value":1,"unit":""}},{"id":"a-6-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".navbar-dropdown-list-wrapper","selectorGuids":["8bd34f03-6977-28d4-c76e-5c3e1191cb34"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]},{"actionItems":[{"id":"a-6-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":100,"target":{"useEventTarget":"CHILDREN","selector":".navbar-dropdown-list-wrapper","selectorGuids":["8bd34f03-6977-28d4-c76e-5c3e1191cb34"]},"value":0,"unit":""}},{"id":"a-6-n-7","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":100,"target":{"useEventTarget":"CHILDREN","selector":".navbar-dropdown-list-wrapper","selectorGuids":["8bd34f03-6977-28d4-c76e-5c3e1191cb34"]},"yValue":-6,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-6-n","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":100,"target":{"useEventTarget":"CHILDREN","selector":".navbar-item-icon","selectorGuids":["8bd34f03-6977-28d4-c76e-5c3e1191cb33"]},"xValue":null,"zValue":0,"xUnit":"deg","yUnit":"DEG","zUnit":"deg"}},{"id":"a-6-n-2","actionTypeId":"STYLE_TEXT_COLOR","config":{"delay":0,"easing":"","duration":100,"target":{"useEventTarget":"CHILDREN","selector":".navbar-item-wrapper","selectorGuids":["8bd34f03-6977-28d4-c76e-5c3e1191cb30"]},"globalSwatchId":"","rValue":33,"bValue":39,"gValue":36,"aValue":1}}]},{"actionItems":[{"id":"a-6-n-8","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".navbar-dropdown-list-wrapper","selectorGuids":["8bd34f03-6977-28d4-c76e-5c3e1191cb34"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1701597698562},"a-8":{"id":"a-8","title":"Menu (hide)","actionItemGroups":[{"actionItems":[{"id":"a-8-n-7","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".menu-button.show","selectorGuids":["8bd34f03-6977-28d4-c76e-5c3e1191cb39","38824b83-f205-6890-f918-441d768aab28"]},"value":"block"}},{"id":"a-8-n-17","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".menu-button.show","selectorGuids":["8bd34f03-6977-28d4-c76e-5c3e1191cb39","38824b83-f205-6890-f918-441d768aab28"]},"value":0,"unit":""}},{"id":"a-8-n-10","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".navbar-menu-wrapper","selectorGuids":["8bd34f03-6977-28d4-c76e-5c3e1191cb2e"]},"value":"block"}},{"id":"a-8-n-15","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".navbar-menu-wrapper","selectorGuids":["8bd34f03-6977-28d4-c76e-5c3e1191cb2e"]},"value":0,"unit":""}},{"id":"a-8-n-13","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".navbar-menu-overlay","selectorGuids":["60b67a82-f8c7-81e4-a167-f6d742996ba1"]},"value":"block"}},{"id":"a-8-n-16","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".navbar-menu-overlay","selectorGuids":["60b67a82-f8c7-81e4-a167-f6d742996ba1"]},"value":0,"unit":""}},{"id":"a-8-n-11","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".menu-button.hide","selectorGuids":["8bd34f03-6977-28d4-c76e-5c3e1191cb39","d2c990da-6381-2399-bfe4-6d5f3d076282"]},"value":"block"}}]},{"actionItems":[{"id":"a-8-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":100,"target":{"useEventTarget":"SIBLINGS","selector":".navbar-menu-wrapper","selectorGuids":["8bd34f03-6977-28d4-c76e-5c3e1191cb2e"]},"value":0,"unit":""}},{"id":"a-8-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":350,"target":{"useEventTarget":"SIBLINGS","selector":".navbar-menu-wrapper","selectorGuids":["8bd34f03-6977-28d4-c76e-5c3e1191cb2e"]},"yValue":-24,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-8-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":100,"target":{"selector":".menu-button.hide","selectorGuids":["8bd34f03-6977-28d4-c76e-5c3e1191cb39","d2c990da-6381-2399-bfe4-6d5f3d076282"]},"value":0,"unit":""}},{"id":"a-8-n-5","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"outQuint","duration":200,"target":{"selector":".menu-button.hide","selectorGuids":["8bd34f03-6977-28d4-c76e-5c3e1191cb39","d2c990da-6381-2399-bfe4-6d5f3d076282"]},"xValue":0.35,"yValue":0.35,"locked":true}},{"id":"a-8-n-8","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuint","duration":350,"target":{"selector":".menu-button.show","selectorGuids":["8bd34f03-6977-28d4-c76e-5c3e1191cb39","38824b83-f205-6890-f918-441d768aab28"]},"value":1,"unit":""}},{"id":"a-8-n-9","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"outQuint","duration":350,"target":{"selector":".menu-button.show","selectorGuids":["8bd34f03-6977-28d4-c76e-5c3e1191cb39","38824b83-f205-6890-f918-441d768aab28"]},"xValue":1,"yValue":1,"locked":true}},{"id":"a-8-n-14","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":100,"target":{"selector":".navbar-menu-overlay","selectorGuids":["60b67a82-f8c7-81e4-a167-f6d742996ba1"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-8-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".navbar-menu-wrapper","selectorGuids":["8bd34f03-6977-28d4-c76e-5c3e1191cb2e"]},"value":"none"}},{"id":"a-8-n-6","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".menu-button.hide","selectorGuids":["8bd34f03-6977-28d4-c76e-5c3e1191cb39","d2c990da-6381-2399-bfe4-6d5f3d076282"]},"value":"none"}},{"id":"a-8-n-12","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".navbar-menu-overlay","selectorGuids":["60b67a82-f8c7-81e4-a167-f6d742996ba1"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1701681862928},"a-9":{"id":"a-9","title":"Menu Sublinks (show)","actionItemGroups":[{"actionItems":[{"id":"a-9-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".navbar-dropdown-list-wrapper","selectorGuids":["8bd34f03-6977-28d4-c76e-5c3e1191cb34"]},"value":"block"}}]},{"actionItems":[{"id":"a-9-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"outQuint","duration":350,"target":{"useEventTarget":"CHILDREN","selector":".navbar-item-icon","selectorGuids":["8bd34f03-6977-28d4-c76e-5c3e1191cb33"]},"zValue":180,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1701689323941},"a-10":{"id":"a-10","title":"Menu Sublinks (hide)","actionItemGroups":[{"actionItems":[{"id":"a-10-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".navbar-dropdown-list-wrapper","selectorGuids":["8bd34f03-6977-28d4-c76e-5c3e1191cb34"]},"value":"none"}}]},{"actionItems":[{"id":"a-10-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"outQuint","duration":350,"target":{"useEventTarget":"CHILDREN","selector":".navbar-item-icon","selectorGuids":["8bd34f03-6977-28d4-c76e-5c3e1191cb33"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1701689405545}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}',
);

export function Header({ as: _Component = _Builtin.NavbarWrapper }) {
  _interactions.useInteractions(_interactionsData);

  return (
    <_Component
      className="navbar"
      tag="div"
      config={{
        animation: 'over-right',
        collapse: 'medium',
        docHeight: false,
        duration: 0,
        easing: 'linear',
        easing2: 'linear',
        noScroll: false,
      }}
    >
      <NotificationBar
        title="Snart är det julafton,"
        text="och farmor vill ha sina klappar."
        secondaryBackground={false}
        content="Senaste nytt: Inget."
        aktiv={false}
      />
      <_Builtin.VFlex className="container" editable={false} tag="div">
        <_Builtin.Block className="navbar-wrapper" tag="div">
          <_Builtin.NavbarBrand
            className="navbar-brand"
            options={{
              href: '#',
            }}
          >
            <_Builtin.Image
              className="logo-icon"
              editable={false}
              width="64"
              height="64"
              loading="eager"
              alt=""
              src="https://uploads-ssl.webflow.com/655e29844518537470ba5b0f/655e33434a15645ce5ef1708_logo-square-blue.svg"
            />
          </_Builtin.NavbarBrand>
          <_Builtin.VFlex className="navbar-menu-wrapper" tag="div">
            <_Builtin.Block className="navbar-popover-arrow main-menu" tag="div" />
            <_Builtin.VFlex className="navbar-menu" tag="nav">
              <_Builtin.Block className="navbar-dropdown-item-wrapper" tag="div">
                <_Builtin.Block className="navbar-item-wrapper" editable={true} tag="section">
                  <NavbarDropdownItem label="Engagera dig" />
                </_Builtin.Block>
                <_Builtin.Block className="navbar-dropdown-list-wrapper" tag="div">
                  <_Builtin.Block className="navbar-popover-arrow" tag="div" />
                  <_Builtin.Block className="navbar-dropdown-list" tag="nav">
                    <NavbarDropdownListItem
                      label="Att engagera sig"
                      description=""
                      link={{
                        href: '#',
                      }}
                    />
                    <NavbarDropdownListItem
                      label="Vad kan jag söka?"
                      link={{
                        href: '#',
                      }}
                    />
                    <NavbarDropdownListItem
                      label="Lediga poster"
                      link={{
                        href: '#',
                      }}
                    />
                    <NavbarDropdownListItem
                      label="För engagerade"
                      link={{
                        href: '#',
                      }}
                    />
                    <NavbarDropdownListItem
                      label="Sök volontär/crew"
                      link={{
                        href: '#',
                      }}
                    />
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block className="navbar-dropdown-item-wrapper" tag="div">
                <_Builtin.Block className="navbar-item-wrapper" tag="div">
                  <NavbarDropdownItem label="Dina studier" />
                </_Builtin.Block>
                <_Builtin.Block className="navbar-dropdown-list-wrapper" tag="div">
                  <_Builtin.Block className="navbar-popover-arrow" tag="div" />
                  <_Builtin.Block className="navbar-dropdown-list" tag="nav">
                    <NavbarDropdownListItem
                      label="Din studietid i Uppsala"
                      link={{
                        href: '#',
                      }}
                    />
                    <NavbarDropdownListItem
                      label="Ditt välmående"
                      link={{
                        href: '#',
                      }}
                    />
                    <NavbarDropdownListItem
                      label="Påverka din utbildning"
                      link={{
                        href: '#',
                      }}
                    />
                    <NavbarDropdownListItem
                      label="Studiebevakning"
                      link={{
                        href: '#',
                      }}
                    />
                    <NavbarDropdownListItem
                      label="För sektioner"
                      link={{
                        href: '#',
                      }}
                    />
                    <NavbarDropdownListItem
                      label="Kårsamarbete"
                      link={{
                        href: '#',
                      }}
                    />
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block className="navbar-dropdown-item-wrapper" tag="div">
                <_Builtin.Block className="navbar-item-wrapper" tag="div">
                  <NavbarDropdownItem label="Våra arrangemang" />
                </_Builtin.Block>
                <_Builtin.Block className="navbar-dropdown-list-wrapper" tag="div">
                  <_Builtin.Block className="navbar-popover-arrow" tag="div" />
                  <_Builtin.Block className="navbar-dropdown-list" tag="nav">
                    <NavbarDropdownListItem
                      label="Våra event"
                      link={{
                        href: '#',
                      }}
                    />
                    <NavbarDropdownListItem
                      label="Eventkalender"
                      link={{
                        href: '#',
                      }}
                    />
                    <NavbarDropdownListItem
                      label="Pub på Uthgård"
                      link={{
                        href: '#',
                      }}
                    />
                    <NavbarDropdownListItem
                      label="Café Bocken på Uthgård"
                      link={{
                        href: '#',
                      }}
                    />
                    <NavbarDropdownListItem
                      label="Kårtidningen Techna"
                      link={{
                        href: '#',
                      }}
                    />
                    <NavbarDropdownListItem
                      label="Sök bidrag"
                      link={{
                        href: '#',
                      }}
                    />
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block className="navbar-dropdown-item-wrapper" tag="div">
                <_Builtin.Block className="navbar-item-wrapper" tag="div">
                  <NavbarDropdownItem label="Inför din framtid" />
                </_Builtin.Block>
                <_Builtin.Block className="navbar-dropdown-list-wrapper" tag="div">
                  <_Builtin.Block className="navbar-popover-arrow" tag="div" />
                  <_Builtin.Block className="navbar-dropdown-list" tag="nav">
                    <NavbarDropdownListItem
                      label="Näringslivsanknytning"
                      link={{
                        href: '#',
                      }}
                    />
                    <NavbarDropdownListItem
                      label="Utnarm"
                      link={{
                        href: '#',
                      }}
                    />
                    <NavbarDropdownListItem
                      label="Eventgruppen"
                      link={{
                        href: '#',
                      }}
                    />
                    <NavbarDropdownListItem
                      label="För företag"
                      link={{
                        href: '#',
                      }}
                    />
                    <NavbarDropdownListItem
                      label="Alumn"
                      link={{
                        href: '#',
                      }}
                    />
                    <NavbarDropdownListItem
                      label="Vilka företag vill du träffa?"
                      link={{
                        href: '#',
                      }}
                    />
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block className="navbar-dropdown-item-wrapper" tag="div">
                <_Builtin.Block className="navbar-item-wrapper" tag="div">
                  <NavbarDropdownItem label="Om UTN" />
                </_Builtin.Block>
                <_Builtin.Block className="navbar-dropdown-list-wrapper" tag="div">
                  <_Builtin.Block className="navbar-popover-arrow" tag="div" />
                  <_Builtin.Block className="navbar-dropdown-list" tag="nav">
                    <NavbarDropdownListItem
                      label="Vad gör UTN?"
                      link={{
                        href: '#',
                      }}
                    />
                    <NavbarDropdownListItem
                      label="Bli medlem"
                      link={{
                        href: '#',
                      }}
                    />
                    <NavbarDropdownListItem
                      label="Hur fungerar UTN?"
                      link={{
                        href: '#',
                      }}
                    />
                    <NavbarDropdownListItem
                      label="Vårt miljöarbete"
                      link={{
                        href: '#',
                      }}
                    />
                    <NavbarDropdownListItem
                      label="Sektioner"
                      link={{
                        href: '#',
                      }}
                    />
                    <NavbarDropdownListItem
                      label="Bokningskalender"
                      link={{
                        href: '#',
                      }}
                    />
                    <NavbarDropdownListItem
                      label="Dokumentarkiv"
                      link={{
                        href: '#',
                      }}
                    />
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block className="navbar-dropdown-item-wrapper" tag="div">
                <_Builtin.Block className="navbar-item-wrapper" tag="div">
                  <NavbarDropdownItem label="Kontakta oss" />
                </_Builtin.Block>
                <_Builtin.Block className="navbar-dropdown-list-wrapper" tag="div">
                  <_Builtin.Block className="navbar-popover-arrow" tag="div" />
                  <_Builtin.Block className="navbar-dropdown-list" tag="nav">
                    <NavbarDropdownListItem
                      label="Kontakta oss"
                      link={{
                        href: '#',
                      }}
                    />
                    <NavbarDropdownListItem
                      label="Hyr Uthgård"
                      link={{
                        href: '#',
                      }}
                    />
                    <NavbarDropdownListItem
                      label="Trygghet"
                      link={{
                        href: '#',
                      }}
                    />
                    <NavbarDropdownListItem
                      label="För företag"
                      link={{
                        href: '#',
                      }}
                    />
                    <NavbarDropdownListItem
                      label="Dina studiebevakare"
                      link={{
                        href: '#',
                      }}
                    />
                    <NavbarDropdownListItem
                      label="Lämna feedback"
                      link={{
                        href: '#',
                      }}
                    />
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.VFlex>
          </_Builtin.VFlex>
          <_Builtin.Block
            className="navbar-menu-overlay"
            data-w-id="62b33408-518a-bd6c-a47e-55fa8a1a886b"
            tag="div"
          />
          <_Builtin.Link
            className="menu-button hide"
            data-w-id="122af353-f487-076b-1688-dd1b81b2a3b1"
            button={true}
            block=""
            options={{
              href: '#',
            }}
          >
            {'close'}
          </_Builtin.Link>
          <_Builtin.Link
            className="menu-button show"
            data-w-id="23c8289b-b6ee-d11c-0e4b-dc3321f53b55"
            button={true}
            block=""
            options={{
              href: '#',
            }}
          >
            {'menu'}
          </_Builtin.Link>
        </_Builtin.Block>
      </_Builtin.VFlex>
      <_Builtin.HtmlEmbed value="%3Cstyle%3E%0A%20%20body%20%7B%0A%20%20%20%20text-shadow%3A%201px%201px%201px%20rgba(0%2C0%2C0%2C0.004)%3B%0A%20%20%20%20text-rendering%3A%20optimizeLegibility%20!important%3B%0A%20%20%20%20-webkit-font-smoothing%3A%20antialiased%20!important%3B%0A%20%20%7D%0A%0A%20%20a%3Ahover%20%7B%0A%09%09cursor%3A%20pointer%3B%0A%20%20%7D%0A%20%20%0A%20%20h1%3A%3Aafter%2C%20h2%3A%3Aafter%2C%20h3%3A%3Aafter%2C%20h4%3A%3Aafter%2C%20h5%3A%3Aafter%2C%20h6%3A%3Aafter%20%7B%0A%20%20%20%20height%3A%200.3ch%3B%0A%20%20%20%20margin-top%3A%200.75em%3B%0A%20%20%20%20margin-bottom%3A%201em%3B%0A%20%20%20%20width%3A%203.71875em%3B%0A%20%20%20%20%0A%20%20%20%20min-height%3A%203px%3B%0A%20%20%20%20content%3A%20%22%22%3B%0A%20%20%20%20background-color%3A%20var(--heading-decoration%2C%20rgba(0%2C%200%2C%200%2C%200.1))%3B%0A%20%20%20%20display%3A%20block%3B%0A%20%20%7D%0A%20%20%0A%20%20h1%3Anot(.without-decoration)%2C%20h2%3Anot(.without-decoration)%2C%20h3%3Anot(.without-decoration)%2C%20h4%3Anot(.without-decoration)%2C%20h5%3Anot(.without-decoration)%2C%20h6%3Anot(.without-decoration)%20%7B%0A%20%20%20%20margin-bottom%3A%200%3B%0A%20%20%7D%0A%20%20%0A%20%20.over-dark%20h1%3A%3Aafter%2C%20.over-dark%20h2%3A%3Aafter%2C%20.over-dark%20h3%3A%3Aafter%2C%20.over-dark%20h4%3A%3Aafter%2C%20.over-dark%20h5%3A%3Aafter%2C%20.over-dark%20h6%3A%3Aafter%20%7B%0A%20%20%20%20background-color%3A%20var(--heading-decoration-over-dark%2C%20rgba(255%2C%20255%2C%20255%2C%200.4))%3B%0A%20%20%7D%0A%20%20%0A%20%20.without-decoration%3A%3Aafter%20%7B%0A%20%20%20%20display%3A%20none%3B%0A%20%20%7D%0A%20%20%0A%20%20a%3Aempty%2C%20p%3Aempty%2C%20blockquote%3Aempty%2C%20li%3Aempty%2C%20ul%3Aempty%2C%20ol%3Aempty%2C%20a%3Aempty%2C%20span%3Aempty%2C%20h1%3Aempty%2C%20h2%3Aempty%2C%20h3%3Aempty%2C%20h4%3Aempty%2C%20h5%3Aempty%2C%20h6%3Aempty%20%7B%0A%20%20%20%20display%3A%20none%3B%0A%20%20%7D%0A%20%20%0A%20%20.remove-first-spacing%3Afirst-child%20%7B%0A%20%20%20%20margin-top%3A%200%3B%0A%20%20%7D%0A%20%20%0A%20%20.remove-first-child-spacing%3Afirst-child%20%3E%20*%3Afirst-child%20%7B%0A%20%20%20%20margin-top%3A%200%3B%0A%20%20%7D%0A%3C%2Fstyle%3E" />
    </_Component>
  );
}
