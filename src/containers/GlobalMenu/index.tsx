import { connect } from "react-redux";
import {GlobalMenuComponent} from "./GlobalMenuComponent";
import {Dispatch} from "redux";
import {userActions} from "../../modules/user";

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  handleClickLogout: () => {
    dispatch(userActions.delete());
  }
});

export const GlobalMenu = connect(null, mapDispatchToProps)(GlobalMenuComponent);
