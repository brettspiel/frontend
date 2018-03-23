import {User} from "../../domain/models/User";
import {ChatSendFormValue} from "./LoungePageComponent";
import {Dispatch} from "react-redux";

export class LoungePagePresenter {
  constructor(
    private dispatch: Dispatch<any>,
    private socket: SocketIOClient.Socket,
    private user: User
  ) {}

  handleSubmitChatMessage(values: ChatSendFormValue) {
    console.log("@values", values);
  }
}
