import axios from "axios";
import {createBrowserHistory} from 'history';

const navigation = {
    home: '/',
    admin: '/admin',
    adminNews: '/admin/news',
    adminAnimals: '/admin/animals',
    animals: '/animals',
    contact: '/contact',
    events: '/events',
    about: '/about',
    news: '/news',
    rights: '/rights',
    faq: '/faq',
};

const host = 'http://localhost:3000';
const bd = 'http://localhost:8080';

const client = axios.create({
    credentials: true,
    baseURL: bd
});

const history = createBrowserHistory({basename: process.env.PUBLIC_URL});

export {navigation, host, client, history};
