import React from 'react';
import { connect } from 'react-redux';
import { setModal } from '../redux/modal';
import { CardProps } from '../utils/interface';

const Card: React.FC<CardProps> = ({
    name,
    imageUri,
    liveUrl,
    repoUrl,
    technologies,
    description,
    setModal,
}) => {
    const handleClick = (e: any, data: CardProps) => {
        e.preventDefault();
        setModal && setModal(data);
    };

    return (
        <div className="card u-margin-xsmall">
            <div className="card__side card__side--front">
                <img
                    src={imageUri.toString()}
                    className="card__picture"
                    alt="Project"
                />
                <div className="card__front-box u-display-inline-flex-end">
                    <h4 className="heading-quaternary heading-quaternary--bg-green u-padding-left-right-small">
                        <span className="card__heading-span">{name}</span>
                    </h4>
                </div>
            </div>
            <div className="card__side card__side--back">
                <div className="card__back-box">
                    <h3 className="heading-tertiary heading-tertiary--white">
                        {name}
                    </h3>
                    <a
                        href="/"
                        onClick={(e) =>
                            handleClick(e, {
                                name,
                                imageUri,
                                liveUrl,
                                repoUrl,
                                technologies,
                                description,
                            })
                        }
                        className="btn btn--white"
                    >
                        Project Info
                    </a>
                    <a
                        href={liveUrl}
                        rel="noopener noreferrer"
                        target="_blank"
                        className="btn btn--white"
                    >
                        Live Project
                    </a>
                    <a
                        href={repoUrl}
                        rel="noopener noreferrer"
                        target="_blank"
                        className="btn btn--white"
                    >
                        GitHub
                    </a>
                </div>
            </div>
        </div>
    );
};

const mapDispatchToProps = (dispatch: any) => ({
    setModal: (data: CardProps) => dispatch(setModal(data)),
});

export default connect(null, mapDispatchToProps)(Card);
