import { useState, useEffect } from 'react';

const Alert = ({ message, isLoading }) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (message || isLoading) {
            setVisible(true);
            if (!isLoading) {
                const timer = setTimeout(() => {
                    setVisible(false);
                }, 5000);
                return () => clearTimeout(timer);
            }
        }
    }, [message, isLoading]);

    if (!visible) return null;
    return (
        <div className="alert">
            {isLoading ? 'Loading...' : message}
        </div>
    );
};

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [alert, setAlert] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);

        fetch('https://formsubmit.co/ajax/contact@nullpoint.cloud', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(Object.fromEntries(new FormData(e.target))),
        })
            .then(response => response.json())
            .then(data => {
                setIsLoading(false);
                setAlert('Your submission was sent successfully!');
                setName('');
                setEmail('');
                setMessage('');
            })
            .catch(error => {
                setIsLoading(false);
                setAlert('Unable to send message. Please try again.');
            });
    };

    return (
        <>
            <Alert message={alert} isLoading={isLoading} />
            <form className="contact__form" onSubmit={handleSubmit}>
                <fieldset className="contact__fieldset">
                    <legend className="contact__legend">Information</legend>
                    <div className="form__row">
                        <input className="contact__input" type="text" name="name" value={name} placeholder="Name" onChange={(e) => setName(e.target.value)} required />
                        <input className="contact__input" type="email" name="email" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className="form__col">
                        <label className="contact__label" htmlFor="message">Message</label>
                        <textarea className="contact__textarea" id="message" name="message" value={message} placeholder="..." onChange={(e) => setMessage(e.target.value)} required />
                    </div>
                    <div className="form__col">
                        <button className="contact__button animated-button" type="submit">Submit</button>
                    </div>
                    <input type="text" name="_honey" style={{ display: "none" }} />
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_subject" value="contact" />
                </fieldset>
            </form>
        </>
    );
}

export default ContactForm;