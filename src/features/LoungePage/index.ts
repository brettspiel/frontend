import {connect} from "react-redux";
import {Dispatch} from "redux";
import { LoungePageComponent } from "./LoungePageComponent";
import {LoungePagePresenter} from "./LoungePagePresenter";
import {User} from "../../domain/models/User";

export interface OwnProps {
  socket: SocketIOClient.Socket;
  user: User;
}

const mapDispatchToProps = (dispatch: Dispatch<any>, ownProps: OwnProps) => ({
  user: ownProps.user,
  presenter: new LoungePagePresenter(dispatch, ownProps.socket, ownProps.user)
})

export const LoungePage = connect(
  null,
  mapDispatchToProps
)(LoungePageComponent);
