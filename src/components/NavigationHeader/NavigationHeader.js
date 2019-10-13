import React, {Component} from 'react';
import './navigation-header.css'

class NavigationHeader extends Component {

    render() {
        return (
            <header className="header">
                <div className="navigation-head">
                    <div className="navigation-head-headline-wrap">
                        <div className="container">
                            <div className="grid navigation-head-fix-padding-top">
                                <div className="col-lg-2"><a href="https://yunacenter.ru/"><img className="navigation-head-logo"
                                    src="https://yunacenter.ru/wp-content/themes/yuna_theme/img/logo-white.svg" alt=""/></a>
                                </div>
                                <nav className="col-lg-10 col navigation-head-nav-position">
                                    <ul className="navigation-head-display-flex">
                                        <li className="navigation-head-top-list-li">
                                            <a className="navigation-head-top-list-a"
                                                href="https://yunacenter.ru/about/"><span
                                                className="navigation-head-top-list-li-text">О нас</span></a>
                                        </li>
                                        <li className="navigation-head-top-list-li">
                                            <a className="navigation-head-top-list-a"
                                                href="https://yunacenter.ru/animals/"><span
                                                className="navigation-head-top-list-li-text">Наши животные</span></a>
                                        </li>
                                        <li className="navigation-head-top-list-li">
                                            <div className="active"><span
                                                className="navigation-head-top-list-li-text">Мероприятия</span></div>
                                        </li>
                                        <li className="navigation-head-top-list-li">
                                            <div className="arr"><span
                                                className="navigation-head-top-list-li-text">Проекты</span>
                                            </div>
                                        </li>
                                        <li className="navigation-head-top-list-li">
                                            <div className="arr"><span
                                                className="navigation-head-top-list-li-text">Помочь</span>
                                            </div>
                                        </li>
                                    </ul>
                                    <ul className="navigation-head-display-flex">
                                        <li className="navigation-head-bottom-list-li"><a className="navigation-head-bottom-list-a" href="https://yunacenter.ru/news/"><span
                                            className="navigation-head-bottom-list-li-text">Новости</span></a></li>
                                        <li className="navigation-head-bottom-list-li"><a className="navigation-head-bottom-list-a"  href="https://yunacenter.ru/smi-o-nas/"><span
                                            className="navigation-head-bottom-list-li-text">СМИ о нас</span></a></li>
                                        <li className="navigation-head-bottom-list-li"><a className="navigation-head-bottom-list-a"  href="https://yunacenter.ru/stars/"><span
                                            className="navigation-head-bottom-list-li-text">Нас поддерживают</span></a></li>
                                        <li className="navigation-head-bottom-list-li"><a className="navigation-head-bottom-list-a"  href={document.location.href + "faq/"}><span
                                            className="navigation-head-bottom-list-li-text">Вопрос / ответ</span></a></li>
                                        <li className="navigation-head-bottom-list-li"><a className="navigation-head-bottom-list-a"  href="https://yunacenter.ru/contact/"><span
                                            className="navigation-head-bottom-list-li-text">Контакты</span></a></li>
                                    </ul>

                                    {/*<div className="soc">*/}
                                    {/*    <a className="bg-vk" target="_blank"*/}
                                    {/*       href="https://vk.com/club119370285">Vkontakte</a>*/}
                                    {/*    <a className="bg-fb" target="_blank"*/}
                                    {/*       href="https://www.facebook.com/yunacenter">Facebook</a>*/}
                                    {/*    <a className="bg-in" target="_blank"*/}
                                    {/*       href="https://www.instagram.com/yunacenter">Instagram</a>*/}
                                    {/*</div>*/}
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                {/*<div className="headline-mini">*/}
                {/*    <div className="container">*/}
                {/*        <div className="logo"><a href="index.html"><img*/}
                {/*            src="https://yunacenter.ru/wp-content/themes/yuna_theme/img/logo-white-notext.svg"*/}
                {/*            alt=""/></a></div>*/}
                {/*        <div className="toggle-menu">*/}
                {/*            <div className="in">*/}
                {/*                <div className="pos1"></div>*/}
                {/*                <div className="pos2"></div>*/}
                {/*                <div className="pos3"></div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </header>

        );
    }
}

export default NavigationHeader;