import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import Navbar from '../../components/Navbar';

import '../blogs/BlogArticle.css';

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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
                    setTimeout(() => setSubmitStatus(null), 5000);
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
        <div className="blog-page">
            <Navbar />

            {/* Hero Section */}
            <div className="blog-hero">
                <img
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
                    alt="Contact Us"
                    className="blog-hero__image"
                />
                <div className="blog-hero__overlay">
                    <div className="blog-hero__content">
                        <h1 className="blog-hero__title">Get In <br /><em style={{ color: 'var(--kr-gold)' }}>Touch</em></h1>
                        <p className="blog-hero__subtitle">
                            Have a question or want to book a consultation? We'd love to hear from you.
                        </p>
                    </div>
                </div>
            </div>

            <div className="blog-body">
                {/* Intro */}
                <div style={{ textAlign: 'center', marginBottom: '4rem', marginTop: '4rem' }}>
                    <h2 className="blog-section-title">We are <em style={{ color: 'var(--kr-red)' }}>Here</em> For You</h2>
                    <p style={{ color: 'var(--kr-slate-3)', maxWidth: '700px', margin: '0 auto' }}>
                        Reach out to any of our offices across India. We are ready to help you build your dream home.
                    </p>
                </div>

                <div className="blog-split" style={{ alignItems: 'flex-start' }}>

                    {/* Left Side: Contact Info */}
                    <div className="contact-info">
                        <h3 className="blog-section-title" style={{ fontSize: '1.8rem', marginBottom: '2rem' }}>Our Offices</h3>

                        {/* Gurgaon Office 1 */}
                        <div className="blog-card" style={{ marginBottom: '1.5rem', display: 'flex', flexDirection: 'row', gap: '1.5rem', alignItems: 'flex-start', padding: '1.5rem' }}>
                            <div className="icon-box" style={{ background: 'var(--kr-red-light)', padding: '1rem', borderRadius: '50%', color: 'var(--kr-red)', flexShrink: 0 }}>
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '0.5rem', color: 'var(--kr-slate)' }}>GURGAON</h3>
                                <p style={{ marginBottom: '1rem', lineHeight: '1.6', color: 'var(--kr-slate-3)', fontSize: '0.95rem' }}>
                                    1102, 11th Floor, JMD Megapolis,<br />Sec-48, Gurgaon-122018, Haryana, India
                                </p>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <a href="tel:+01244001495" style={{ fontSize: '0.9rem', color: 'var(--kr-slate)', display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', fontWeight: '500' }}>
                                        <Phone size={16} color="var(--kr-red)" /> +0124-4001495
                                    </a>
                                    <a href="mailto:Info@kryosssoftech.org" style={{ fontSize: '0.9rem', color: 'var(--kr-slate)', display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', fontWeight: '500' }}>
                                        <Mail size={16} color="var(--kr-red)" /> Info@kryosssoftech.org
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Gurgaon Office 2 */}
                        <div className="blog-card" style={{ marginBottom: '1.5rem', display: 'flex', flexDirection: 'row', gap: '1.5rem', alignItems: 'flex-start', padding: '1.5rem' }}>
                            <div className="icon-box" style={{ background: 'var(--kr-red-light)', padding: '1rem', borderRadius: '50%', color: 'var(--kr-red)', flexShrink: 0 }}>
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '0.5rem', color: 'var(--kr-slate)' }}>GURGAON</h3>
                                <p style={{ marginBottom: '1rem', lineHeight: '1.6', color: 'var(--kr-slate-3)', fontSize: '0.95rem' }}>
                                    348-352, Spaze IT Park,<br />Sec-48, Gurgaon-122018, Haryana, India
                                </p>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <a href="tel:+01244001298" style={{ fontSize: '0.9rem', color: 'var(--kr-slate)', display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', fontWeight: '500' }}>
                                        <Phone size={16} color="var(--kr-red)" /> +0124-4001298
                                    </a>
                                    <a href="mailto:Info@kryosssoftech.org" style={{ fontSize: '0.9rem', color: 'var(--kr-slate)', display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', fontWeight: '500' }}>
                                        <Mail size={16} color="var(--kr-red)" /> Info@kryosssoftech.org
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Pune Office */}
                        <div className="blog-card" style={{ display: 'flex', flexDirection: 'row', gap: '1.5rem', alignItems: 'flex-start', padding: '1.5rem' }}>
                            <div className="icon-box" style={{ background: 'var(--kr-red-light)', padding: '1rem', borderRadius: '50%', color: 'var(--kr-red)', flexShrink: 0 }}>
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '0.5rem', color: 'var(--kr-slate)' }}>PUNE</h3>
                                <p style={{ marginBottom: '1rem', lineHeight: '1.6', color: 'var(--kr-slate-3)', fontSize: '0.95rem' }}>
                                    C-601, Pune IT Park, 34 Aundh Road,<br />Bhau Patil Marg, Pune - 411020, Maharashtra, India
                                </p>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <a href="tel:+91020411208" style={{ fontSize: '0.9rem', color: 'var(--kr-slate)', display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', fontWeight: '500' }}>
                                        <Phone size={16} color="var(--kr-red)" /> +91-020-411208
                                    </a>
                                    <a href="mailto:info@kryosssoftech.org" style={{ fontSize: '0.9rem', color: 'var(--kr-slate)', display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', fontWeight: '500' }}>
                                        <Mail size={16} color="var(--kr-red)" /> info@kryosssoftech.org
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Right Side: Form */}
                    <div className="blog-card" style={{ padding: '2.5rem', position: 'sticky', top: '100px' }}>
                        <h3 className="blog-section-title" style={{ fontSize: '1.8rem', marginBottom: '1.5rem' }}>Send us a <em style={{ color: 'var(--kr-red)' }}>Message</em></h3>
                        <form ref={form} onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                            <input type="hidden" name="title" value="New Enquiry from Website" />

                            <div className="form-group">
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '600', color: 'var(--kr-slate)' }}>Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your Name"
                                    style={{
                                        width: '100%',
                                        padding: '0.9rem 1rem',
                                        borderRadius: '8px',
                                        border: errors.name ? '1.5px solid var(--kr-red)' : '1px solid var(--kr-border)',
                                        fontFamily: 'inherit',
                                        fontSize: '0.95rem',
                                        background: 'var(--kr-light)',
                                        outline: 'none',
                                        transition: 'border-color 0.3s'
                                    }}
                                />
                                {errors.name && <span style={{ color: 'var(--kr-red)', fontSize: '0.85rem', marginTop: '0.4rem', display: 'block', fontWeight: '500' }}>{errors.name}</span>}
                            </div>

                            <div className="form-group">
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '600', color: 'var(--kr-slate)' }}>Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="your@email.com"
                                    style={{
                                        width: '100%',
                                        padding: '0.9rem 1rem',
                                        borderRadius: '8px',
                                        border: errors.email ? '1.5px solid var(--kr-red)' : '1px solid var(--kr-border)',
                                        fontFamily: 'inherit',
                                        fontSize: '0.95rem',
                                        background: 'var(--kr-light)',
                                        outline: 'none',
                                        transition: 'border-color 0.3s'
                                    }}
                                />
                                {errors.email && <span style={{ color: 'var(--kr-red)', fontSize: '0.85rem', marginTop: '0.4rem', display: 'block', fontWeight: '500' }}>{errors.email}</span>}
                            </div>

                            <div className="form-group">
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '600', color: 'var(--kr-slate)' }}>Phone</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Mobile Number"
                                    maxLength="10"
                                    style={{
                                        width: '100%',
                                        padding: '0.9rem 1rem',
                                        borderRadius: '8px',
                                        border: errors.phone ? '1.5px solid var(--kr-red)' : '1px solid var(--kr-border)',
                                        fontFamily: 'inherit',
                                        fontSize: '0.95rem',
                                        background: 'var(--kr-light)',
                                        outline: 'none',
                                        transition: 'border-color 0.3s'
                                    }}
                                />
                                {errors.phone && <span style={{ color: 'var(--kr-red)', fontSize: '0.85rem', marginTop: '0.4rem', display: 'block', fontWeight: '500' }}>{errors.phone}</span>}
                            </div>

                            <div className="form-group">
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '600', color: 'var(--kr-slate)' }}>Message</label>
                                <textarea
                                    rows="4"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell us about your requirements..."
                                    style={{
                                        width: '100%',
                                        padding: '0.9rem 1rem',
                                        borderRadius: '8px',
                                        border: errors.message ? '1.5px solid var(--kr-red)' : '1px solid var(--kr-border)',
                                        fontFamily: 'inherit',
                                        fontSize: '0.95rem',
                                        background: 'var(--kr-light)',
                                        outline: 'none',
                                        transition: 'border-color 0.3s',
                                        resize: 'vertical'
                                    }}
                                ></textarea>
                                {errors.message && <span style={{ color: 'var(--kr-red)', fontSize: '0.85rem', marginTop: '0.4rem', display: 'block', fontWeight: '500' }}>{errors.message}</span>}
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="blog-hero__cta"
                                style={{
                                    width: '100%',
                                    justifyContent: 'center',
                                    opacity: isSubmitting ? 0.7 : 1,
                                    marginTop: '0.5rem',
                                    border: 'none',
                                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                                    padding: '1rem',
                                    borderRadius: '50px'
                                }}
                            >
                                {isSubmitting ? 'Sending...' : (
                                    <>
                                        Send Message <Send size={18} />
                                    </>
                                )}
                            </button>

                            {submitStatus === 'success' && (
                                <div style={{ marginTop: '0.5rem', padding: '12px', backgroundColor: '#ecfdf5', border: '1px solid #10b981', color: '#047857', borderRadius: '8px', textAlign: 'center', fontSize: '0.9rem', fontWeight: '500' }}>
                                    Message sent successfully! We will get back to you soon.
                                </div>
                            )}
                            {submitStatus === 'error' && (
                                <div style={{ marginTop: '0.5rem', padding: '12px', backgroundColor: '#fef2f2', border: '1px solid #ef4444', color: '#b91c1c', borderRadius: '8px', textAlign: 'center', fontSize: '0.9rem', fontWeight: '500' }}>
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
