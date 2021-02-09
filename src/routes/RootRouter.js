import React from "react";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import BackPanel from "../components/backpanel/BackPanel";
import Register from "../components/auth/Register";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";
import Login from "../components/auth/Login";

const RootRouter = () => {
  // @ts-ignore
  const { userName } = useSelector((state) => state.auth);

  return (
    <div>
      <Router>
        <Switch>
          <PrivateRoutes
            isLoggedIn={userName}
            exact
            path="/panel"
            component={BackPanel}
          />
          <PublicRoutes
            isLoggedIn={userName}
            exact
            path="/register"
            component={Register}
          />
          <PublicRoutes
            isLoggedIn={userName}
            exact
            path="/"
            component={Login}
          />

          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
};

export default RootRouter;
