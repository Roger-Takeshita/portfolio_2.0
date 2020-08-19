import emailjs from 'emailjs-com';
import React, { ChangeEvent, FormEvent, useState } from 'react';

interface Form {
    name: string;
    email: string;
    msg: string;
}

const ContactMeForm: React.FC = () => {
    const [form, setForm] = useState<Form>({
        name: '',
        email: '',
        msg: '',
    });

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        console.log(e.target.name, e.target.value);
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
        // console.log(form);
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const data = {
            user_name: form.name,
            user_email: form.email,
            message_html: form.msg,
        };

        try {
            await emailjs.send(
                'default_service',
                'portfolio',
                data,
                'user_svVzdsNvPIpH9UZdGsjUw'
            );

            //TODO ADD the popup

            setForm({
                name: '',
                email: '',
                msg: '',
            });
        } catch (error) {
            console.log(error);
        }
    };

    const emailVerification = (email: string) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };

    const isFormValid = () => {
        return !(
            form.name.length > 0 &&
            form.email.length > 0 &&
            form.msg.length > 0 &&
            form.name.trim() !== '' &&
            form.email.trim() !== '' &&
            form.msg.trim() !== '' &&
            emailVerification(form.email)
        );
    };

    return (
        <div className="row-gap">
            <form onSubmit={handleSubmit} className="form u-padding-medium">
                <div className="row u-width-100 u-margin-bottom-xsmall">
                    <div className="col-1-of-2">
                        <div className="u-margin-bottom-xsmall">
                            <h2 className="heading-secondary heading-secondary__text-title-1">
                                Let's get in touch
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
                                name="name"
                                onChange={handleChange}
                                value={form.name}
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
                                name="email"
                                onChange={handleChange}
                                value={form.email}
                                tabIndex={2}
                            />
                            <label htmlFor="email" className="form__label">
                                Your Email
                            </label>
                        </div>
                    </div>
                    <div className="col-1-of-2">
                        <div className="form__group form__group--message">
                            <textarea
                                className="form__input form__input--message"
                                placeholder="Your Message..."
                                required
                                autoComplete="off"
                                id="msg"
                                name="msg"
                                onChange={handleChange}
                                spellCheck="false"
                                value={form.msg}
                                tabIndex={3}
                            />
                            <label htmlFor="msg" className="form__label">
                                Your Message
                            </label>
                        </div>
                    </div>
                </div>
                <div className="row u-width-100">
                    <div className="col-1-of-1">
                        <div className="form__group form__group--ctrl">
                            <button
                                type="submit"
                                disabled={isFormValid()}
                                className="btn btn--white"
                                tabIndex={4}
                            >
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ContactMeForm;
