import * as React from "react";
import { Segment } from "semantic-ui-react";
import { User } from "../../domain/models/User";
import { LoungePagePresenter } from "./LoungePagePresenter";
import { ChatMessage } from "../../domain/models/ChatMessage";
import { Chat } from "../../components/Chat";
import * as styles from "./styles.css";

export interface Props {
  user: User;
  chatMessages: ChatMessage[];
  presenter: LoungePagePresenter;
}

export interface FormProps {
  presenter: LoungePagePresenter;
}

export class LoungePageComponent extends React.Component<Props> {
  render() {
    return (
      <Chat
        user={this.props.user}
        title="ラウンジチャット"
        chatMessages={this.props.chatMessages}
        handleSubmit={this.props.presenter.handleSubmitChatMessage}
      >
        <div className={styles.page}>
          <Segment>
            hello
          </Segment>
        </div>
      </Chat>
    );
  }
}
