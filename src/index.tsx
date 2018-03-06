import * as React from "react";
import * as ReactDom from "react-dom";
import { App } from "./App";
// inject global css
import './global.css';

ReactDom.render(<App />, document.getElementById("app"));
