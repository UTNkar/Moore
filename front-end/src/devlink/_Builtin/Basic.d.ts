import * as React from "react";
export type ElementProps<T extends keyof HTMLElementTagNameMap> =
  React.HTMLAttributes<HTMLElementTagNameMap[T]>;
export type Props<
  T extends keyof HTMLElementTagNameMap,
  U = unknown
> = ElementProps<T> & React.PropsWithChildren<U>;
type BlockProps = React.PropsWithChildren<{
  tag?: React.ElementType;
}> &
  React.HTMLAttributes<HTMLOrSVGElement>;
export declare function Block({ tag, ...props }: BlockProps): any;
export declare function Span(props: Props<"span">): any;
export declare function Blockquote(props: Props<"blockquote">): any;
export type LinkProps = Props<
  "a",
  {
    options?: {
      href: string;
      target?: "_self" | "_blank";
      preload?: "none" | "prefetch" | "prerender";
    };
    className?: string;
    button?: boolean;
    block?: string;
  }
>;
export declare const Link: ({
  options,
  className,
  button,
  children,
  block,
  ...props
}: LinkProps) => any;
type ListProps = Props<
  "ul",
  {
    tag?: React.ElementType;
    unstyled?: boolean;
  }
>;
export declare function List({
  tag,
  unstyled,
  className,
  ...props
}: ListProps): any;
export declare function ListItem(props: Props<"li">): any;
type ImageProps = React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>;
export declare function Image({ alt, ...props }: ImageProps): any;
export declare function Section({
  tag,
  ...props
}: Props<
  "section",
  {
    tag: React.ElementType;
  }
>): any;
export type TagProps = Props<
  keyof HTMLElementTagNameMap,
  {
    tag?: React.ElementType;
  }
>;
export declare const Container: any;
export declare function BlockContainer({
  tag,
  className,
  ...props
}: TagProps): any;
export declare function HFlex({ tag, className, ...props }: TagProps): any;
export declare function VFlex({ tag, className, ...props }: TagProps): any;
export declare function Layout({ tag, className, ...props }: TagProps): any;
export declare function Cell({ tag, className, ...props }: TagProps): any;
type HtmlEmbedProps = Props<
  "div",
  {
    tag?: React.ElementType;
    value: string;
  }
>;
export declare function HtmlEmbed({
  tag,
  className,
  value,
  ...props
}: HtmlEmbedProps): any;
export declare function Grid({
  tag,
  className,
  ...props
}: {
  [x: string]: any;
  tag?: string | undefined;
  className?: string | undefined;
}): any;
type IconProps = Props<
  "div",
  {
    widget: {
      icon: string;
    };
  }
>;
export declare function Icon({ widget, className, ...props }: IconProps): any;
type ColumnProps = Props<
  "div",
  {
    tag: React.ElementType;
    columnClasses?: string;
  }
>;
export declare function Column({
  tag,
  className,
  columnClasses,
  ...props
}: ColumnProps): any;
type RowProps = Props<
  "div",
  {
    children: React.ReactElement<ColumnProps>[];
    tag: React.ElementType;
    columns: {
      [key: string]: string;
    };
    value: string;
  }
>;
export declare function Row({
  tag,
  className,
  columns,
  children,
  ...props
}: RowProps): any;
export declare function NotSupported({
  _atom,
}: Props<
  "div",
  {
    _atom?: string;
  }
>): any;
export {};
