import * as React from "react";
import {connect, State} from "../../state";
import { Route, RouteProps } from "react-router-dom";
import {Redirect, RouteComponentProps} from "react-router";
import { User } from "../../domain/models/User";
import { Assign } from "utility-types";
import * as io from "socket.io-client";
import { GlobalMenu } from "../GlobalMenu";

export interface InjectedProps {
  user: State["user"];
  server: State["server"];
}

export interface AdditionalRenderProps {
  user: User;
  socketManager: SocketIOClient.Manager;
}

export interface HijackedProps {
  render: ((
    props: RouteComponentProps<any> & AdditionalRenderProps
  ) => React.ReactNode);
}

export type OwnProps = Assign<RouteProps, HijackedProps>;

export class PrivateRouteHoC extends React.Component<
  Assign<InjectedProps, OwnProps>
> {
  render() {
    const { user, server, render, ...otherProps } = this.props;

    if (!user) {
      return <Redirect to="/login" />;
    }
    if (!server) {
      return <Redirect to="/login" />;
    }

    return (
      <Route
        {...otherProps}
        render={props => (
          <GlobalMenu
            user={user}
            render={() =>
              render({
                ...props,
                user,
                socketManager: io.Manager(
                  `${server.protocol}//${server.host}:${server.port}`
                )
              })
            }
          />
        )}
      />
    );
  }
}

export const PrivateRoute = connect((state: State, _, ownProps: OwnProps) => {
  return ({
    user: state.user,
    server: state.server,
    ...ownProps
  });
})(PrivateRouteHoC);
