import * as React from "react";
import { Route, Switch } from "react-router-dom";
import { CounterPage } from "./containers/CounterPage";

export class Routes extends React.PureComponent {
  render() {
    return (
      <Switch>
        <Route path="/login" exact render={() => <h1>login</h1>} />
        <Route
          path="/*"
          exact
          render={() => <CounterPage initialCount={10} />}
        />
      </Switch>
    );
  }
}
