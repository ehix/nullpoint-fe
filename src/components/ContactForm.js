import { useState } from 'react';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preDefault();
        console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
        // You can replace the console.log statement with your own code to handle the form submission
    };

    return (
        <form className="contact__form" onSubmit={handleSubmit}>
            <fieldset className="contact__fieldset">
                <legend className="contact__legend">Information</legend>
                <div className="form__row">
                    <input className="contact__input" type="text" value={name} placeholder="Name" onChange={(e) => setName(e.target.value)}/>
                    <input className="contact__input" type="email" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form__col">
                    <label className="contact__label" htmlFor="message">Message</label>
                    <textarea id="message" className="contact__textarea" value={message} placeholder="..." onChange={(e) => setMessage(e.target.value)} />
                </div>
                <div className="form__col">
                    <button className="contact__button animated-button"type="submit">Submit</button>
                </div>
                <input type="text" name="_honey" style={{ display:"none"}}/>
                <input type="hidden" name="_captcha" value="false"/>
                <input type="hidden" name="_subject" value="contact"/>
            </fieldset>
        </form>
    );
}

export default ContactForm