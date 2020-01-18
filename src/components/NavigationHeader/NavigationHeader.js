import React, {Component} from 'react';
import './navigation-header.css'
import {navigation, history} from "../../utils/url";

class NavigationHeader extends Component {

    redirect(link) {
      history.push(link)
    }

    render() {
        return (
            <header className="header">
                <div className="navigation-head">
                    <div className="navigation-head-headline-wrap">
                        <div className="container">
                            <div className="grid navigation-head-fix-padding-top">
                                <div className="col-lg-2"><a href="https://yunacenter.ru/"><img
                                    className="navigation-head-logo"
                                    src="https://yunacenter.ru/wp-content/themes/yuna_theme/img/logo-white.svg" alt=""/></a>
                                </div>
                                <nav className="col-lg-10 col navigation-head-nav-position">
                                    <ul className="display-flex">
                                        <li className="navigation-head-top-list-li">
                                            <div className="navigation-head-top-list-a"
                                               onClick={this.redirect.bind(this, navigation.about)}><span
                                                className="navigation-head-top-list-li-text">О нас</span></div>
                                        </li>
                                        <li className="navigation-head-top-list-li">
                                            <div className="navigation-head-top-list-a" onClick={this.redirect.bind(this, navigation.animals)}><span
                                                className="navigation-head-top-list-li-text">Наши животные</span></div>
                                        </li>
                                        <li className="navigation-head-top-list-li">
                                            <div className="arr"><span
                                                className="navigation-head-top-list-li-text">Помочь</span>
                                            </div>
                                        </li>
                                    </ul>
                                    <ul className="display-flex">
                                        <li className="navigation-head-bottom-list-li"><div
                                            className="navigation-head-bottom-list-a"
                                            onClick={this.redirect.bind(this, navigation.news)}><span
                                            className="navigation-head-bottom-list-li-text">Новости</span></div></li>
                                        <li className="navigation-head-bottom-list-li"><div
                                            className="navigation-head-bottom-list-a"
                                            onClick={this.redirect.bind(this, navigation.faq)}><span
                                            className="navigation-head-bottom-list-li-text">Вопрос / ответ</span></div>
                                        </li>
                                        <li className="navigation-head-bottom-list-li"><div
                                            className="navigation-head-bottom-list-a"
                                            onClick={this.redirect.bind(this, navigation.contact)}><span
                                            className="navigation-head-bottom-list-li-text">Контакты</span></div></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default NavigationHeader;