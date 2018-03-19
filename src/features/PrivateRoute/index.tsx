import * as React from "react";
import { UserState } from "../../modules/user";
import { connect } from "react-redux";
import { StoreState } from "../../modules";
import { Route, RouteProps } from "react-router-dom";
import { Redirect, RouteComponentProps } from "react-router";
import { User } from "../../domain/models/User";
import { Overwrite } from "utility-types";
import { GlobalMenu } from "../GlobalMenu";

export interface InjectedProps {
  user: UserState;
}

export interface AdditionalRenderProps {
  user: User;
}

export interface HijackedProps {
  render: ((
    props: RouteComponentProps<any> & AdditionalRenderProps
  ) => React.ReactNode);
}

export type ExternalProps = Overwrite<RouteProps, HijackedProps>;

export class PrivateRouteHoC extends React.Component<
  InjectedProps & ExternalProps
> {
  render() {
    const { user, render, ...otherProps } = this.props;

    if (!user.id || !user.name) {
      return <Redirect to="/login" />;
    }

    const userModel: User = {
      id: user.id,
      name: user.name
    };

    return (
      <Route
        {...otherProps}
        render={props => (
          <GlobalMenu
            user={userModel}
            render={() =>
              render({
                ...props,
                user: userModel,
              })
            }
          />
        )}
      />
    );
  }
}

const mapStateToProps = (state: StoreState, ownProps: ExternalProps) => ({
  ...ownProps,
  user: state.user,
});

export const PrivateRoute = connect(mapStateToProps)(PrivateRouteHoC);
