import {history, navigation} from "../utils/url";

const ADD_MESSAGE = 'ADD_MESSAGE';
const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
const USERS_LIST = 'USERS_LIST';

export default function query(state = {
    logged: !!localStorage.getItem('logged'),
    fetch: false,
    userList: [],
    messageList: []
}, action) {
    switch (action.type) {
        case LOG_IN_SUCCESS:
            localStorage.setItem('logged', action.logged);
            localStorage.setItem('userName', JSON.stringify(action.userName));
            return {
                ...state,
                logged: action.logged,
                userList: [state.userList, action.userName],
                fetch: false
            };
        case ADD_MESSAGE:
            return {...state, messageList:  [state.messageList, action.message]};
        default:
            return state
    }
}

export function login(userName) {
    return (dispatch) => {
        dispatch({
            type: LOG_IN_SUCCESS,
            logged: true,
            userName,
        });
     history.push(navigation.chatPage)
    }
}

export function sendMessage(message) {
    return (dispatch) => {
        dispatch({
            type: ADD_MESSAGE,
            message
        });
    }
}

export function spisok(userName) {
    return (dispatch) => {
        dispatch({
            type: USERS_LIST,
            userName,
        })
        dispatch(history.push(navigation.chatPage))
    }
}

export function addMessage(message) {
    return (dispatch) => {
        return dispatch({
            type: ADD_MESSAGE,
            message,
        })
    }
}