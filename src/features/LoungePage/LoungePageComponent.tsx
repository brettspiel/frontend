import * as React from "react";
import { User } from "../../domain/models/User";
import { LoungePagePresenter } from "./LoungePagePresenter";
import { DraggableCore } from "react-draggable";
import { withFormik } from "formik";
import { Form, Divider, Feed } from "semantic-ui-react";
import * as styles from "./styles.css";
import { ChatMessage } from "../../domain/models/ChatMessage";
import { reverse } from "lodash";

export interface Props {
  user: User;
  chatMessages: ChatMessage[];
  presenter: LoungePagePresenter;
}

export interface FormProps {
  presenter: LoungePagePresenter;
}

export interface State {
  heightDiff: number;
}

export interface ChatSendFormValue {
  message: string;
}

const ChatSendForm = withFormik<Props, ChatSendFormValue>({
  mapPropsToValues: () => ({ message: "" }),
  handleSubmit: async (values, { props, resetForm }) => {
    await props.presenter.handleSubmitChatMessage(values);
    resetForm();
  }
})(({ values, handleChange, handleSubmit }) => (
  <Form onSubmit={handleSubmit}>
    <Form.Input
      name="message"
      fluid
      action="送信"
      placeholder="Hi, ..."
      value={values.message}
      onChange={handleChange}
    />
  </Form>
));

const defaultChatAreaHeight = "5em";

export class LoungePageComponent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      heightDiff: 0
    };
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.mainArea}>
          <h1>{this.props.user.name}</h1>
        </div>
        <DraggableCore
          onDrag={(_e, data) =>
            this.setState({ heightDiff: this.state.heightDiff + data.deltaY })
          }
        >
          <Divider horizontal className={styles.divider}>
            ラウンジチャット
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
          <ChatSendForm {...this.props} />
        </div>
      </div>
    );
  }
}
