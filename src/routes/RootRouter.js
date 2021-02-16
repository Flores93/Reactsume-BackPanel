import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import BackPanel from "../components/backpanel/BackPanel";
import Register from "../components/auth/Register";
import Login from "../components/auth/Login";
import LoadingWrapper from "../components/ui/LoadingWrapper";

import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";

import { checkSession } from "../actions/authActions";

const RootRouter = () => {
  const dispatch = useDispatch();
  const { userName, checkingSession } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(checkSession());
  }, [dispatch]);

  if (checkingSession) {
    return <LoadingWrapper />;
  }

  return (
    <div>
      <Router>
        <Switch>
          <PrivateRoutes
            isLoggedIn={userName}
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
