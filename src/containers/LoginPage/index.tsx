import { connect } from "react-redux";
import { LoginPageComponent } from "./LoginPageComponent";
import {LoginPagePresenter} from "./LoginPagePresenter";

const mapDispatchToProps = () => ({ presenter: new LoginPagePresenter() })

export const LoginPage = connect(null, mapDispatchToProps)(LoginPageComponent);
