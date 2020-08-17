import React from 'react';

const HeaderPortfolio: React.FC = () => {
    return (
        <div className="header">
            <div className="header__bg">&nbsp;</div>
            <div className="header__logo-box">Logo</div>
            <div className="header__text-box">
                <h1 className="heading-primary u-margin-bottom-medium">
                    <span className="heading-primary__text-title-1">
                        Roger Takeshita
                    </span>
                    <span className="heading-primary__text-title-2">
                        Full-Stack Developer
                    </span>
                </h1>
                <h3 className="heading-tertiary heading-tertiary__quotes heading-tertiary__animated">
                    "What you do today can be automated tomorrow"
                </h3>
            </div>
        </div>
    );
};

export default HeaderPortfolio;
