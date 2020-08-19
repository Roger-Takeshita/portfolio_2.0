import React from 'react';

const ContactMeForm: React.FC = () => {
    return (
        <div className="row-gap">
            <form className="form">
                <div className="col-1-of-2 u-padding-medium">
                    <div className="u-margin-bottom-medium u-text-center">
                        <h2 className="heading-secondary heading-secondary__text-title-1">
                            Let's get in touch!
                        </h2>
                    </div>
                    <div className="form__group">
                        <input
                            type="text"
                            className="form__input"
                            placeholder="Your Name"
                            required
                            autoComplete="off"
                            id="name"
                            tabIndex={1}
                        />
                        <label htmlFor="name" className="form__label">
                            Your Name
                        </label>
                    </div>
                    <div className="form__group">
                        <input
                            type="email"
                            className="form__input"
                            placeholder="Your Email"
                            required
                            autoComplete="off"
                            id="email"
                            tabIndex={2}
                        />
                        <label htmlFor="email" className="form__label">
                            Your Email
                        </label>
                    </div>
                    <div className="form__group">
                        <button className="btn btn--white" tabIndex={4}>
                            Send
                        </button>
                    </div>
                </div>
                <div className="col-1-of-2 u-padding-medium">
                    <input
                        type="text"
                        className="form__input form__input--message"
                        placeholder="Your Message..."
                        required
                        autoComplete="off"
                        id="message"
                        tabIndex={3}
                    />
                    <label htmlFor="message" className="form__label">
                        Your Message
                    </label>
                </div>
            </form>
        </div>
    );
};

export default ContactMeForm;
