import * as React from "react";
import { connect } from "react-redux";
import {StoreState} from "../modules";
import {UserState} from "../modules/user";
import {User} from "../domain/models/User";
import {Redirect} from "react-router";
import {GlobalMenu} from "../features/GlobalMenu";

export interface Props {
  user: UserState;
}

export const withLogin = (
  render: (user: User) => React.ReactNode
) => {
  class WithLogin extends React.Component<Props> {
    render() {
      const { user } = this.props;
      if (!user.id || !user.name) {
        return <Redirect to="/login" />;
      }

      const refinedUser: User = {
        id: user.id,
        name: user.name
      };

      return (
        <GlobalMenu
          user={refinedUser}
          render={() => render(refinedUser)}
        />
      );
    }
  }

  const mapStateToProps = (state: StoreState) => ({
    user: state.user
  });

  return React.createElement(connect(mapStateToProps)(WithLogin));
}
