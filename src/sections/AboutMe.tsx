import React from 'react';
import profilePhoto from '../assets/images/profile_pic.jpeg';
import Journal from '../components/Journal';

const AboutMe: React.FC = () => {
    return (
        <div className="section-about">
            <div className="u-center-text u-margin-bottom-medium">
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
            <div className="row u-center-text u-center-items">
                <div className="col-1-of-2">
                    <p className="paragraph">
                        Curious and detail-oriented, I approach problems with
                        creativity and efficiency. My background in engineering
                        has allowed me to develop strong problem-solving skills
                        and the love for automating tasks.
                    </p>
                </div>
                <div className="col-1-of-2 u-center-item">
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
    );
};

export default AboutMe;
