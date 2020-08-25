import React, { useEffect, useState } from 'react';
import { Events, Link, scrollSpy } from 'react-scroll';

const Navbar = () => {
    const [visible, setVisible] = useState(false);
    const [btnStatus, setBtnStatus] = useState(false);
    const [windowDom, setWindowDom] = useState({
        width: 0,
        height: 0,
    });

    useEffect(() => {
        updateWindowDimensions();
    }, []);

    useEffect(() => {
        if (windowDom.width < 1050) {
            console.log('entrou');
            setBtnStatus(false);
        }
        window.addEventListener('resize', updateWindowDimensions);

        return () => {
            window.removeEventListener('resize', updateWindowDimensions);
        };
    }, [windowDom]);

    const updateWindowDimensions = () => {
        setWindowDom({ width: window.innerWidth, height: window.innerHeight });
    };

    useEffect(() => {
        Events.scrollEvent.register('begin', function (to, element) {
            console.log('begin', arguments);
        });

        Events.scrollEvent.register('end', function (to, element) {
            console.log('end', arguments);
        });

        scrollSpy.update();

        return () => {
            Events.scrollEvent.remove('begin');
            Events.scrollEvent.remove('end');
        };
    }, []);

    const handleSetActive = (to: string) => {
        if (to === 'header-portfolio') {
            setVisible(false);
        } else {
            setVisible(true);
        }
    };

    const handleClick = (e: any) => {
        e.preventDefault();
        setBtnStatus((prevState) => !prevState);
        console.log(btnStatus);
    };

    return (
        <div
            className={
                visible
                    ? `navbar navbar--visible ${
                          btnStatus ? 'navbar--column' : ''
                      }`
                    : `navbar ${btnStatus ? 'navbar--column' : ''}`
            }
        >
            <Link
                className="navbar__logo"
                to="header-portfolio"
                spy={true}
                smooth={true}
                duration={500}
                onSetActive={handleSetActive}
            >
                Roger Takeshita
            </Link>
            <ul
                className={`navbar__list ${
                    btnStatus ? 'navbar__list--visible' : 'navbar__list--hidden'
                }`}
            >
                <li className="navbar__item">
                    <Link
                        className="navbar__link"
                        activeClass="navbar--active"
                        to="about-me"
                        spy={true}
                        smooth={true}
                        offset={-66}
                        duration={500}
                        onSetActive={handleSetActive}
                    >
                        About Me
                    </Link>
                </li>
                <li className="navbar__item">
                    <Link
                        className="navbar__link"
                        activeClass="navbar--active"
                        to="skills"
                        spy={true}
                        smooth={true}
                        offset={-65}
                        duration={500}
                        onSetActive={handleSetActive}
                    >
                        Skills
                    </Link>
                </li>
                <li className="navbar__item">
                    <Link
                        className="navbar__link"
                        activeClass="navbar--active"
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={-65}
                        duration={500}
                        onSetActive={handleSetActive}
                    >
                        Projects
                    </Link>
                </li>
                <li className="navbar__item">
                    <Link
                        className="navbar__link"
                        activeClass="navbar--active"
                        to="education"
                        spy={true}
                        smooth={true}
                        offset={-65}
                        duration={500}
                        onSetActive={handleSetActive}
                    >
                        Education
                    </Link>
                </li>
                <li className="navbar__item">
                    <Link
                        className="navbar__link"
                        activeClass="navbar--active"
                        to="contact-me"
                        spy={true}
                        smooth={true}
                        offset={-65}
                        duration={500}
                        onSetActive={handleSetActive}
                    >
                        Contact Me
                    </Link>
                </li>
            </ul>
            <div
                onClick={handleClick}
                className={
                    visible
                        ? `navbar__btn ${
                              btnStatus
                                  ? 'navbar__btn--open'
                                  : 'navbar__btn--close'
                          }`
                        : `navbar__btn navbar__btn--fade ${
                              btnStatus
                                  ? 'navbar__btn--open'
                                  : 'navbar__btn--close'
                          }`
                }
            >
                <div className="navbar__btn__burger"></div>
            </div>
        </div>
    );
};

export default Navbar;
