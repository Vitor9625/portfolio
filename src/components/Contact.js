// src/components/Contact.js
import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section className="contact-section">
            <h2>Contato</h2>
            <div className="contact-info">
                <p><strong>Email:</strong> badin471@gmail.com</p>
                <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/vitor-badin-876961240/" target="_blank" rel="noopener noreferrer">Meu LinkedIn</a></p>
                <p><strong>GitHub:</strong> <a href="https://github.com/Vitor9625" target="_blank" rel="noopener noreferrer">Meu GitHub</a></p>
            </div>
        </section>
    );
};

export default Contact;
