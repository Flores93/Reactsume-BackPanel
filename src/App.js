import React from "react";
import { Provider } from "react-redux";

import RootRouter from "./routes/RootRouter";

import { store } from "./store/store";

import "./assets/styles/styles.scss";

function App() {
  return (
    <Provider store={store}>
      <RootRouter />
    </Provider>
  );
}

export default App;
