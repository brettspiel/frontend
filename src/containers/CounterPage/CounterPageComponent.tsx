import * as React from 'react';
import {CounterActionDispatcher} from "./CounterActionDispatcher";

export interface Props {
  count: number;
  counterActionDispatcher: CounterActionDispatcher;
}

export class CounterPageComponent extends React.Component<Props> {
  render() {
    return (
      <div>
        <h1>
          count: {this.props.count}
        </h1>
        <button onClick={() => this.props.counterActionDispatcher.increment(1)}>increment 1</button>
        <button onClick={() => this.props.counterActionDispatcher.incrementAsync(1)}>increment 1 async</button>
      </div>
    );
  }
}
