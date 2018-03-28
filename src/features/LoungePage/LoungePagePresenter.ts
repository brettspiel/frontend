import { User } from "../../domain/models/User";
import { Dispatch } from "react-redux";
import { LoungeChatRepository } from "../../domain/repositories/LoungeChatRepository";
import { setLoungeChatMessages } from "../../actions/loungeChat";

export class LoungePagePresenter {
  constructor(
    private dispatch: Dispatch<any>,
    private loungeChatRepository: LoungeChatRepository
  ) {
    this.loungeChatRepository.onUpdate(messages =>
      this.dispatch(setLoungeChatMessages(messages))
    );
  }

  handleSubmitChatMessage = async (
    user: User,
    message: string
  ): Promise<void> => {
    this.loungeChatRepository.add(user, message);
  };
}
