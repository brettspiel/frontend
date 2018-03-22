import * as React from "react";
import { connect } from "react-redux";
import { User } from "../domain/models/User";
import { Redirect } from "react-router";
import { GlobalMenu } from "../features/GlobalMenu";
import { State } from "../state";

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

      return <GlobalMenu user={user} render={() => render(user)} />;
    }
  }

  const mapStateToProps = (state: State) => ({
    user: state.user
  });

  return React.createElement(connect(mapStateToProps)(WithLogin));
};
