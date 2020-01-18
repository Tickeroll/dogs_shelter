import React, {Component} from 'react';
import NavigationHeader from "../../components/NavigationHeader";
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import './animals.css'
import Button from "../../components/Button";
import requests from "../../requests";

import {changeGender, changeGenderAnimals} from "./helpersTypes";
import {navigation} from "../../utils/url";

class Animals extends Component {

    constructor(props) {
        super(props);
        this.state = {
            animals: [],
            nextPage: '',
            gender: 0,
            size: 0,
            age: 0
            flag:false
        };
        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
    }

    onFocus(){

        this.setState({flag:true});

    }

    onBlur(){

        this.setState({flag:false});

    }


    componentDidMount() {
        this.getAnimals()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const {size, age, gender} = this.state;
        if (prevState.size !== size || prevState.age !== age || prevState.gender !== gender) {
            this.getAnimalsFilter()
        }
    }

    getAnimals() {
        const {size, age, gender} = this.state;
        requests.animals.animalsGet(size, age, gender).then(response => {
            this.setState({animals: response.data.data, nextPage: response.data.links.next})
        })
    }
    getAnimalsFilter() {
        const {size, age, gender} = this.state;
        requests.animals.animalsGetFilter(size, age, gender).then(response => {
            this.setState({animals: response.data.data})
        })
    }

    getNextPage() {
        requests.animals.animalsGetNextPage(this.state.nextPage).then(response => {
            this.setState({animals: this.state.animals.concat(response.data.data)})
        })
    }

//
//     birthday: "07.2019"
//     color: "maroon"
//     description: "Alice began to cry again. 'You ought to tell them something more. 'You promised to tell him. 'A nice muddle their slates'll be in before the trial's over!' thought Alice. 'Now we shall get on."
//     gender: 2
//     id: 1
//     name: "Ezekiel Nolan"
//     photo: (2) ["http://localhost/storage/1/Faker.jpeg", "http://localhost/storage/2/Faker.jpeg"]
//     size: 1
//     type: 2

    render() {
        console.log(2, this.state.animals)
        const {animals} = this.state;
        return (
            <div>
                <NavigationHeader/>
                <div className="container">
                    <BreadCrumbs page="Наши животные"/>
                    <h1 className="page-title text-center"><b>Наши животные</b></h1>
                    <br/>
                    <p className="page-title-second-text text-center">
                        <b>Все животные Центра «Юна» привиты, чипированы и готовы обрести семью.</b>
                    </p>
                    <div className={`dropdown ${this.state.flag===true? 'open': ""}`}>
                        <button onFocus={this.onFocus} onBlur={this.onBlur} className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                                title="Dropdown button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            dropdown
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <div className="dropdown-item" href="#">Action</div>
                            <div className="dropdown-item" href="#">ActionTwo</div>
                            <div className="dropdown-item" href="#">ActionThree</div>
                            <div className="dropdown-item" href="#">ActionFour</div>
                        </div>

                    </div>
                    <br/>
                    <div className="text-center">
                        <Button>Все животные</Button>
                        <Button>Собаки</Button>
                        <Button>Кошки</Button>
                    </div>
                    <br/>
                    Пол
                    <select onChange={e => this.setState({gender: e.target.value})}>
                        <option value={0}>Любой</option>
                        <option value={1}>Мальчик</option>
                        <option value={2}>Девочка</option>
                    </select>
                    Размер

                    <select onChange={e => this.setState({size: e.target.value})}>
                        <option value={0}>Любой</option>
                        <option value={1}>Маленький</option>
                        <option value={2}>Большой</option>
                        <option value={3}>Средний</option>
                    </select>
                    Возраст

                    <select onChange={e => this.setState({age: e.target.value})}>
                        <option value={0}>Не указан</option>
                        <option value={1}>1-2мес</option>
                        <option value={2}>1-6мес</option>
                        <option value={3}>6мес - 1год</option>
                    </select>
                    <Button>Применить</Button>
                    <br/>
                    <div className="animals-photo-flex">
                        {animals.length > 0 && animals.map(animal =>
                            <div key={animal.slug_name} className="animals-photo-element"
                                 onClick={() => this.props.history.push(navigation.animals + '/' + animal.slug_name)}>
                                <img className="animals-photo-image" src={animal.photo[0]} alt={animal.name}/>
                                <div className="animals-photo-text">
                                    <p>{'Привет, меня зовут ' + animal.name + '.'}</p>
                                    <p>{changeGenderAnimals(animal.gender) + animal.birthday}</p>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="animals-button_next">
                    <Button large onClick={this.getNextPage.bind(this)}>Посмотреть ещё животных</Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Animals;