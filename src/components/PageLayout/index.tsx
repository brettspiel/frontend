import * as React from 'react';
import {GlobalMenu} from "../GlobalMenu";

export interface Props {
  render: (() => React.ReactNode);
}

export class PageLayout extends React.Component<Props> {
  render() {
    return (
      <div>
        <GlobalMenu render={this.props.render}/>
      </div>
    );
  }
}
