import * as React from "react";
import * as ReactDom from "react-dom";
import { Router } from "react-router-dom";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { Routes } from "./Routes";
// inject global css
import "./global.css";
import { Provider as P } from "react-redux";
import { store } from "./store";
import { history } from "./history";
import { Provider } from "./state";
import { Cnt } from "./Cnt";

class App extends React.Component {
  render() {
    return (
      <Provider>
        <P store={store}>
          <PersistGate persistor={persistStore(store)}>
            <Router history={history}>
              <Routes />
            </Router>
          </PersistGate>
        </P>
        <Cnt />
      </Provider>
    );
  }
}

ReactDom.render(<App />, document.getElementById("app"));
