import * as React from "react";
import { Route, Switch } from "react-router-dom";
import { LoginPage } from "./features/LoginPage";
import { withSocket } from "./containers/withSocket";
import { CounterPage } from "./features/CounterPage";
import { withLogin } from "./containers/withLogin";

export class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/login" exact render={() => <LoginPage />} />
        <Route
          path="/counter"
          exact
          render={() =>
            withLogin(() =>
              withSocket(socketManager => (
                <CounterPage socket={socketManager.socket("/counter")} />
              ))
            )
          }
        />
        <Route
          path="/"
          exact
          render={() =>
            withLogin(user => {
              console.log(user);
              return <h1>hello</h1>;
            })
          }
        />
      </Switch>
    );
  }
}
