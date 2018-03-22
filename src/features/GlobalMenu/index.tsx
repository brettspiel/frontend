import { connect } from "react-redux";
import { GlobalMenuComponent } from "./GlobalMenuComponent";
import { Dispatch } from "redux";
import {cirquit} from "../../modules/cirquit";

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  handleClickLogout: () => {
    dispatch(cirquit(state => {
      const { user, ...otherState } = state;
      return { ...otherState };
    }));
  }
});

export const GlobalMenu = connect(null, mapDispatchToProps)(
  GlobalMenuComponent
);
