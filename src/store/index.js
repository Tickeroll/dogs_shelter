import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import thunkMiddleware from 'redux-thunk'
import query from "../ducks/query";

const middleware = [];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

middleware.push(thunkMiddleware);

export default createStore(
    combineReducers({query}),
    composeEnhancers(applyMiddleware(...middleware))
);