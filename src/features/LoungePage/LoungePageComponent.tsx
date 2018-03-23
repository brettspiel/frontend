import * as React from "react";
import { User } from "../../domain/models/User";
import { LoungePagePresenter } from "./LoungePagePresenter";
import { ChatMessage } from "../../domain/models/ChatMessage";
import { Chat } from "../../components/Chat";

export interface Props {
  user: User;
  chatMessages: ChatMessage[];
  presenter: LoungePagePresenter;
}

export interface FormProps {
  presenter: LoungePagePresenter;
}

export class LoungePageComponent extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    this.state = {
      heightDiff: 0
    };
  }

  render() {
    return (
      <Chat
        user={this.props.user}
        title="ラウンジチャット"
        chatMessages={this.props.chatMessages}
        handleSubmit={this.props.presenter.handleSubmitChatMessage}
      >
        hello
      </Chat>
    );
  }
}
