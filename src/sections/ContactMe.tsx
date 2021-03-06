import React from 'react';
import { Element } from 'react-scroll';
import ContactMeForm from '../components/ContactMeForm';

const ContactMe: React.FC = () => {
    return (
        <Element name="contact-me">
            <div className="section-contact-me">
                <div className="u-text-center">
                    <ContactMeForm />
                </div>
            </div>
        </Element>
    );
};

export default ContactMe;
