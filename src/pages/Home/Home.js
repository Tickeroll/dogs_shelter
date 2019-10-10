import React, {Component} from 'react';
import {navigation} from "../../utils/url";
import NavigationHeader from "../../components/NavigationHeader";

class Home extends Component {
    render() {
        return (
            <div>
                <NavigationHeader/>



                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                я корневая страница
                <button onClick={() =>this.props.history.push(navigation.admin)}>admin</button>
                <button onClick={() =>this.props.history.push(navigation.animals)}>animals</button>
                <button onClick={() =>this.props.history.push(navigation.contact)}>contact</button>
                <button onClick={() =>this.props.history.push(navigation.events)}>events</button>
                <button onClick={() =>this.props.history.push(navigation.about)}>about</button>
                <button onClick={() =>this.props.history.push(navigation.news)}>news</button>
                <button onClick={() =>this.props.history.push(navigation.rights)}>rights</button>

            </div>
        );
    }
}

export default Home;