import {connect} from "react-redux";
import {Dispatch} from "redux";
import { LoungePageComponent } from "./LoungePageComponent";
import {LoungePagePresenter} from "./LoungePagePresenter";
import {User} from "../../domain/models/User";
import {LoungeChatRepository} from "../../domain/repositories/LoungeChatRepository";
import {State} from "../../state";

export interface OwnProps {
  socket: SocketIOClient.Socket;
  user: User;
}

const mapStateToProps = (state: State, ownProps: OwnProps) => ({
  user: ownProps.user,
  chatMessages: state.lounge.chatMessages
});

const mapDispatchToProps = (dispatch: Dispatch<any>, ownProps: OwnProps) => ({
  presenter: new LoungePagePresenter(
    dispatch,
    new LoungeChatRepository(ownProps.socket),
    ownProps.user
  )
})

export const LoungePage = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoungePageComponent);
