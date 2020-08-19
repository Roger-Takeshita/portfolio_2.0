import React from 'react';
import { education } from '../assets/data/education';
import Carousel from '../components/Carousel';
import Certificate from '../components/Certificate';

const Education: React.FC = () => {
    return (
        <div className="section-education">
            <div className="u-text-center u-margin-bottom-large">
                <h2 className="heading-secondary heading-secondary__text-title-1">
                    <span>E</span>
                    <span>D</span>
                    <span>U</span>
                    <span>C</span>
                    <span>A</span>
                    <span>T</span>
                    <span>I</span>
                    <span>O</span>
                    <span>N</span>
                </h2>
            </div>
            <div className="row u-text-center u-items-center u-flex-wrap-wrap">
                <div className="col-1-of-1">
                    {education.map((course, idx) => {
                        return (
                            <Certificate
                                key={idx}
                                institution={course.institution}
                                course={course.course}
                                date={course.date}
                                location={course.location}
                                logoUri={course.logoUri.toString()}
                                url={course.url.toString()}
                            />
                        );
                    })}
                    <Carousel />
                </div>
            </div>
            {/* <div className="row u-text-center u-items-center"></div> */}
        </div>
    );
};

export default Education;
