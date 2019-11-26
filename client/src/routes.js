import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
<<<<<<< HEAD
import Login from "./pages/Login";
import Main from "./pages/Home";
=======

import Home from "./pages/Home";
>>>>>>> e38878b46440f92fcaac9c4301921ff30e649aef

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
<<<<<<< HEAD
        <Route path="/" exact component={Login} />
=======
        <Route path="/" exact component={Home} />
>>>>>>> e38878b46440f92fcaac9c4301921ff30e649aef
      </Switch>
    </BrowserRouter>
  );
}
