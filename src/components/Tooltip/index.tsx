import * as React from "react";
import "./styles.css";

export interface Props {
  text?: string;
  position?: "up" | "down" | "left" | "right";
  size?: "small" | "medium" | "large" | "fit";
  [key: string]: any;
}

export class Tooltip extends React.Component<Props> {
  render() {
    if (React.isValidElement<any>(this.props.children)) {
      const {
        text,
        position,
        size,
        children,
        ...otherProps
      } = this.props;
      const el = React.cloneElement(children, {
        "data-balloon": text,
        "data-balloon-pos": position || "up",
        "data-balloon-length": size,
        "data-balloon-visible": text ? "" : undefined,
        ...otherProps
      });
      return el;
    } else {
      return null;
    }
  }
}
