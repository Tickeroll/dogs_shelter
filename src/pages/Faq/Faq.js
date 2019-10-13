import React, {Component} from 'react';
import './faq.css'
import NavigationHeader from "../../components/NavigationHeader";
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";

class Faq extends Component {
    render() {
        return (
            <div>
                <NavigationHeader/>
                <BreadCrumbs page="Вопрос / ответ"/>
                Faq
            </div>
        );
    }
}

export default Faq;