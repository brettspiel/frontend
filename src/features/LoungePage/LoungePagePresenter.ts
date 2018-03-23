import { User } from "../../domain/models/User";
import { ChatSendFormValue } from "./LoungePageComponent";
import { Dispatch } from "react-redux";
import { LoungeChatRepository } from "../../domain/repositories/LoungeChatRepository";
import { setLoungeChatMessages } from "../../actions/loungeChat";

export class LoungePagePresenter {
  constructor(
    private dispatch: Dispatch<any>,
    private loungeChatRepository: LoungeChatRepository,
    private user: User
  ) {
    this.loungeChatRepository.onUpdate(messages =>
      this.dispatch(setLoungeChatMessages(messages))
    );
  }

  handleSubmitChatMessage(values: ChatSendFormValue) {
    this.loungeChatRepository.add(this.user, values.message);
  }
}
