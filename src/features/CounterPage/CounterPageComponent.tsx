import * as React from "react";
import { CounterPresenter } from "./CounterPresenter";

export interface Props {
  count: number;
  presenter: CounterPresenter;
}

export class CounterPageComponent extends React.Component<Props> {
  render() {
    return (
      <div>
        <h1>count: {this.props.count}</h1>
        <button onClick={() => this.props.presenter.increment(1)}>
          increment 1
        </button>
        <button onClick={() => this.props.presenter.incrementAsync(1)}>
          increment 1 async
        </button>
      </div>
    );
  }
}
