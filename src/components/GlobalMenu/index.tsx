import * as React from "react";
import { Menu, Dropdown, Button } from "semantic-ui-react";
import * as styles from "./styles.css";

export interface Props {
  render: (() => React.ReactNode);
}

export class GlobalMenu extends React.Component<Props> {
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
            <Dropdown item text="Language">
              <Dropdown.Menu>
                <Dropdown.Item>English</Dropdown.Item>
                <Dropdown.Item>Russian</Dropdown.Item>
                <Dropdown.Item>Spanish</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Menu.Item>
              <Button primary>Sign Up</Button>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
        <div className={styles.content}>
          {this.props.render()}
        </div>
      </div>
    );
  }

  private handleItemClick(...args: any[]) {
    console.log("@args", args);
  }
}
