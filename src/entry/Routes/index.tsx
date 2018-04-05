import * as React from 'react';
import pages from 'src/display/pages';
import { Route, BrowserRouter } from 'react-router-dom';

const Routes = () => (
    <BrowserRouter>
        <Route path="/" component={pages.Home} />
    </BrowserRouter>
);

export default Routes;