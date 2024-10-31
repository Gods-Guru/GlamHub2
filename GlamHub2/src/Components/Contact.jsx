import React, { useState } from 'react';
import Banner from './Banner';
import { assets } from '../assets';

const Contact = () => {
    const [alertVisible, setAlertVisible] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        setAlertVisible(true);
        setFormData({ name: '', email: '', message: '' });

        setTimeout(() => {
            setAlertVisible(false);
        }, 3000);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    return (
        <div className="contact-page">
            <div className="">
            <Banner 
            title="KEEP IN TOUCH!" 
            description="Get the latest offers and don't miss out on the latest products. Keep in touch with Us."
            backgroundImage={assets.pink} 
            />
            </div>
            <h1>Contact Us</h1>

            {/* Banner Section */}
            <div className="contact-banner">
                <h2>We're Here to Help!</h2>
                <p>Feel free to reach out with any questions or concerns. Our team is ready to assist you!</p>
            </div>

            {/* Contact Form */}
            <form className="contact-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></textarea>
                <button type="submit">Send Message</button>
            </form>

            {/* Alert message */}
            {alertVisible && (
                <div className="alert">
                    Your message has been sent!
                </div>
            )}
        </div>
    );
};

export default Contact;
