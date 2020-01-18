import React, {Component} from 'react';
import requests from "../../requests";
import NavigationHeader from "../../components/NavigationHeader";
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import {changeGenderAnimal, changeSize, changeType} from "../Animals/helpersTypes";
import './animal.css'

class Animal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            animal: ''
        }
    }

    componentDidMount() {
        requests.animals.animalGet(this.props.match.params.name).then(response => {
            this.setState({animal: response.data.data})
        })
    }

    render() {
        console.log(1, this.state.animal)
        const {animal} = this.state;
        return (
            animal &&
            <div>
                <NavigationHeader/>
                <div className="container">
                    <BreadCrumbs page={`Наши животные /${changeType(animal.type)} / ${animal.name}`}/>
                    <h1>{`Привет, меня зовут ${animal.name}`}</h1>
                    <div className="animal-first-content">
                        <div className="animal-left-menu">
                            <img src={animal.photo[0]} alt=""/>
                        </div>
                        <div className="animal-right-menu">
                        <span className="animal-right-menu-container">
                        <img className="animal-right-menu-svg"
                             src="https://yunacenter.ru/wp-content/themes/yuna_theme/img/icons/boy.svg"/>
                        <p className="animal-right-menu-text">{changeGenderAnimal(animal.gender)}</p>
                        </span>
                            <span className="animal-right-menu-container">
                        <img className="animal-right-menu-svg"
                             src="https://yunacenter.ru/wp-content/themes/yuna_theme/img/icons/age.svg"/>
                        <p className="animal-right-menu-text">{animal.birthday}</p>
                        </span>
                            <span className="animal-right-menu-container">
                        <img className="animal-right-menu-svg"
                             src="https://yunacenter.ru/wp-content/themes/yuna_theme/img/icons/color.svg"/>
                        <p className="animal-right-menu-text">{animal.color}</p>
                        </span>
                            <span className="animal-right-menu-container">
                        <img className="animal-right-menu-svg"
                             src="https://yunacenter.ru/wp-content/themes/yuna_theme/img/icons/size.svg"/>
                        <p className="animal-right-menu-text">{changeSize(animal.size)}</p>
                        </span>
                        </div>
                    </div>
                    <p className="animal-description">{animal.description}</p>


                    123
                </div>
            </div>
        )
    }
}

export default Animal;
