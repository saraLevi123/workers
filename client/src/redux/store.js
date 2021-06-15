import produce from 'immer';
import { createStore, compose } from 'redux';


let initialState = {
    user: {
        _id: '',
        userName: '',
        password: '',
        email: '',
    },
    userSttus: {
        _id: '',
        userName: '',
        password: '',
        email: '',
    },
}
const reducer = produce((state, action) => {
    switch (action.type) {
        case 'SET_USER_DETAILS': {
            console.log(action.payload)
            state.user = action.payload;
            console.log(state.user)
            break;
        }      
      
        case 'SET_USER_STATUS': {
            state.userStatus = action.payload;
            break;
        }
    }
}, initialState);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers());

window.store = store;
export default store;