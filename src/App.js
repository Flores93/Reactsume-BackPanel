import React from "react";
import RootRouter from "./routes/RootRouter";
import { Provider } from "react-redux";

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
