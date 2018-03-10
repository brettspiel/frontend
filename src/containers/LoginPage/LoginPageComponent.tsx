import * as React from "react";
import { CentralContainer } from "../../components/CentralContainer";
import { Form, Divider } from "semantic-ui-react";
import * as styles from "./styles.css";
import { ErrorTip } from "../../components/ErrorTip";

export class LoginPageComponent extends React.Component {
  render() {
    return (
      <CentralContainer>
        <Form className={styles.form}>
          <Form.Field>
            <label>ユーザー名</label>
            <ErrorTip error="hello!">
              <Form.Input type="text" />
            </ErrorTip>
          </Form.Field>

          <Divider />

          <Form.Field>
            <label>サーバーホスト名</label>
            <Form.Input type="text" />
          </Form.Field>

          <Form.Field>
            <label>サーバーポート番号</label>
            <Form.Input type="text" />
          </Form.Field>

          <Form.Button>接続</Form.Button>
        </Form>
      </CentralContainer>
    );
  }
}
