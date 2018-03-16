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
    dispatch: () => console.log(1),
  }

  const { Provider, Consumer } = createReactContext<CirquitContext<State>>(cirquitContext);

  class CirquitProvider extends React.Component<{}, State> {
    constructor(props: {}) {
      super(props);
      this.state = defaultValue;
    }

    render() {
      return (
        <Provider value={{ state: this.state, dispatch: this.setState.bind(this) }}>{this.props.children}</Provider>
      );
    }
  }

  const connect = <TProps extends {}>
  (mapToProps: MapToProps<State, TProps>) =>
    <ComponentProps extends {}>(Child: React.ComponentClass<ComponentProps>): React.SFC<any> => {
    return props => (
      <Consumer>
        {ctx => (
          <Child {...props} {...mapToProps(ctx.state, ctx.dispatch)} />
        )}
      </Consumer>
    );
  }

  return {
    Provider: CirquitProvider,
    connect
  };
};
