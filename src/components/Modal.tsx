import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { clearModal } from '../redux/modal';
import { CardProps, ModalProps } from '../utils/interface';

const Modal: React.FC<ModalProps> = ({ modal, clearModal }) => {
    const [modalState, setModalState] = useState(false);
    const [project, setProject] = useState<CardProps>({
        name: '',
        description: '',
        imageUri: '',
        technologies: [],
    });

    useEffect(() => {
        if (Object.keys(modal).length > 0) {
            setModalState(true);
            setProject(modal);
        } else {
            setModalState(false);
        }
    }, [modal]);

    const handleClick = (e: any, mode: string) => {
        if (mode === 'close') {
            e.preventDefault();
        }
        clearModal();
        setModalState(false);
    };

    return (
        <div className={`modal modal--${modalState}`}>
            <div className="modal__content">
                <div className="modal__left">
                    <a
                        href={project.liveUrl}
                        onClick={(e) => handleClick(e, 'link')}
                        className="modal__link"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <img
                            src={project.imageUri}
                            alt={`${project.name}`}
                            className="modal__photo"
                        />
                    </a>
                </div>
                <div className="modal__right">
                    <a
                        href="/"
                        onClick={(e) => handleClick(e, 'close')}
                        className="modal__close"
                    >
                        &times;
                    </a>
                    <h2 className="heading-secondary heading-secondary__text-title-2 heading-secondary--black u-margin-bottom-xsmall">
                        {project.name}
                    </h2>
                    <div className="modal__text-box">
                        <p className="modal__text ">{project.description}</p>
                    </div>
                    <div className="modal__technologies-box">
                        {project.technologies.map((tech, idx) => {
                            return (
                                <div key={idx} className="modal__logo-box">
                                    {tech}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state: any) => ({
    modal: state.modal,
});

const mapDispatchToProps = (dispatch: any) => ({
    clearModal: () => dispatch(clearModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
