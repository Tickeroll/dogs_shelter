import React, {Component} from 'react';
import './admin-animals.css'
import AdminNavigation from "../../../components/AdminNavigation";
import EditorBar from "../../../components/EditorBar";

class AdminAnimals extends Component {

    render() {
        return (
            <div className="admin-news-padding">
                <AdminNavigation/>
                <div className="admin-news-box">
                    <h2><b>Добавить животное</b></h2>
                <br/>
                <h5>Введите имя</h5>
                <input/>
                <br/>
                <h5>Введите содержание</h5>
             <EditorBar/>
                <br/>
                <h5>Загрузите картинку</h5>
                <input type='file'/>
                {/*<button type="submit">Предпросмотр</button>*/}
                <button type="submit">Добавить/Отправить на модерацию</button>
                </div>
            </div>
        );
    }
}

export default AdminAnimals;