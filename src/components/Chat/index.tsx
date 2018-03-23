import * as React from "react";
import { DraggableCore } from "react-draggable";
import { Divider, Feed } from "semantic-ui-react";
import reverse = require("lodash/reverse");
import * as styles from "./styles.css";
import { ChatMessage } from "../../domain/models/ChatMessage";
import { User } from "../../domain/models/User";
import { ChatSendForm } from "./ChatSendForm";

export interface Props {
  user: User;
  title: string;
  chatMessages: ChatMessage[];
  handleSubmit: (user: User, message: string) => Promise<void>;
}

export interface State {
  heightDiff: number;
}

const defaultChatAreaHeight = "5em";

export class Chat extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      heightDiff: 0
    };
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.mainArea}>{this.props.children}</div>
        <DraggableCore
          onDrag={(_e, data) =>
            this.setState({ heightDiff: this.state.heightDiff + data.deltaY })
          }
        >
          <Divider horizontal className={styles.divider}>
            {this.props.title}
          </Divider>
        </DraggableCore>
        <div>
          <Feed
            className={styles.chatArea}
            style={{
              height: `calc(${defaultChatAreaHeight} - ${
                this.state.heightDiff
              }px)`
            }}
          >
            {reverse(this.props.chatMessages).map(message => (
              <Feed.Event key={message.id}>
                <Feed.Label
                  icon={
                    message.user.id === this.props.user.id
                      ? "user"
                      : "user outline"
                  }
                />
                <Feed.Content>{message.message}</Feed.Content>
                <Feed.Date>{message.createdAt}</Feed.Date>
              </Feed.Event>
            ))}
          </Feed>
          <ChatSendForm
            handleSubmit={message =>
              this.props.handleSubmit(this.props.user, message)
            }
          />
        </div>
      </div>
    );
  }
}
