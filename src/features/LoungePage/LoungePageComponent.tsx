import * as React from "react";
import { Header, Icon, Tab } from "semantic-ui-react";
import { User } from "../../domain/models/User";
import { LoungePagePresenter } from "./LoungePagePresenter";
import { ChatMessage } from "../../domain/models/ChatMessage";
import { Chat } from "../../components/Chat";
import * as styles from "./styles.css";
import {GameRoomListingTabPane} from "./GameRoomListingTabPane";
import {GameRoomCreationTabPane} from "./GameRoomCreationTabPane";

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
          <Header as='h2' icon textAlign='center'>
            <Icon name='cube' />
            <Header.Content>
              Rooms
            </Header.Content>
          </Header>
          <Tab panes={[
            { menuItem: "ゲームに参加する", render: this.renderListingTabPane },
            { menuItem: "ゲームを始める", render: this.renderCreationTabPane }
          ]} />
        </div>
      </Chat>
    );
  }

  private renderListingTabPane = () => {
    return (
      <Tab.Pane>
        <GameRoomListingTabPane/>
      </Tab.Pane>
    );
  }

  private renderCreationTabPane = () => {
    return (
      <Tab.Pane>
        <GameRoomCreationTabPane
          handleSubmit={console.log}
          handleValidate={() => ({})}
        />
      </Tab.Pane>
    );
  }
}
