import React from 'react';

const ModalMsg: React.FC = () => {
    return (
        <div className="modal-msg">
            <div className="modal-msg__header">
                <p className="modal-msg__title"> MSG Title</p>
                <a href="#" className="modal-msg__close">
                    &times;
                </a>
            </div>
            <div className="modal-msg__body">
                <p className="modal-msg__msg"> Msg received successfully!</p>
            </div>
        </div>
    );
};

export default ModalMsg;
