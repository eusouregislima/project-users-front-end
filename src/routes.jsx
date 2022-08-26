import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { UserControler } from "./pages/user-controler";
import { Users } from "./pages/users-list";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={UserControler} />
        <Route exact path="/users" component={Users} />
      </Switch>
    </Router>
  );
}

export default Routes;
