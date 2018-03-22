import { connect } from "react-redux";
import { GlobalMenuComponent } from "./GlobalMenuComponent";
import { Dispatch } from "redux";
import {cirquit} from "../../libs/redux-cirquit";
import {CirquitState} from "../../modules";

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  handleClickLogout: () => {
    dispatch(cirquit<CirquitState>(state => {
      const { user, ...otherState } = state;
      return { ...otherState };
    }));
  }
});

export const GlobalMenu = connect(null, mapDispatchToProps)(
  GlobalMenuComponent
);
