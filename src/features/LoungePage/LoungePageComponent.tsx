import * as React from "react";
import { Header, Icon, Card } from "semantic-ui-react";
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

const rooms = [
  {
    id: "adlwjeofwjeojg",
    game: "ドミニオソ",
    owner: { id: "aaa", name: "ほげ太郎" },
    players: [
      { id: "aaa", name: "ほげ太郎" },
      { id: "bbb", name: "bbb" },
      { id: "ccc", name: "ccc" }
    ],
    status: "wanted"
  },
  {
    id: "wef",
    game: "Scy+he",
    owner: { id: "wefwef", name: "Nils Frahm" },
    players: [
      { id: "wefwef", name: "Nils Frahm" },
      { id: "fff", name: "Nessy polly" },
      { id: "zxcv", name: "Bett Scott" }
    ],
    status: "started"
  },
  {
    id: "ggrgrfgr",
    game: "ジャンケン",
    owner: { id: "a", name: "master" },
    players: [
      { id: "a", name: "master" },
      { id: "b", name: "naster" }
    ],
    status: "finished"
  },
  {
    id: "qwrgwg",
    game: "Catam",
    owner: { id: "f", name: "f" },
    players: [
      { id: "f", name: "f" },
    ],
    status: "wanted"
  },
  {
    id: "hrhrhrhrh",
    game: "Hex",
    owner: { id: "aw", name: "awe" },
    players: [
      { id: "aw", name: "awe" },
      { id: "fffglkj", name: "woo!" }
    ],
    status: "finished"
  }
];

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
          <Card.Group>
            {
              rooms.map(room => (
                <Card
                  key={room.id}
                  header={room.game}
                  fluid
                  extra={(
                    <div>
                      {room.players.map(player => (
                        <div key={player.id}>
                          <Icon name='user' /> {player.name}
                        </div>
                      ))}
                    </div>
                  )}
                />
              ))
            }
          </Card.Group>
        </div>
      </Chat>
    );
  }
}
