import React from 'react';
import { connect } from 'react-redux';
import { clearModalMsg } from '../redux/modalMsg';
import { ModalMsgProps } from '../utils/interface';

const ModalMsg: React.FC<ModalMsgProps> = ({ modalMsg, clearModalMsg }) => {
    const handleClick = (e: any) => {
        e.preventDefault();
        clearModalMsg();
    };

    return (
        <div
            className={
                modalMsg.title !== ''
                    ? 'modal-msg modal-msg--visible-true'
                    : 'modal-msg modal-msg--visible-false'
            }
        >
            <div className="modal-msg__header">
                <p className="modal-msg__title">{modalMsg.title}</p>
                <a href="/" onClick={handleClick} className="modal-msg__close">
                    &times;
                </a>
            </div>
            <div className="modal-msg__body">
                {modalMsg.code === 200 ? (
                    <p className="modal-msg__msg">{modalMsg.msg}</p>
                ) : (
                    <p className="modal-msg__msg">
                        {modalMsg.msg}! Something went wrong, please send me a
                        msg though my&nbsp;
                        <a
                            href="http://linkedin.com/in/roger-takeshita"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Linkedin
                        </a>
                    </p>
                )}
            </div>
        </div>
    );
};

const mapStateToProps = (state: any) => ({
    modalMsg: state.modalMsg,
});

const mapDispatchToProps = (dispatch: any) => ({
    clearModalMsg: () => dispatch(clearModalMsg()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalMsg);
