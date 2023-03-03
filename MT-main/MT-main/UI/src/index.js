import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./Grid/Grid.scss";
import Grid from "./Grid/Grid";
import { BrowserRouter } from "react-router-dom";
import { createStore } from "react-redux";
import { store } from "./Redux/store";
import { Provider } from "react-redux";

const el = document.getElementById("app");

// ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, el);

createRoot(el).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
