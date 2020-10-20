import React from 'react';
import { DotsProps } from '../@types/types';

const Dots: React.FC<DotsProps> = ({ idx, certificates, handleDotClick }) => {
    return (
        <div className={'dots'}>
            {certificates.map((_, idx2) => {
                return (
                    <span
                        onClick={() => handleDotClick(idx2)}
                        key={idx2}
                        className={
                            idx === idx2
                                ? 'dots__dot dots__dot--active'
                                : 'dots__dot'
                        }
                    />
                );
            })}
        </div>
    );
};

export default Dots;
