import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from '../pages/Main';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path={process.env.PUBLIC_URL + "/"} exact component={Main} />
            </Switch>
        </BrowserRouter>
    );
}