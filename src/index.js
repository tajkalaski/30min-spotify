import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { StateProvider } from "./context";
import rootReducer, { initialState } from "./reducers";

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={rootReducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
