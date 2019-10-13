import axios from "axios";
import {createBrowserHistory} from 'history';

const navigation = {
    home: '/',
    admin: '/admin',
    animals: '/animals',
    contact: '/contact',
    events: '/events',
    about: '/about',
    news: '/news',
    rights: '/rights',
    faq: '/faq',

};

const client = axios.create({
    credentials: true,
    baseURL: process.env.REACT_APP_PROXY
});

const history = createBrowserHistory({basename: process.env.PUBLIC_URL});

export {navigation, client, history};
