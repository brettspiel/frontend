import * as React from "react";
import * as ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./Routes";
// inject global css
import "./global.css";

class App extends React.PureComponent {
  render() {
    return (
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    );
  }
}

ReactDom.render(<App />, document.getElementById("app"));
