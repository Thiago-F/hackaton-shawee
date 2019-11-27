import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Escola from './pages/Escola';
import Company from './pages/Company';
import Home from './pages/Home';
import Professional from './pages/Professional';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                {/* <Route path="/home" exact component={Home} /> */}
                <Route path="/escola" exact component={Escola} />
                <Route path="/profissionais" component={Company} />
                <Route path="/profissional" component={Professional} />
            </Switch>
        </BrowserRouter>
    );
}
