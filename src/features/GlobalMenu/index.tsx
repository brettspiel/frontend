import { connect } from "react-redux";
import { GlobalMenuComponent } from "./GlobalMenuComponent";
import { Dispatch } from "redux";
import {deleteUser} from "../../actions/user";

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  handleClickLogout: () => {
    dispatch(deleteUser());
  }
});

export const GlobalMenu = connect(null, mapDispatchToProps)(
  GlobalMenuComponent
);
