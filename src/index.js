import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./styles/index.scss";
import { UserContextProvider } from "./components/context/userContext.jsx";
import { Provider } from "react-redux";
import store from "./store/store";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </Provider>
);
