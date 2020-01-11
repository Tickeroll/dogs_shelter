import React, {Component} from 'react';
import NavigationHeader from "../../components/NavigationHeader";
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import './animals.css'
import Button from "../../components/Button";
import requests from "../../requests";

class Animals extends Component {

    constructor(props) {
        super(props);
        this.state = {
            animals: []
        }
    }

    componentDidMount() {
        this.getAnimals()
    }

    getAnimals() {
        requests.animals.animalsGet().then(response => {
            this.setState({animals: response.data.data})
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
                <BreadCrumbs page="Наши животные"/>
                <h1 className="page-title text-center"><b>Наши животные</b></h1>
                <br/>
                <p className="page-title-second-text text-center">
                    <b>Все животные Центра «Юна» привиты, чипированы и готовы обрести семью.</b>
                </p>
                <br/>
                <div className="text-center">
                    <Button>Все животные</Button>
                    <Button>Собаки</Button>
                    <Button>Кошки</Button>
                </div>
                <br/>
                Copy
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown button
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <span className="dropdown-item" href="#">Action</span>
                    </div>
                </div>
                <br/>
                <div>
                    {animals.length > 0 && animals.map(animal =>
                        <div>
                            <img src={animal.photo[0]} alt={animal.name}/>
                            <div>
                                <p>{'Привет, меня зовут ' + animal.name + '.'}</p>
                                <p>{'Я ' + animal.gender + ', я родился ' + animal.birthday}</p>
                            </div>
                        </div>
                    )}
                </div>
                <Button large>Посмотреть ещё животных</Button>
            </div>
        );
    }
}

export default Animals;