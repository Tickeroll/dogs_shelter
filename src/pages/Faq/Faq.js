import React, {Component} from 'react';
import './faq.css'
import NavigationHeader from "../../components/NavigationHeader";
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";

class Faq extends Component {

    constructor(props) {
        super(props);
        this.state = {
            q1: false
        }
    }


    render() {
        return (
            <div>
                <NavigationHeader/>
                <BreadCrumbs page="Вопрос / ответ"/>
                <div>
                    <h2 className="faq1">Вопрос-ответ</h2>
                    <input type="checkbox" id="hd-1" className="hide"/>
                    <label htmlFor="hd-1">Можно ли приехать в приют и пообщаться с собаками?</label>
                    <div>
                    </div>
                    <br/>
                    <br/>
                    <input type="checkbox" id="hd-2" className="hide"/>
                    <label htmlFor="hd-2">Нажмите здесь, чтобы увидеть скрытый текст №2</label>
                    <div>
                        вопрос 2
                    </div>
                    <br/>
                    <br/>
                    <input type="checkbox" id="hd-3" className="hide"/>
                    <label htmlFor="hd-3">Нажмите здесь, чтобы увидеть скрытый текст №3</label>
                    <div>
                        Вопрос 3
                    </div>
                    <br/>
                    <br/>
                    <input type="checkbox" id="hd-4" className="hide"/>
                    <label htmlFor="hd-4">Нажмите здесь, чтобы увидеть скрытый текст №4</label>
                    <div>
                        Вопрос 4
                    </div>
                </div>
                <br/>
                {/*<p onClick={() => this.setState({q1:true})}>Вопрос 1</p>*/}

                {/*{this.state.q1 && <p className="perenos">sdfdsfdsf</p>}*/}

            </div>
        );
    }
}

export default Faq;