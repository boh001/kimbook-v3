import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import routes from "./routes";

export default () => (
  <Router>
    <Switch>
      {routes.map((route, key) => {
        const { exact, path, component } = route;
        return (
          <Route key={key} exact={exact} path={path} component={component} />
        );
      })}
      <Redirect from="*" to="/" />
    </Switch>
  </Router>
);
