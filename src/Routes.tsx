import * as React from "react";
import { Route, Switch } from "react-router-dom";
import { CounterPage } from "./containers/CounterPage";
import { LoginPage } from "./containers/LoginPage";

export class Routes extends React.PureComponent {
  render() {
    return (
      <Switch>
        <Route path="/login" exact render={() => <LoginPage />} />
        <Route
          path="/*"
          exact
          render={() => <CounterPage initialCount={10} />}
        />
      </Switch>
    );
  }
}
