import React from 'react';

const Navbar: React.FC = () => {
    return (
        <div className="navbar">
            <a href="#" className="navbar__logo">
                Roger Takeshita
            </a>
            <ul className="navbar__list">
                <li className="navbar__item">
                    <a href="#about-me" className="navbar__link">
                        About Me
                    </a>
                </li>
                <li className="navbar__item">
                    <a href="#skills" className="navbar__link">
                        Skills
                    </a>
                </li>
                <li className="navbar__item">
                    <a href="#projects" className="navbar__link">
                        Projects
                    </a>
                </li>
                <li className="navbar__item">
                    <a href="#education" className="navbar__link">
                        Education
                    </a>
                </li>
                <li className="navbar__item">
                    <a href="#contact-me" className="navbar__link">
                        Contact Me
                    </a>
                </li>
            </ul>
            <div className="navbar__btn">
                <div className="navbar__btn__burger"></div>
            </div>
        </div>
    );
};

export default Navbar;
