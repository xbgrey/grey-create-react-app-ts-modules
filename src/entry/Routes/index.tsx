import * as React from 'react';
import modules from 'src/display/modules';
import { Route, BrowserRouter } from 'react-router-dom';

const Routes = () => (
    <BrowserRouter>
        <Route path="/" component={modules.Home} />
    </BrowserRouter>
);

export default Routes;