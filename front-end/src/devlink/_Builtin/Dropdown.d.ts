import * as React from "react";
import { LinkProps } from "./Basic";
type DropdownProps = React.PropsWithChildren<{
  tag?: keyof HTMLElementTagNameMap;
  className?: string;
}>;
type DropdownWrapperProps = DropdownProps & {
  children: React.ReactElement<DropdownToggleProps | DropdownListProps>;
  delay: number;
  hover: boolean;
};
export declare function DropdownWrapper({
  delay,
  hover,
  ...props
}: DropdownWrapperProps): any;
type DropdownToggleProps = DropdownProps;
export declare function DropdownToggle({
  tag,
  className,
  ...props
}: DropdownToggleProps): any;
type DropdownListProps = DropdownProps & {
  children:
    | React.ReactElement<DropdownLinkProps>
    | React.ReactElement<DropdownLinkProps>[];
};
export declare function DropdownList({
  tag,
  className,
  ...props
}: DropdownListProps): any;
type DropdownLinkProps = DropdownProps & LinkProps;
export declare function DropdownLink({
  className,
  ...props
}: DropdownLinkProps): any;
export {};
