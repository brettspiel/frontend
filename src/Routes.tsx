import * as React from "react";
import { Route, Switch } from "react-router-dom";
import { LoginPage } from "./features/LoginPage";
import { PrivateRoute } from "./features/PrivateRoute";
import {withSocket} from "./containers/withSocket";
import {CounterPage} from "./features/CounterPage";

export class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/login" exact render={() => <LoginPage />} />
        <PrivateRoute
          path="/counter"
          exact
          render={() => withSocket(socketManager => <CounterPage socket={socketManager.socket("/counter")}/>)}
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
