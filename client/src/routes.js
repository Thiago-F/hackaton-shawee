import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Company from "./pages/Company";
import Professional from "./pages/Professional";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route path="/profissionais" exact component={Home} /> */}
        <Route path="/profissionais" component={Company} />
        <Route path="/profissional" component={Professional} />
      </Switch>
    </BrowserRouter>
  );
}
