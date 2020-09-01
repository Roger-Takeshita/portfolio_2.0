import React from 'react';
import { Element } from 'react-scroll';

const HeaderPortfolio: React.FC = () => {
    return (
        <Element name="header-portfolio">
            <div className="section-header">
                <div className="header__bg">&nbsp;</div>
                <div className="header__logo-box">Logo</div>
                <div className="header__text-box">
                    <h1 className="heading-primary heading-primary__text-title-1">
                        Roger Takeshita
                    </h1>
                    <h1 className="heading-primary heading-primary__text-title-2 u-margin-bottom-small">
                        Full-Stack Developer
                    </h1>
                    <h3 className="heading-tertiary heading-tertiary__animated">
                        "What you do today can be automated tomorrow"
                    </h3>
                </div>
            </div>
        </Element>
    );
};

export default HeaderPortfolio;
