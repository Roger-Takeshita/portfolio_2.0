import { combineReducers, createStore } from 'redux';
import modalReducer from './redux/modal';

const reducers = combineReducers({
    modal: modalReducer,
});

const store = createStore(reducers);

export default store;
