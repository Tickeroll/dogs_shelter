import React, {Component} from 'react';
import {Redirect, Route, Router, Switch} from "react-router-dom";
import {navigation, history} from "./utils/url";
import Home from "./pages/Home";
import Animals from "./pages/Animals";
import Contact from "./pages/Contact";
import Events from "./pages/Events";
import About from "./pages/About";
import Faq from "./pages/Faq";
import Animal from "./pages/Animal";

export default class App extends Component {
    render() {
        return <Router history={history}>
            <Switch>
                <Route exact path={navigation.home} component={Home}/>
                <Route exact path={navigation.animals} component={Animals}/>
                <Route path={navigation.animal} component={Animal}/>
                <Route path={navigation.contact} component={Contact}/>
                <Route path={navigation.events} component={Events}/>
                <Route path={navigation.about} component={About}/>
                <Route path={navigation.faq} component={Faq}/>
                <Redirect to={navigation.animals}/>
            </Switch>
        </Router>
    }
}