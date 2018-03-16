import * as React from "react";
import createReactContext from "create-react-context";

interface CirquitContext<State> {
  state: State;
  dispatch: Dispatch<State>;
}

interface Dispatch<State> {
  (nextState: State): void;
}

interface MapToProps<State, TProps> {
  (state: State, dispatch: Dispatch<State>): TProps;
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

  const connect = <TProps extends {}>
  (mapToProps: MapToProps<State, TProps>) =>
    <ComponentProps extends {}>(Child: React.ComponentClass<ComponentProps>): React.SFC<any> => {
    return props => React.createElement(
      Consumer,
      {
        children: (ctx: CirquitContext<State>) => React.createElement(
          Child,
          Object.assign({}, props, mapToProps(ctx.state, ctx.dispatch))
        )
      }
    );
  }

  return {
    Provider: CirquitProvider,
    connect
  };
};
