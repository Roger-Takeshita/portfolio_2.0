import React from 'react';

interface JournalProps {
    imgURI: String;
    titleOne: String;
    titleTwo?: String;
    text: String;
}

const Journal: React.FC<JournalProps> = ({
    imgURI,
    titleOne,
    titleTwo,
    text,
}) => {
    return (
        <div className="journal-box">
            <h1 className="journal-box__heading-primary">{titleOne}</h1>
            <div className="journal-box__header">
                <div className="journal-box__header__content">
                    <div className="info-box">
                        <span className="info-box__text">
                            ROGER TAKESHITA | ★★★
                        </span>
                    </div>
                    <div className="info-box">
                        <span className="info-box__text">
                            WEDNESDAY, AUGUST, 15, 2020 - VOL CCLI NO. 1
                        </span>
                    </div>
                    <div className="info-box">
                        <span className="info-box__text">★★★ $2.50</span>
                    </div>
                </div>
                <div className="journal-box__header__content">
                    <div className="info-box">
                        <span className="info-box__text">DOW JONES</span>
                        27.931
                        <span className="info-box__symbol info-box__symbol--up">
                            ▲
                        </span>
                        4.72%
                    </div>
                    <div className="info-box">
                        <span className="info-box__text">NASDAQ</span>
                        3.372
                        <span className="info-box__symbol info-box__symbol--up">
                            ▲
                        </span>
                        4.91%
                    </div>
                    <div className="info-box">
                        <span className="info-box__text">DJ STOXX 50</span>
                        3089.46
                        <span className="info-box__symbol info-box__symbol--down">
                            ▼
                        </span>
                        0.5%
                    </div>
                    <div className="info-box">
                        <span className="info-box__text">NYSE</span>
                        <span className="info-box__symbol info-box__symbol--up">
                            ▲
                        </span>
                        1.14%
                    </div>
                    <div className="info-box">
                        <span className="info-box__text">DAX INDEX</span>
                        <span className="info-box__symbol info-box__symbol--down">
                            ▼
                        </span>
                        0.14%
                    </div>
                    <div className="info-box">
                        <span className="info-box__text">GOLD</span>$ 928.70
                        <span className="info-box__symbol info-box__symbol--down">
                            ▼
                        </span>
                        $3.30
                    </div>
                    <div className="info-box">
                        <span className="info-box__text">EURO</span>
                        $1.5788
                    </div>
                    <div className="info-box">
                        <span className="info-box__text">YEN</span>
                        $101.62
                    </div>
                </div>
            </div>

            <div className="journal-box__content">
                <h2 className="journal-box__heading-secondary">{titleTwo}</h2>
                <p className="journal-box__content__paragraph">
                    <img
                        src={imgURI.toString()}
                        alt="Profile Pic"
                        className="journal-box__content__photo"
                    />
                    <span className="journal-box__content__paragraph--blur">
                        {text}
                    </span>
                </p>
            </div>
        </div>
    );
};

export default Journal;
