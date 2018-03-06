import * as React from "react";
import { Route, Switch } from "react-router-dom";

export class Routes extends React.PureComponent {
  render() {
    return (
      <Switch>
        <Route path="/login" exact render={() => <h1>login</h1>} />
        <Route path="/*" exact render={() => <h1>*</h1>} />
      </Switch>
    );
  }
}
