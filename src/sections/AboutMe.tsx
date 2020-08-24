import { gsap } from 'gsap';
import React, { useEffect, useRef } from 'react';
import { Element } from 'react-scroll';
import { useIntersection } from 'react-use';
import profilePhoto from '../assets/images/profile_pic.jpeg';
import Journal from '../components/Journal';

const AboutMe: React.FC = () => {
    const paragraphRef = useRef(null);
    const photoRef = useRef(null);

    const intersectionParagraph = useIntersection(paragraphRef, {
        root: null, // browser viewport
        rootMargin: '100px', // Margin, 0px only when hits the end it will animate
        threshold: 1, // Do the animation only after the element is complete visible
    });

    const intersectionPhoto = useIntersection(photoRef, {
        root: null,
        rootMargin: '183px',
        threshold: 1,
    });

    const fadeInFromLeft = (element: string) => {
        gsap.to(element, 2, {
            opacity: 1,
            x: 0,
            ease: 'power4.out',
            stagger: {
                amount: 0.15,
            },
        });
    };

    const fadeOutToRight = (element: string) => {
        gsap.to(element, 2, {
            opacity: 0,
            x: 285,
            ease: 'power4.out',
        });
    };

    const moveToRight = (element: string) => {
        gsap.to(element, 3, {
            x: 0,
            ease: 'power4.out',
            stagger: {
                amount: 0.15,
            },
        });
    };

    const moveFromLeft = (element: string) => {
        gsap.to(element, 3, {
            x: -345,
            ease: 'power4.out',
        });
    };

    useEffect(() => {
        intersectionParagraph && intersectionParagraph.intersectionRatio < 1
            ? fadeOutToRight('.paragraph-fade-in')
            : fadeInFromLeft('.paragraph-fade-in');

        intersectionPhoto && intersectionPhoto.intersectionRatio < 1
            ? moveFromLeft('.block-move')
            : moveToRight('.block-move');
    }, [intersectionParagraph, intersectionPhoto]);

    return (
        <Element name="about-me">
            <div className="section-about">
                <div className="u-text-center u-margin-bottom-large">
                    <h2 className="heading-secondary heading-secondary__text-title-1">
                        <span>A</span>
                        <span>B</span>
                        <span>O</span>
                        <span>U</span>
                        <span>T</span>
                        <span></span>
                        <span>M</span>
                        <span>E</span>
                    </h2>
                </div>
                <div className="row u-text-center u-items-center">
                    <div
                        className="col-1-of-2 paragraph-fade-in"
                        ref={paragraphRef}
                    >
                        <p className="paragraph">
                            Curious and detail-oriented, I approach problems
                            with creativity and efficiency. My background in
                            engineering has allowed me to develop strong
                            problem-solving skills and the love for automating
                            tasks.
                        </p>
                    </div>
                    <div
                        className="col-1-of-2 u-item-right block-move"
                        ref={photoRef}
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
                    </div>
                </div>
            </div>
        </Element>
    );
};

export default AboutMe;
