import React, { useState } from 'react';
import { onlineEducation } from '../assets/data/education';

const Carousel: React.FC = () => {
    const [translateX, setTranslateX] = useState(0);

    const handleClickLeft = () => {
        translateX === 0
            ? setTranslateX(-100 * (onlineEducation.length - 1))
            : setTranslateX((prev) => prev + 100);
    };
    const handleClickRight = () => {
        translateX === -100 * (onlineEducation.length - 1)
            ? setTranslateX(0)
            : setTranslateX((prev) => prev - 100);
    };

    return (
        <div className="carousel u-margin-xsmall u-display-inline-flex">
            {onlineEducation.map((course, idx) => {
                return (
                    <div
                        key={idx}
                        className="carousel__slide"
                        style={{ transform: `translateX(${translateX}%)` }}
                    >
                        <img
                            key={idx}
                            src={course.certificateUri}
                            alt={course.alt}
                            className="carousel__img"
                        />
                    </div>
                );
            })}
            <button
                className="btn-carousel btn-carousel--left"
                onClick={handleClickLeft}
            >
                &lt;
            </button>
            <button
                className="btn-carousel btn-carousel--right"
                onClick={handleClickRight}
            >
                &gt;
            </button>
        </div>
    );
};

export default Carousel;
