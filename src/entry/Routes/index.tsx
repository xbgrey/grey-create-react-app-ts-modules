import * as React from 'react';
import modules from 'src/display/modules';
import { Router, Route } from 'react-router-dom';
import { history } from 'src/routes';

const Routes = () => (
    <Router history={history}>
        <Route path="/" component={modules.Home} />
    </Router>
);

export default Routes;