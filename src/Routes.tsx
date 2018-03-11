import * as React from "react";
import { Route, Switch } from "react-router-dom";
import { CounterPage } from "./containers/CounterPage";
import { LoginPage } from "./containers/LoginPage";
import { PrivateRoute } from "./containers/PrivateRoute";

export class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/login" exact render={() => <LoginPage />} />
        <PrivateRoute
          path="/counter"
          exact
          render={() => <CounterPage initialCount={10} />}
        />
        <PrivateRoute
          path="/"
          exact
          render={({ user }) => {
            console.log(user);
            return <h1>hello</h1>;
          }}
        />
      </Switch>
    );
  }
}
