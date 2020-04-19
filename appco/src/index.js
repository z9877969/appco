import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import ReactDOM from "react-dom";
// import "./index.scss";
import App from "./containers/App/App";
import "./styles/reg.scss";
import "./styles/var.scss";

ReactDOM.render(
  <BrowserRouter>
    <Route component={App} />
  </BrowserRouter>,
  document.getElementById("root")
);
