import * as React from "react";
import { Route, Switch } from "react-router-dom";
import { CounterPage } from "./containers/CounterPage";
import { LoginPage } from "./containers/LoginPage";

export class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/login" exact render={() => <LoginPage />} />
        <Route
          path="/counter"
          exact
          render={() => <CounterPage initialCount={10} />}
        />
      </Switch>
    );
  }
}
