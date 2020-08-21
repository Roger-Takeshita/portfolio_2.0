import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import modalReducer from './redux/modal';

const reducers = combineReducers({
    modal: modalReducer,
});

const store = createStore(reducers, applyMiddleware(logger));

export default store;
