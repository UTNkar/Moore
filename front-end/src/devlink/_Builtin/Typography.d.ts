import * as React from "react";
import { type Props } from "./Basic";
type HeadingProps = React.PropsWithChildren<{
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}> &
  React.HTMLAttributes<HTMLHeadingElement>;
export declare function Heading({ tag, ...props }: HeadingProps): any;
export declare function Paragraph(props: Props<"p">): any;
export declare function Emphasized(props: Props<"em">): any;
export declare function Strong(props: Props<"strong">): any;
type FigureProps = Props<"figure"> & {
  figure: {
    align: string;
    type: string;
  };
};
export declare function Figure({
  className,
  figure,
  ...props
}: FigureProps): any;
export declare function Figcaption(props: Props<"figcaption">): any;
export declare function Subscript(props: Props<"sub">): any;
export declare function Superscript(props: Props<"sup">): any;
export declare function RichText({
  tag,
  className,
  ...props
}: Props<
  "div",
  {
    tag?: React.ElementType;
  }
>): any;
export {};
