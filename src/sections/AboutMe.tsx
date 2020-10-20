import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Element, Link } from 'react-scroll';
import { useIntersection } from 'react-use';
import profilePhoto from '../assets/images/profile_pic.jpeg';
import Journal from '../components/Journal';
import SpanGenerator from '../components/SpanGenerator';

const AboutMe: React.FC = () => {
    const journalRef = useRef(null);

    const intersectionJournal = useIntersection(journalRef, {
        root: null,
        rootMargin: '150px',
        threshold: 1,
    });

    const fadeInToLeft = (element: string) => {
        gsap.to(element, 3, {
            opacity: 1,
            x: 0,
            ease: 'power4.out',
            stagger: {
                amount: 0.15,
            },
        });
    };

    const fadeOutToRight = (element: string) => {
        gsap.to(element, 3, {
            opacity: 0,
            x: 300,
            ease: 'power4.out',
        });
    };

    const moveToRight = (element: string) => {
        gsap.to(element, 3, {
            x: 0,
            opacity: 1,
            ease: 'power4.out',
            stagger: {
                amount: 0.15,
            },
        });
    };

    const moveToLeft = (element: string) => {
        gsap.to(element, 3, {
            opacity: 0.75,
            x: -300,
            ease: 'power4.out',
        });
    };

    useEffect(() => {
        if (intersectionJournal && intersectionJournal.intersectionRatio < 1) {
            moveToLeft('.block-move');
            fadeOutToRight('.paragraph-fade-in');
        } else {
            moveToRight('.block-move');
            fadeInToLeft('.paragraph-fade-in');
        }
    }, [intersectionJournal]);

    return (
        <Element name="about-me">
            <div className="section-about">
                <div className="u-text-center">
                    <h2 className="heading-secondary heading-secondary__text-title-1">
                        <SpanGenerator>ABOUT ME</SpanGenerator>
                    </h2>
                </div>
                <div
                    className="row u-text-center u-items-center section-about__row"
                    ref={journalRef}
                >
                    <div className="col-1-of-2 paragraph-fade-in">
                        <p className="paragraph">
                            Curious and detail-oriented, I approach problems
                            with creativity and efficiency. My background in
                            engineering has allowed me to develop strong
                            problem-solving skills and the love for automating
                            tasks.
                        </p>
                    </div>
                    <div className="col-1-of-2 section-about__photo block-move">
                        <Link
                            className="section-about__link"
                            to="contact-me"
                            smooth={true}
                            offset={-65}
                            duration={500}
                        >
                            <Journal
                                imgURI={profilePhoto}
                                titleOne="Full-stack developer"
                                text="Curious and detail-oriented, I approach problems with
                                creativity and efficiency. My background in engineering
                                has allowed me to develop strong problem-solving skills
                                and the love for automating tasks. Working with
                                Vaughan’s Economic and Cultural Development Department
                                and General Assembly, the Digital Boost supports local
                                small business owners in finding new opportunities
                                during the COVID-19 crisis by launching/improving an
                                e-commerce store, developing new product lines and
                                services. Working with Digital Main St. and The City of
                                Toronto to build websites for Toronto’s small businesses
                                and artists, in order to provide them with an easy way
                                to transition to sell online during the pandemic. Worked
                                with Digital Main St. and The City of Toronto to build
                                websites for Toronto’s small businesses and artists, in
                                order to provide them with an easy way to transition to
                                to sell online during the pandemic."
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </Element>
    );
};

export default AboutMe;
