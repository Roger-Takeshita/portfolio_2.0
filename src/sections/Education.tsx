import React from 'react';
import { Element } from 'react-scroll';
import { education } from '../assets/data/education';
import Carousel from '../components/Carousel';
import Certificate from '../components/Certificate';
import SpanGenerator from '../components/SpanGenerator';

const Education: React.FC = () => {
    return (
        <Element name="education">
            <div className="section-education">
                <div className="u-text-center">
                    <h2 className="heading-secondary heading-secondary__text-title-1">
                        <SpanGenerator>EDUCATION</SpanGenerator>
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
            </div>
        </Element>
    );
};

export default Education;
