//contactus.jsx

import React, { useState, useRef } from 'react';
import './contactus.css';
import emailjs from 'emailjs-com';

function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const form = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        emailjs
            .sendForm('service_c0gpluf', 'template_nrukvp6', form.current, 'AhYD38p9uGAzThOgX')
            .then(
                (response) => {
                    console.log('SUCCESS!', response.status, response.text);
                },
                (error) => {
                    console.log('FAILED...', error);
                }
            );
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className="contact-form-container">
            <form ref={form} className="contact-form" onSubmit={handleSubmit}>
                <h2>Get In Touch</h2>
                <div className="input-group">
                    <input
                        type="text"
                        name="from_name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Name"
                        required
                    />
                </div>
                <div className="input-group">
                    <input
                        type="email"
                        name="from_name"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        required
                    />
                </div>
                <div className="input-group">
                    <textarea
                        name="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Message"
                        required
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default ContactForm;
