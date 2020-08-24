import emailjs from 'emailjs-com';
const SET_MODAL_MSG = 'SET_MODAL_MSG';
const CLEAR_MODAL_MSG = 'CLEAR_MODAL_MSG';

export const setModalMsg = (data) => {
    let payload = {
        code: 0,
        title: '',
        msg: '',
    };

    return async (dispatch) => {
        try {
            await emailjs.send(
                'default_service',
                'portfolio',
                data,
                'user_svVzdsNvPIpH9UZdGsjUw'
            );

            payload = {
                code: 200,
                title: 'Message delivered successfully',
                msg: `Thank you ${
                    data.user_name.charAt(0).toUpperCase() +
                    data.user_name.slice(1)
                } for you message, chat with you soon.`,
            };

            dispatch({
                type: SET_MODAL_MSG,
                payload,
            });
        } catch (error) {
            payload = {
                code: 500,
                title: 'Unable to deliver your email',
                msg: `Sorry ${
                    data.user_name.charAt(0).toUpperCase() +
                    data.user_name.slice(1)
                }`,
            };

            dispatch({
                type: SET_MODAL_MSG,
                payload,
            });
        }
    };
};

export const clearModalMsg = () => ({
    type: CLEAR_MODAL_MSG,
});

const initialState = { code: 0, title: '', msg: '' };
function modalMsgReducer(state = initialState, action) {
    switch (action.type) {
        case SET_MODAL_MSG:
            return { ...action.payload };
        case CLEAR_MODAL_MSG:
            return { code: 0, title: '', msg: '' };
        default:
            return state;
    }
}

export default modalMsgReducer;
