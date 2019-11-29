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
            console.log(1, response)
            this.setState({animals: response.data})
        })
    }

    render() {
        console.log(2, this.state.animals)
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
                    {}
                </div>
                <Button large>Посмотреть ещё животных</Button>
            </div>
        );
    }
}

export default Animals;