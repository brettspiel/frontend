import { connect } from "../../state";
import { LoginPageComponent } from "./LoginPageComponent";
import { LoginPagePresenter } from "./LoginPagePresenter";

export const LoginPage = connect((_, dispatch) => ({
  presenter: new LoginPagePresenter(dispatch)
}))(LoginPageComponent);
