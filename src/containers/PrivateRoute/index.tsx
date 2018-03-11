import * as React from "react";
import { UserState } from "../../modules/user";
import { ServerState } from "../../modules/server";
import { connect } from "react-redux";
import { StoreState } from "../../modules";
import { Route, RouteProps } from "react-router-dom";
import { Redirect, RouteComponentProps } from "react-router";
import { User } from "../../domain/models/User";
import { Overwrite } from "utility-types";

export interface InjectedProps {
  user: UserState;
  server: ServerState;
}

export interface HijackedProps {
  render: ((
    props: RouteComponentProps<any> & { user: User; serverUrl: string }
  ) => React.ReactNode);
}

export type ExternalProps = Overwrite<RouteProps, HijackedProps>;

export class PrivateRouteHoC extends React.Component<
  InjectedProps & ExternalProps
> {
  render() {
    const { user, server, render, ...otherProps } = this.props;

    if (!user.id || !user.name) {
      return <Redirect to="/login" />;
    }
    if (!server.protocol || !server.host || !server.port) {
      return <Redirect to="/login" />;
    }

    const userModel: User = {
      id: user.id,
      name: user.name
    };

    return (
      <Route
        {...otherProps}
        render={props =>
          render({
            ...props,
            user: userModel,
            serverUrl: `${server.protocol}//${server.host}:${server.port}`
          })
        }
      />
    );
  }
}

const mapStateToProps = (state: StoreState, ownProps: ExternalProps) => ({
  ...ownProps,
  user: state.user,
  server: state.server
});

export const PrivateRoute = connect(mapStateToProps)(PrivateRouteHoC);
