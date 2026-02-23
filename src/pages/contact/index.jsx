import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
    const form = useRef();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // null, 'success', 'error'

    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let newErrors = {};
        const nameRegex = /^[a-zA-Z\s]+$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const mobileRegex = /^[0-9]{10}$/;

        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        } else if (!nameRegex.test(formData.name)) {
            newErrors.name = "Name can only contain letters and spaces";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = "Please enter a valid email address";
        }

        if (!formData.phone.trim()) {
            newErrors.phone = "Phone number is required";
        } else if (!mobileRegex.test(formData.phone)) {
            newErrors.phone = "Please enter a valid 10-digit mobile number";
        }

        if (!formData.message.trim()) {
            newErrors.message = "Message is required";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: ''
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            setIsSubmitting(true);

            // EMAILJS INTEGRATION
            // You need to replace 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', and 'YOUR_PUBLIC_KEY' 
            // with the actual values from your EmailJS dashboard.

            emailjs.sendForm(
                'service_plood3x',
                'template_ir7ugvi',
                form.current,
                '__Hv9K97QwDwHWisE'
            )
                .then((result) => {
                    console.log(result.text);
                    setSubmitStatus('success');
                    setFormData({ name: '', email: '', phone: '', message: '' });
                    setTimeout(() => setSubmitStatus(null), 5000); // Clear message after 5 seconds
                }, (error) => {
                    console.log(error.text);
                    setSubmitStatus('error');
                    setTimeout(() => setSubmitStatus(null), 5000);
                })
                .finally(() => {
                    setIsSubmitting(false);
                });
        }
    };
    return (
        <div className="page-container" style={{ paddingTop: '8rem' }}>
            <div className="container section">
                <div className="grid grid-2 reverse-responsive">
                    <div className="contact-info">
                        <h1 className="section-title">Get In <span className="accent-text">Touch</span></h1>
                        <p className="section-subtitle" style={{ textAlign: 'left', marginBottom: '2rem' }}>
                            Have a question or want to book a consultation? We'd love to hear from you.
                        </p>

                        <div className="contact-methods">
                            <h3 style={{ marginBottom: '1.5rem', fontSize: '1.25rem', color: '#333' }}>Our Offices</h3>

                            {/* Gurgaon Office 1 */}
                            <div className="contact-method-item" style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
                                <div className="icon-box" style={{ background: 'rgba(196, 30, 58, 0.1)', padding: '1rem', borderRadius: '50%', color: 'var(--primary)', height: 'fit-content' }}>
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>GURGAON</h3>
                                    <p style={{ marginBottom: '0.5rem', lineHeight: '1.5' }}>1102, 11th Floor, JMD Megapolis, Sec-48, Gurgaon-122018, Haryana, India</p>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginBottom: '0.25rem', display: 'flex', alignItems: 'center', gap: '5px' }}>
                                        <Phone size={14} /> +0124-4001495
                                    </p>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--text-light)', display: 'flex', alignItems: 'center', gap: '5px' }}>
                                        <Mail size={14} /> Info@kryosssoftech.org
                                    </p>
                                </div>
                            </div>

                            {/* Gurgaon Office 2 */}
                            <div className="contact-method-item" style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
                                <div className="icon-box" style={{ background: 'rgba(196, 30, 58, 0.1)', padding: '1rem', borderRadius: '50%', color: 'var(--primary)', height: 'fit-content' }}>
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>GURGAON</h3>
                                    <p style={{ marginBottom: '0.5rem', lineHeight: '1.5' }}>348-352, Spaze IT Park, Sec-48, Gurgaon-122018, Haryana, India</p>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginBottom: '0.25rem', display: 'flex', alignItems: 'center', gap: '5px' }}>
                                        <Phone size={14} /> +0124-4001298
                                    </p>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--text-light)', display: 'flex', alignItems: 'center', gap: '5px' }}>
                                        <Mail size={14} /> Info@kryosssoftech.org
                                    </p>
                                </div>
                            </div>

                            {/* Pune Office */}
                            <div className="contact-method-item" style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
                                <div className="icon-box" style={{ background: 'rgba(196, 30, 58, 0.1)', padding: '1rem', borderRadius: '50%', color: 'var(--primary)', height: 'fit-content' }}>
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>PUNE</h3>
                                    <p style={{ marginBottom: '0.5rem', lineHeight: '1.5' }}>C-601, Pune IT Park, 34 Aundh Road, Bhau Patil Marg, Pune - 411020 Maharashtra, India.</p>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginBottom: '0.25rem', display: 'flex', alignItems: 'center', gap: '5px' }}>
                                        <Phone size={14} /> +91-020-411208
                                    </p>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--text-light)', display: 'flex', alignItems: 'center', gap: '5px' }}>
                                        <Mail size={14} /> info@kryosssoftech.org
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-container" style={{ background: 'var(--white)', padding: '2.5rem', borderRadius: '20px', boxShadow: 'var(--shadow)' }}>
                        <h3 style={{ marginBottom: '1.5rem' }}>Send us a message</h3>
                        <form ref={form} onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <input type="hidden" name="title" value="New Enquiry from Website" />
                            <div className="form-group">
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '500' }}>Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your Name"
                                    style={{
                                        width: '100%',
                                        padding: '0.8rem',
                                        borderRadius: '8px',
                                        border: errors.name ? '1px solid black' : '1px solid #ddd',
                                        fontFamily: 'inherit'
                                    }}
                                />
                                {errors.name && <span style={{ color: 'red', fontSize: '0.85rem', marginTop: '0.25rem', display: 'block', fontWeight: 'bold' }}>{errors.name}</span>}
                            </div>
                            <div className="form-group">
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '500' }}>Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="your@email.com"
                                    style={{
                                        width: '100%',
                                        padding: '0.8rem',
                                        borderRadius: '8px',
                                        border: errors.email ? '1px solid black' : '1px solid #ddd',
                                        fontFamily: 'inherit'
                                    }}
                                />
                                {errors.email && <span style={{ color: 'red', fontSize: '0.85rem', marginTop: '0.25rem', display: 'block', fontWeight: 'bold' }}>{errors.email}</span>}
                            </div>
                            <div className="form-group">
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '500' }}>Phone</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Mobile Number"
                                    maxLength="10"
                                    style={{
                                        width: '100%',
                                        padding: '0.8rem',
                                        borderRadius: '8px',
                                        border: errors.phone ? '1px solid black' : '1px solid #ddd',
                                        fontFamily: 'inherit'
                                    }}
                                />
                                {errors.phone && <span style={{ color: 'red', fontSize: '0.85rem', marginTop: '0.25rem', display: 'block', fontWeight: 'bold' }}>{errors.phone}</span>}
                            </div>
                            <div className="form-group">
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '500' }}>Message</label>
                                <textarea
                                    rows="4"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell us about your requirements..."
                                    style={{
                                        width: '100%',
                                        padding: '0.8rem',
                                        borderRadius: '8px',
                                        border: errors.message ? '1px solid black' : '1px solid #ddd',
                                        fontFamily: 'inherit'
                                    }}
                                ></textarea>
                                {errors.message && <span style={{ color: 'red', fontSize: '0.85rem', marginTop: '0.25rem', display: 'block', fontWeight: 'bold' }}>{errors.message}</span>}
                            </div>
                            <button type="submit" disabled={isSubmitting} className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', opacity: isSubmitting ? 0.7 : 1 }}>
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                            {submitStatus === 'success' && (
                                <div style={{ marginTop: '1rem', padding: '10px', backgroundColor: '#d4edda', color: '#155724', borderRadius: '5px', textAlign: 'center', fontWeight: '500' }}>
                                    Message sent successfully! We will get back to you soon.
                                </div>
                            )}
                            {submitStatus === 'error' && (
                                <div style={{ marginTop: '1rem', padding: '10px', backgroundColor: '#f8d7da', color: '#721c24', borderRadius: '5px', textAlign: 'center', fontWeight: '500' }}>
                                    Failed to send message. Please try again later.
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
