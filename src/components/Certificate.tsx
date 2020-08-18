import React from 'react';

interface certificateProps {
    institution: String;
    course: String;
    date?: String;
    location?: String;
    url: String;
    logoUri: String;
    description?: String;
}

const Certificate: React.FC<certificateProps> = ({
    institution,
    course,
    date,
    location,
    url,
    logoUri,
    description,
}) => {
    return (
        <div className="certificate">
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
            </a>
            <div className="certificate__text-box">
                <h4 className="heading-quaternary heading-quaternary--black">
                    {course}
                </h4>
                <p className="certificate__paragraph">{institution}</p>
                <p className="certificate__paragraph">{date}</p>
                <p className="certificate__paragraph">{location}</p>
            </div>
        </div>
    );
};

export default Certificate;
