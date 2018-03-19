import * as React from "react";
import * as ReactDom from "react-dom";
import { Router } from "react-router-dom";
import { Routes } from "./Routes";
import { history } from "./history";
import { Provider } from "./state";
import { Cnt } from "./Cnt";
import "./global.css"; // inject global css

class App extends React.Component {
  render() {
    return (
      <Provider>
        <Router history={history}>
          <Routes />
        </Router>
        <Cnt />
      </Provider>
    );
  }
}

ReactDom.render(<App />, document.getElementById("app"));
