import * as React from "react";
import { Form } from "semantic-ui-react";
import {GameType} from "../../domain/models/GameRoom";
import {ErrorTip} from "../../components/ErrorTip";

export interface FormValues {
  gameType: GameType;
}

export interface Props {
  handleSubmit: () => void;
  handleValidate: () => { [K in keyof FormValues]?: boolean };
}

export class GameRoomCreationTabPane extends React.Component<Props> {
  render() {
    return (
      <Form>
        <Form.Field error={false}>
          <label>ゲーム</label>
          <ErrorTip error={undefined}>
            <Form.Dropdown
              fluid
              selection
              options={[
                { text: "a", value: "a" },
                { text: "b", value: "b" },
              ]}
            />
          </ErrorTip>
        </Form.Field>
      </Form>
    )
  }
}
