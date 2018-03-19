import * as React from "react";
import createReactContext from "create-react-context";

export interface CirquitContext<State> {
  state: State;
  dispatch: Dispatch<State>;
}

export interface Dispatch<State> {
  <K extends keyof State>(state: Pick<State, K> | State | null): void;
}

export interface MapToProps<State, OwnProps, TProps> {
  // (state: State): TProps;
  (state: State, dispatch: Dispatch<State>, ownProps: OwnProps): TProps;
  // (state: State, dispatch: Dispatch<State>, ownProps: OwnProps): TProps;
}

export function createWires<State>(defaultValue: State) {
  const cirquitContext: CirquitContext<State> = {
    state: defaultValue,
    dispatch: () => null as never
  };

  const { Provider, Consumer } = createReactContext<CirquitContext<State>>(
    cirquitContext
  );

  class CirquitProvider extends React.Component<{}, State> {
    constructor(props: {}) {
      super(props);
      this.state = defaultValue;
    }

    render() {
      console.log("@this.state", this.state);
      return React.createElement(Provider, {
        value: { state: this.state, dispatch: this.setState.bind(this) },
        children: this.props.children
      });
    }
  }

  const connect = <OwnProps extends object, TProps extends object>(
    mapToProps: MapToProps<State, OwnProps, TProps>
  ) => (Cmp: React.ComponentClass<TProps>): React.ComponentClass<OwnProps> => {
    return class Connected extends React.Component<OwnProps> {
      render() {
        return React.createElement(Consumer, {
          children: (ctx: CirquitContext<State>) => {
            return React.createElement(
              Cmp,
              mapToProps(ctx.state, ctx.dispatch, this.props)
            )
          }
        });
      }
    };
  };

  return {
    Provider: CirquitProvider,
    connect
  };
}
