import * as React from "react";
import { connect } from "react-redux";
import { StoreState } from "../modules";
import { User } from "../domain/models/User";
import { Redirect } from "react-router";
import { GlobalMenu } from "../features/GlobalMenu";

export interface Props {
  user: User;
}

export const withLogin = (render: (user: User) => React.ReactNode) => {
  class WithLogin extends React.Component<Props> {
    render() {
      const { user } = this.props;
      if (!user) {
        return <Redirect to="/login" />;
      }

      return (
        <GlobalMenu user={user} render={() => render(user)} />
      );
    }
  }

  const mapStateToProps = (state: StoreState) => ({
    user: state.cirquit.user
  });

  return React.createElement(connect(mapStateToProps)(WithLogin));
};
