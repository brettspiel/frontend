import * as React from "react";
import createReactContext from "create-react-context";

export interface CirquitContext<State> {
  state: State;
  dispatch: Dispatch<State>;
}

export interface Dispatch<State> {
  <K extends keyof State>(state: (Pick<State, K> | State | null)): void;
}

export interface MapToProps<State, OwnProps, TProps> {
  // (state: State): TProps;
  (state: State, dispatch: Dispatch<State>, ownProps: OwnProps): TProps;
  // (state: State, dispatch: Dispatch<State>, ownProps: OwnProps): TProps;
}

export function initialize<State>(defaultValue: State) {
  const cirquitContext: CirquitContext<State> = {
    state: defaultValue,
    dispatch: () => null as never,
  }

  const { Provider, Consumer } = createReactContext<CirquitContext<State>>(cirquitContext);

  class CirquitProvider extends React.Component<{}, State> {
    constructor(props: {}) {
      super(props);
      this.state = defaultValue;
    }

    componentDidUpdate() {
      console.log("@this.state", this.state);
    }

    render() {
      return React.createElement(
        Provider,
        {
          value: { state: this.state, dispatch: this.setState.bind(this) },
          children: this.props.children
        }
      );
    }
  }

  const connect = <OwnProps, TProps>
  (mapToProps: MapToProps<State, OwnProps, TProps>) =>
    (Child: React.ComponentClass<OwnProps>): React.SFC<any> => {
    return props => React.createElement(
      Consumer,
      {
        children: (ctx: CirquitContext<State>) => React.createElement(
          Child,
          Object.assign({}, props, mapToProps(ctx.state, ctx.dispatch, props))
        )
      }
    );
  }

  return {
    Provider: CirquitProvider,
    connect
  };
};
