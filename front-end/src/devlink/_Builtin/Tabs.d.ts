import * as React from "react";
import { EASING_FUNCTIONS } from "../utils";
import { Props } from "./Basic";
type TabsWrapperProps = Props<
  "div",
  {
    current: string;
    easing: keyof typeof EASING_FUNCTIONS;
    fadeIn: number;
    fadeOut: number;
    children?:
      | React.ReactElement<TabsMenuProps | TabsContentProps>[]
      | React.ReactElement<TabsMenuProps | TabsContentProps>;
  }
>;
export declare function TabsWrapper({
  className,
  fadeIn,
  fadeOut,
  easing,
  current: initialCurrent,
  ...props
}: TabsWrapperProps): any;
type TabsMenuProps = {
  tag?: React.ElementType;
  className?: string;
  children?: React.ReactElement<TabsLinkProps>[];
};
export declare function TabsMenu({
  tag,
  className,
  ...props
}: TabsMenuProps): any;
type TabsLinkProps = Props<
  "a",
  {
    "data-w-tab": string;
  }
>;
export declare function TabsLink({
  className,
  children,
  ...props
}: TabsLinkProps): any;
type TabsContentProps = {
  tag?: React.ElementType;
  className?: string;
  children?:
    | React.ReactElement<TabsPaneProps>[]
    | React.ReactElement<TabsPaneProps>;
};
export declare function TabsContent({
  tag,
  className,
  ...props
}: TabsContentProps): any;
type TabsPaneProps = React.PropsWithChildren<{
  tag?: React.ElementType;
  className?: string;
  "data-w-tab": string;
}>;
export declare function TabsPane({
  tag,
  className,
  ...props
}: TabsPaneProps): any;
export {};
