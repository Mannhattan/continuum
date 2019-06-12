import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Login from './pages/Login.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Pipelines from './pages/Pipelines.jsx';
import Containers from './pages/Containers.jsx';
// import Images from './pages/Images.jsx';
// import Boards from './pages/Boards.jsx';
// import Settings from './pages/Settings.jsx';

import GlobalStyles from './utils/GlobalStyles.jsx';

class Routing extends Component {
    render() {
        return (
            <Router>
                <GlobalStyles />
                
                <Switch>
                    <Route exact path="/" component={Login} />

                    <Route exact path="/dashboard" component={Dashboard} />
                    <Route exact path="/pipelines" component={Pipelines} />
                    <Route exact path="/containers" component={Containers} />
                    {/* <Route exact path="/images" component={Images} />
                    <Route exact path="/boards" component={Boards} />
                    <Route exact path="/settings" component={Settings} /> */}

                    {/* <Route component={404} /> */}
                </Switch>
            </Router>
        );
    }
}

export default Routing;