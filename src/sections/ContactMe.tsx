import React from 'react';
import ContactMeForm from '../components/ContactMeForm';

const ContactMe: React.FC = () => {
    return (
        <div className="section-contact-me" id="contact-me">
            <div className="u-text-center u-margin-top-large u-margin-bottom-large">
                <ContactMeForm />
            </div>
        </div>
    );
};

export default ContactMe;
