import React, {Component} from 'react';
import './contact.css';
import NavigationHeader from "../../components/NavigationHeader";
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <div>
                    <NavigationHeader/>
                    <BreadCrumbs page="Контакты"/>
                    <div><h1 align="center">Контакты</h1></div>
                    <div className='text-content'> <p> Приют для безнадзорных животных 2-я Вольская ул., 17, стр. 3</p></div>
                    <form action='' method='post'className='back-connect-form'>
                        <div><input type='text' name='first-name' placeholder='Имя'/></div>
                        <div><input type='text' name='last-name' placeholder='Фамилия'/></div>
                        <div><input type='text' name='sir-name' placeholder='Отчетство'/></div>
                        <div><input type='text' name='phone' placeholder='Телефон'/></div>
                        <div className='mail-style'><input type='text' name='mail' placeholder='Email'/></div>
                        <div className='message-style'><input type='textarea' name='message' placeholder='Сообщение'/></div>
                        <button className='submit-button'>Отправить</button>
                    </form>
                </div>

                <div className='ya-map'>
                <iframe src="https://yandex.ru/map-widget/v1/-/CGx~7E68" width="560" height="400"
                                frameBorder="1" allowFullScreen="true"></iframe>

                </div>
            </div>

        );
    }
}

export default Contact;