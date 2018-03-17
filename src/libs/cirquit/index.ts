import * as React from "react";
import createReactContext from "create-react-context";
import {Assign, Diff} from "utility-types";

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

export interface Connect {
  <State extends object, OwnProps extends object, TProps extends object>(
    mapToProps: MapToProps<State, OwnProps, TProps>
  ): Enhancer<TProps, OwnProps>;
}

export interface Enhancer<InjectedProps extends object, NeedsProps extends object> {
  <P extends InjectedProps>(
    component: React.Component<P>
  ): React.ComponentClass<Diff<P, InjectedProps> & NeedsProps & { WrappedComponent: React.Component<P> }>
}

export function createWires<State>(defaultValue: State) {
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

  const connect = <OwnProps extends object, TProps extends object>(
    mapToProps: MapToProps<State, OwnProps, TProps>
  ) => (
    Cmp: React.ComponentClass<Assign<TProps, OwnProps>>
  ): React.ComponentClass<Diff<OwnProps, TProps>> => {
    return class Connected extends React.Component<Diff<OwnProps, TProps>> {
      render() {
        return React.createElement(
          Consumer,
          {
            children: (ctx: CirquitContext<State>) => React.createElement(
              Cmp,
              Object.assign(
                {},
                this.props,
                mapToProps(ctx.state, ctx.dispatch, this.props as OwnProps)
              ) as Assign<TProps, OwnProps>
            )
          }
        );
      }
    }
  }

  return {
    Provider: CirquitProvider,
    connect
  };
};
