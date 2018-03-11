import * as React from "react";
import * as ReactDom from "react-dom";
import { Router } from "react-router-dom";
import { Routes } from "./Routes";
// inject global css
import "./global.css";
import { Provider } from "react-redux";
import { store } from "./store";
import { history } from "./history";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Routes />
        </Router>
      </Provider>
    );
  }
}

ReactDom.render(<App />, document.getElementById("app"));
