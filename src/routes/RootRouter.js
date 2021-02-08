import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import BackPanel from "../components/backpanel/BackPanel";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";

const RootRouter = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/panel" component={BackPanel} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/" component={Login} />

          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
};

export default RootRouter;
