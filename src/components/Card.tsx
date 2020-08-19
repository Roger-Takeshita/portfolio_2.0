import React from 'react';

interface cardProp {
    name: String;
    imageUri: String;
    liveUrl: String;
    repoUrl: String;
    technologies: any[];
    description: String;
}

const Card: React.FC<cardProp> = ({
    name,
    imageUri,
    liveUrl,
    repoUrl,
    technologies,
    description,
}) => {
    return (
        <div className="card">
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
                    <h3 className="heading-tertiary heading-tertiary--white u-margin-top-small u-margin-bottom-small">
                        info
                    </h3>
                    <a href="#popup" className="btn btn--white">
                        Project Info
                    </a>
                    <a
                        href={liveUrl.toString()}
                        rel="noopener noreferrer"
                        target="_blank"
                        className="btn btn--white"
                    >
                        Live Project
                    </a>
                    <a
                        href={repoUrl.toString()}
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

export default Card;