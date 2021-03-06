import React from 'react';
import { socialMedias } from '../assets/data/social_medias';
import pdfLogo from '../assets/images/logos/pdf.svg';

const Footer: React.FC = () => {
    return (
        <div className="section-footer">
            <div className="row">
                <div className="col-1-of-1">
                    <div className="footer__resume">
                        <div className="footer__resume-box">
                            <a
                                href="/Resume_-_Roger_Takeshita.pdf"
                                className="footer__resume-link tooltip"
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
                                <span className="tooltip__tooltip-text tooltip__tooltip-text--1">
                                    Download
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="row-gap u-text-center u-items-center ">
                        <div className="col-1-of-2 col-1-of-2--footer">
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
                        <div className="col-1-of-2 col-1-of-2--footer">
                            <div className="footer__navigation">
                                <p className="paragraph__footer">
                                    <a
                                        href="https://github.com/roger-takeshita"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        className="paragraph__footer paragraph__footer--link paragraph--animated"
                                    >
                                        <span className="paragraph__footer--name">
                                            &copy; Roger Takeshita - 2020. All
                                            rights reserved.
                                        </span>
                                    </a>
                                    <br />
                                    This website was developed using React.js,
                                    Redux Thunk, JavaScript/TypeScript,
                                    CSS/SASS, GSAP, and BEM.
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
