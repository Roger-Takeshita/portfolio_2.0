import React from 'react';

const SpanGenerator: React.FC = ({ children }) => {
    return (
        <>
            {children!
                .toString()
                .split('')
                .map((char, idx) => {
                    return <span key={idx}>{char}</span>;
                })}
        </>
    );
};

export default SpanGenerator;
