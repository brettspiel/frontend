import * as React from "react";
import {connect, State} from "../state";
import { User } from "../domain/models/User";
import { Redirect } from "react-router";
import { GlobalMenu } from "../features/GlobalMenu";

export interface Props {
  user: State["user"];
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

  const mapToProps = (state: State) => ({
    user: state.user
  });

  return React.createElement(connect(mapToProps)(WithLogin));
};
