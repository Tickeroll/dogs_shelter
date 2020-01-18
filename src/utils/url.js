import axios from "axios";
import {createBrowserHistory} from 'history';

const navigation = {
    home: '/',
    animals: '/animals',
    animal: '/animals/:name',
    contact: '/contact',
    events: '/events',
    about: '/about',
    news: '/news',
    faq: '/faq',
};

const back = 'http://localhost:8080';

const client = axios.create({
    baseURL: back
});

const history = createBrowserHistory({basename: process.env.PUBLIC_URL});

export {navigation, client, history};
