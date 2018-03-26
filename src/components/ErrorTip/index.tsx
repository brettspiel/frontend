import * as React from "react";
import { Tooltip } from "../Tooltip";
import "./styles.css";

export interface Props {
  error?: string;
  [key: string]: any;
}

export class ErrorTip extends React.Component<Props> {
  render() {
    const { error, children, ...otherProps } = this.props;
    return (
      <Tooltip
        text={error}
        data-balloon-error-message-target-element
        {...otherProps}
      >
        {children}
      </Tooltip>
    );
  }
}
