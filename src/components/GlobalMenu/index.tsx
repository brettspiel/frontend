import * as React from "react";
import { Menu, Dropdown, Button } from "semantic-ui-react";

export class GlobalMenu extends React.Component {
  render() {
    return (
      <Menu size="mini">
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
    );
  }

  private handleItemClick(...args: any[]) {
    console.log("@args", args);
  }
}
