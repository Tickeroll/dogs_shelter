import React, {Component} from 'react';
import {Redirect, Route, Router, Switch} from "react-router-dom";
import {navigation, history} from "./utils/url";
import Home from "./pages/Home";
import Animals from "./pages/Animals";
import Contact from "./pages/Contact";
import Events from "./pages/Events";
import About from "./pages/About";
import Rights from "./pages/Admin/Rights";
import AdminNews from "./pages/Admin/AdminNews";
import Login from "./pages/Admin/Login/Login";
import Faq from "./pages/Faq";
import AdminAnimals from "./pages/Admin/AdminAnimals";

export default class App extends Component {
    render() {
        return <Router history={history}>
            <Switch>
                <Route exact path={navigation.home} component={Home}/>
                <Route exact path={navigation.admin} component={Login}/>
                <Route path={navigation.adminNews} component={AdminNews}/>
                <Route path={navigation.adminAnimals} component={AdminAnimals}/>
                <Route path={navigation.animals} component={Animals}/>
                <Route path={navigation.contact} component={Contact}/>
                <Route path={navigation.events} component={Events}/>
                <Route path={navigation.about} component={About}/>
                <Route path={navigation.news} component={AdminNews}/>
                <Route path={navigation.rights} component={Rights}/>
                <Route path={navigation.faq} component={Faq}/>
                <Redirect to={navigation.animals}/>
            </Switch>
        </Router>
    }
}