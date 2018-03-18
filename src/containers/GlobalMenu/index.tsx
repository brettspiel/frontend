import { connect } from "../../state";
import { GlobalMenuComponent } from "./GlobalMenuComponent";
import {User} from "../../domain/models/User";
import * as React from "react";

export interface OwnProps {
  render: (() => React.ReactNode);
  user: User;
}

export const GlobalMenu = connect((_, dispatch, ownProps: OwnProps) => ({
  handleClickLogout: () => dispatch({ user: undefined }),
  ...ownProps
}))(
  GlobalMenuComponent
);
