import * as React from 'react';
import { Router, Switch } from 'react-router-dom';
import { Route } from 'src/routes';
import { history } from 'src/routes';
import modules from 'src/display/modules';

Route.addNode(
    Route.ROOT_NAME,
    { nodeName: 'home', path: '/', component: modules.Home },
);

const Routes = () => (
    <Router history={history}>
        <Switch>
            {Route.getChildReact(Route.ROOT_NAME)}
        </Switch>
    </Router>
);

export default Routes;