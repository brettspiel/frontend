import * as React from "react";
import { connect } from "./state";

interface Props {
  count: number;
  increment: () => void;
}

class CntComponent extends React.Component<Props> {
  render() {
    return (
      <h1 onClick={() => this.props.increment()}>
        {this.props.count} {JSON.stringify(this.props)}
      </h1>
    );
  }
}

export const Cnt = connect((state, dispatch) => ({
  count: state.counter.count,
  increment: () => dispatch({ counter: { count: state.counter.count + 1 } })
}))(CntComponent);
