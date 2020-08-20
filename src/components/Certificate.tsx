import React from 'react';
import { CertificateProps } from '../utils/interface';

const Certificate: React.FC<CertificateProps> = ({
    institution,
    course,
    date,
    location,
    url,
    logoUri,
    description,
}) => {
    return (
        <div className="certificate u-margin-xsmall u-display-inline-flex">
            <a
                href={url.toString()}
                rel="noopener noreferrer"
                target="_blank"
                className="certificate__link"
            >
                <img
                    src={logoUri.toString()}
                    alt="logo"
                    className="certificate__img"
                />

                <div className="certificate__text-box">
                    <h4 className="heading-quaternary heading-quaternary--black">
                        {course}
                    </h4>
                    <p className="certificate__paragraph">{institution}</p>
                    <p className="certificate__paragraph">{date}</p>
                    <p className="certificate__paragraph">{location}</p>
                </div>
            </a>
        </div>
    );
};

export default Certificate;
