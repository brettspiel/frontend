import { connect } from "../../state";
import { GlobalMenuComponent } from "./GlobalMenuComponent";

export const GlobalMenu = connect((_, dispatch) => ({
  handleClickLogout: () => dispatch({ user: undefined }),
}))(
  GlobalMenuComponent
);
