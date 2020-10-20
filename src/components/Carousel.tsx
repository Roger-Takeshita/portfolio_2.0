import React, { useState } from 'react';
import { onlineEducation } from '../assets/data/education';
import Dots from './Dots';

const Carousel: React.FC = () => {
    const [translateX, setTranslateX] = useState<number>(0);
    const [cert, setCert] = useState<number>(0);

    const handleClickLeft = () => {
        if (translateX === 0) {
            setTranslateX(-100 * (onlineEducation.length - 1));
            setCert(onlineEducation.length - 1);
        } else {
            setTranslateX((prev) => prev + 100);
            setCert((prev) => prev - 1);
        }
    };

    const handleClickRight = () => {
        if (translateX === -100 * (onlineEducation.length - 1)) {
            setTranslateX(0);
            setCert(0);
        } else {
            setTranslateX((prev) => prev - 100);
            setCert((prev) => prev + 1);
        }
    };

    const handleDotClick = (idx: number) => {
        setTranslateX(-100 * idx);
        setCert(idx);
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
                            loading="lazy"
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
            <Dots
                idx={cert}
                certificates={onlineEducation}
                handleDotClick={handleDotClick}
            />
        </div>
    );
};

export default Carousel;
