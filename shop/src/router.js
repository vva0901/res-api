import React from 'react';
import { Switch, Router, Route } from 'react-router-dom';
import history from './utils/history';
import Layout from './components/common/Layout';
import Dashboard from './container/Admin';

const AppRouter = () => {
    return (
        <Router history={history}>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Dashboard}></Route>
                </Switch>
            </Layout>
        </Router>
    )
}

export default AppRouter;