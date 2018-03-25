import * as React from "react";
import { Icon, Card } from "semantic-ui-react";

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

export class GameRoomListingTabPane extends React.Component {
  render() {
    return (
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
    );
  }
}
