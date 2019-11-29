import React, {Component} from 'react';
import {navigation, host} from "../../utils/url";

class AdminNavigation extends Component {
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
                                    <ul className="navigation-head-display-flex">
                                        <li className="navigation-head-top-list-li">
                                            <a className="navigation-head-top-list-a"
                                               href={host + navigation.adminNews}><span
                                                className="navigation-head-top-list-li-text">Добавить новость</span></a>
                                        </li>
                                        <li className="navigation-head-top-list-li">
                                            <a className="navigation-head-top-list-a"
                                               href={host + navigation.adminAnimals}><span
                                                className="navigation-head-top-list-li-text">Добавить животное</span></a>
                                        </li>
                                    </ul>
                                    <ul className="navigation-head-display-flex">
                                        <li className="navigation-head-bottom-list-li"><a
                                            className="navigation-head-bottom-list-a"
                                            href="https://yunacenter.ru/news/"><span
                                            className="navigation-head-bottom-list-li-text">Апрув новости</span></a></li>
                                        <li className="navigation-head-bottom-list-li"><a
                                            className="navigation-head-bottom-list-a"
                                            href={document.location.href + "faq/"}><span
                                            className="navigation-head-bottom-list-li-text">Апрув животного</span></a>
                                        </li>
                                        <li className="navigation-head-bottom-list-li"><a
                                            className="navigation-head-bottom-list-a"
                                            href="https://yunacenter.ru/contact/"><span
                                            className="navigation-head-bottom-list-li-text">Распределить права</span></a></li>
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

export default AdminNavigation;