import * as React from "react";
import { Menu, Dropdown } from "semantic-ui-react";
import * as styles from "./styles.css";
import { User } from "../../domain/models/User";

export interface Props {
  render: (() => React.ReactNode);
  user: User;
  handleClickLogout: (() => any);
}

export class GlobalMenuComponent extends React.Component<Props> {
  render() {
    return (
      <div>
        <Menu size="mini" fixed="top">
          <Menu.Item name="home" active={true} onClick={this.handleItemClick} />
          <Menu.Item
            name="messages"
            active={false}
            onClick={this.handleItemClick}
          />

          <Menu.Menu position="right">
            <Dropdown item text={this.props.user.name}>
              <Dropdown.Menu>
                <Dropdown.Item>アカウント設定</Dropdown.Item>
                <Dropdown.Item>
                  <Dropdown text="Language">
                    <Dropdown.Menu>
                      <Dropdown.Item>日本語</Dropdown.Item>
                      <Dropdown.Item>English</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item onClick={this.props.handleClickLogout}>
                  ログアウト
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Menu>
        </Menu>
        <div className={styles.content}>{this.props.render()}</div>
      </div>
    );
  }

  private handleItemClick(...args: any[]) {
    console.log("@args", args);
  }
}
