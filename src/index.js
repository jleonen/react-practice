import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { AuthContextProvider } from "./store/AuthContext";
import { Provider } from "react-redux";
import store from "./store/index";

ReactDOM.render(
  <AuthContextProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </AuthContextProvider>,

  document.getElementById("root")
);
