import * as React from "react";
import * as Types from "./types";

declare function NavbarDropdownListItem(props: {
  as?: React.ElementType;
  label?: React.ReactNode;
  link?: Types.Basic.Link;
  description?: React.ReactNode;
  arrow?: React.ReactNode;
  showDescription?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
