import * as React from "react";
import * as Types from "./types";

declare function ToDoNotice(props: {
  as?: React.ElementType;
  content?: Types.Basic.RichTextChildren;
  visible?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
