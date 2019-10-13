/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

require('./components/Example');

import React, {Component} from 'react';
import {Redirect, Route, Router, Switch} from "react-router-dom";
import {navigation, history} from "./utils/url";
import Home from "./pages/Home";
import Animals from "./pages/Animals";
import Contact from "./pages/Contact";
import Events from "./pages/Events";
import About from "./pages/About";
import Rights from "./pages/Admin/Rights";
import News from "./pages/Admin/News";
import Login from "./pages/Admin/Login/Login";

export default class App extends Component {
    render() {
        return <Router history={history}>
            <Switch>
                <Route exact path={navigation.home} component={Home}/>
                <Route path={navigation.admin} component={Login}/>
                <Route path={navigation.animals} component={Animals}/>
                <Route path={navigation.contact} component={Contact}/>
                <Route path={navigation.events} component={Events}/>
                <Route path={navigation.about} component={About}/>
                <Route path={navigation.news} component={News}/>
                <Route path={navigation.rights} component={Rights}/>
                <Redirect to={navigation.animals}/>
            </Switch>
        </Router>
    }
}
