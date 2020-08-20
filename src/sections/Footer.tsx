import React from 'react';
import { socialMedias } from '../assets/data/social_medias';
import pdfLogo from '../assets/images/logos/pdf.svg';

const Footer: React.FC = () => {
    return (
        <div className="section-footer">
            <div className="row u-text-center">
                <div className="col-1-of-1">
                    <div className="footer__resume">
                        <div className="footer__resume-box">
                            <a
                                href="/Resume_-_Roger_Takeshita.pdf"
                                className="footer__resume-link"
                                download
                            >
                                <img
                                    src={pdfLogo}
                                    alt="Resume"
                                    className="icon__footer--resume"
                                />
                                <p className="footer__resume-paragraph">
                                    Resume
                                </p>
                            </a>
                        </div>
                    </div>
                    <div className="row-gap u-text-center u-items-center u-flex-wrap-wrap">
                        <div className="col-1-of-2">
                            <div className="footer__navigation">
                                <ul className="footer__list">
                                    {socialMedias.map((media, idx) => {
                                        return (
                                            <li
                                                key={idx}
                                                className="footer__item tooltip"
                                            >
                                                <a
                                                    href={media.url}
                                                    rel="noopener noreferrer"
                                                    target="_blank"
                                                    className="footer__link"
                                                >
                                                    {media.icon}
                                                </a>
                                                <span className="tooltip__tooltip-text">
                                                    {media.name}
                                                </span>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                        <div className="col-1-of-2">
                            <div className="footer__navigation">
                                <p className="paragraph__footer">
                                    <a
                                        href="https://github.com/roger-takeshita"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        className="paragraph__footer paragraph__footer--link paragraph--animated"
                                    >
                                        <span className="paragraph__footer--developed">
                                            Developed by
                                        </span>
                                        &nbsp; Roger Takeshita
                                    </a>
                                    <br />
                                    This website was developed using React.js,
                                    SASS, BEM Methodology
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
