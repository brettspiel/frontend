import * as React from "react";
import {User} from "../../domain/models/User";

export interface Props {
  user: User;
}

export class LoungePageComponent extends React.Component<Props> {
  render() {
    return <h1>hello {this.props.user.name}</h1>;
  }
}
