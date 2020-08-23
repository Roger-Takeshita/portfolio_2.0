import React, { useEffect, useState } from 'react';
import { Events, Link, scrollSpy } from 'react-scroll';

const Navbar = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        Events.scrollEvent.register('begin', function (to, element) {
            // console.log('begin', arguments);
        });

        Events.scrollEvent.register('end', function (to, element) {
            // console.log('end', arguments);
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

    return (
        <div className={visible ? 'navbar navbar--visible' : 'navbar'}>
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
            <ul className="navbar__list">
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
        </div>
    );
};

export default Navbar;
