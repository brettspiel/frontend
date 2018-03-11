import { connect } from "react-redux";
import { LoginPageComponent } from "./LoginPageComponent";
import { LoginPagePresenter } from "./LoginPagePresenter";
import { Dispatch } from "redux";

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  presenter: new LoginPagePresenter(dispatch)
});

export const LoginPage = connect(null, mapDispatchToProps)(LoginPageComponent);
