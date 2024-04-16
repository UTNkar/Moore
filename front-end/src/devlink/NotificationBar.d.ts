import * as React from "react";
import * as Types from "./types";

declare function NotificationBar(props: {
  as?: React.ElementType;
  title?: React.ReactNode;
  text?: React.ReactNode;
  aktiv?: Types.Visibility.VisibilityConditions;
  secondaryBackground?: Types.Visibility.VisibilityConditions;
  content?: Types.Basic.RichTextChildren;
}): React.JSX.Element;
