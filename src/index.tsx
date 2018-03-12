import * as React from "react";
import * as ReactDom from "react-dom";
import { Router } from "react-router-dom";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
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
        <PersistGate persistor={persistStore(store)}>
          <Router history={history}>
            <Routes />
          </Router>
        </PersistGate>
      </Provider>
    );
  }
}

ReactDom.render(<App />, document.getElementById("app"));
