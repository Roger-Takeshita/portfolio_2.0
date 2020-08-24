import { applyMiddleware, combineReducers, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';
import modalReducer from './redux/modal';
import modalMsgReducer from './redux/modalMsg';

const reducers = combineReducers({
    modal: modalReducer,
    modalMsg: modalMsgReducer,
});

const store = createStore(reducers, applyMiddleware(ReduxThunk));

export default store;
