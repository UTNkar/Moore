import * as React from "react";
import { EASING_FUNCTIONS } from "../utils";
import { LinkProps, TagProps } from "./Basic";
declare const BREAKPOINTS: {
  medium: number;
  small: number;
  tiny: number;
};
type NavbarConfig = {
  animation: string;
  collapse: keyof typeof BREAKPOINTS;
  docHeight: boolean;
  duration: number;
  easing: keyof typeof EASING_FUNCTIONS;
  easing2: keyof typeof EASING_FUNCTIONS;
  noScroll: boolean;
};
export declare const NavbarContext: any;
type NavbarChildrenType =
  | NavbarContainerProps
  | NavbarBrandProps
  | NavbarMenuProps
  | NavbarButtonProps;
type NavbarProps = {
  tag: React.ElementType;
  config: NavbarConfig;
  className?: string;
  children?:
    | React.ReactElement<NavbarChildrenType>[]
    | React.ReactElement<NavbarChildrenType>;
};
export declare function NavbarWrapper(props: NavbarProps): any;
type NavbarContainerProps = TagProps & {
  toggleOpen: () => void;
  isOpen: boolean;
  children: React.ReactNode;
};
export declare function NavbarContainer({
  children,
  ...props
}: NavbarContainerProps): any;
type NavbarBrandProps = LinkProps;
export declare function NavbarBrand({
  className,
  ...props
}: NavbarBrandProps): any;
type NavbarMenuProps = React.PropsWithChildren<{
  tag?: React.ElementType;
  className?: string;
  isOpen?: boolean;
}>;
export declare function NavbarMenu({
  tag,
  className,
  ...props
}: NavbarMenuProps): any;
type NavbarLinkProps = LinkProps;
export declare function NavbarLink({
  className,
  ...props
}: NavbarLinkProps): any;
type NavbarButtonProps = React.PropsWithChildren<{
  tag?: React.ElementType;
  className?: string;
}>;
export declare function NavbarButton({
  tag,
  className,
  ...props
}: NavbarButtonProps): any;
export {};
