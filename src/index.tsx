import * as React from "react";
import * as ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./Routes";
// inject global css
import "./global.css";
import { Provider } from "react-redux";
import { store } from "./store";

class App extends React.PureComponent {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </Provider>
    );
  }
}

ReactDom.render(<App />, document.getElementById("app"));
