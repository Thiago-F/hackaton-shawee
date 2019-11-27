import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Company from './pages/Company';
import Professional from './pages/Professional';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/profissionais" component={Company} />
                <Route path="/profissional" component={Professional} />
            </Switch>
        </BrowserRouter>
    );
}
