import { connect } from "react-redux";
import { Dispatch } from "redux";
import { LoungePageComponent } from "./LoungePageComponent";
import { LoungePagePresenter } from "./LoungePagePresenter";
import { User } from "../../domain/models/User";
import { LoungeChatRepository } from "../../domain/repositories/LoungeChatRepository";
import { ReduxState } from "../../store";

export interface OwnProps {
  socket: SocketIOClient.Socket;
  user: User;
}

const mapStateToProps = (state: ReduxState, ownProps: OwnProps) => ({
  user: ownProps.user,
  chatMessages: state.app.lounge.chatMessages
});

const mapDispatchToProps = (dispatch: Dispatch<any>, ownProps: OwnProps) => ({
  presenter: new LoungePagePresenter(
    dispatch,
    new LoungeChatRepository(ownProps.socket)
  )
});

export const LoungePage = connect(mapStateToProps, mapDispatchToProps)(
  LoungePageComponent
);
