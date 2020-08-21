const SET_MODAL = 'SET_MODAL';
const CLEAR_MODAL = 'CLEAR_MODAL';

export const setModal = (data) => ({
    type: SET_MODAL,
    payload: data,
});

export const clearModal = () => ({
    type: CLEAR_MODAL,
});

function modalReducer(state = {}, action) {
    switch (action.type) {
        case SET_MODAL:
            return { ...action.payload };
        case CLEAR_MODAL:
            return {};
        default:
            return state;
    }
}

export default modalReducer;
