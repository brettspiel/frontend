import * as React from "react";

export interface Props {
  text: string;
  position?: 'up' | 'down' | 'left' | 'right';
  size?: 'small' | 'medium' | 'large' | 'fit';
  visible?: boolean;
}

export class Tooltip extends React.Component<Props> {
  render() {
    if (React.isValidElement<any>(this.props.children)) {
      return React.cloneElement(this.props.children, {
        'data-balloon': this.props.text,
        'data-balloon-pos': this.props.position || 'up',
        'data-balloon-length': this.props.size,
        'data-balloon-visible': this.props.visible
      });
    } else {
      return null;
    }
  }
}
