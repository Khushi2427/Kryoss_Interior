import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import '../blogs/BlogArticle.css';

const Contact = () => {
    const form = useRef();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const [errors, setErrors] = useState({});

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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

    const offices = [
        {
            title: "GURGAON HQ",
            address: "1102, 11th Floor, JMD Megapolis, Sec-48, Gurgaon-122018, Haryana, India",
            phone: "+0124-4001495",
            email: "Info@kryosssoftech.org"
        },
        {
            title: "GURGAON STUDIO",
            address: "348-352, Spaze IT Park, Sec-48, Gurgaon-122018, Haryana, India",
            phone: "+0124-4001298",
            email: "Info@kryosssoftech.org"
        },
        {
            title: "PUNE OFFICE",
            address: "C-601, Pune IT Park, 34 Aundh Road, Bhau Patil Marg, Pune - 411020 Maharashtra, India",
            phone: "+91-020-411208",
            email: "info@kryosssoftech.org"
        }
    ];

    const inputStyle = (hasError) => ({
        width: '100%',
        padding: '1rem',
        borderRadius: '8px',
        border: hasError ? '1px solid var(--kr-red)' : '1px solid #ddd',
        background: '#fff',
        color: '#333',
        fontFamily: 'inherit',
        fontSize: '1rem',
        transition: 'all 0.3s ease',
        outline: 'none',
        boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.05)'
    });

    return (
        <div className="blog-page">
            <div className="blog-hero">
                <img
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80"
                    alt="Kryoss Office"
                    className="blog-hero__image"
                />
                <div className="blog-hero__overlay" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.95))' }}>
                    <div className="blog-hero__content">
                        <h1 className="blog-hero__title">Get in <br /><em style={{ color: 'var(--kr-gold)' }}>Touch</em></h1>
                        <p className="blog-hero__subtitle">
                            Have a question or want to book a consultation? We would love to hear from you and help craft your perfect space.
                        </p>
                    </div>
                </div>
            </div>

            <section className="section" style={{ padding: '4rem 0', background: '#fff' }}>
                <div className="container">
                    <div className="section-header text-center">
                        <h2 className="blog-section-title">Our <em style={{ color: 'var(--kr-red)' }}>Offices</em></h2>
                        <p className="section-subtitle">We currently operate out of these key locations in India to bring excellent interiors near you.</p>
                    </div>

                    <div className="grid grid-3" style={{ gap: '2rem' }}>
                        {offices.map((office, index) => (
                            <div key={index} className="blog-card" style={{ padding: '2.5rem 2rem', background: '#fff', border: '1px solid #eee', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                                <div style={{ background: 'rgba(196, 30, 58, 0.1)', padding: '1.2rem', borderRadius: '50%', color: 'var(--kr-red)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <MapPin size={28} />
                                </div>
                                <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: '#222', letterSpacing: '0.05em', fontFamily: 'Outfit, sans-serif' }}>
                                    {office.title}
                                </h3>
                                <p style={{ color: '#666', marginBottom: '2rem', lineHeight: '1.6', fontSize: '0.95rem', flex: 1 }}>
                                    {office.address}
                                </p>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', width: '100%' }}>
                                    <a href={`tel:${office.phone}`} style={{ fontSize: '0.95rem', color: '#555', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', textDecoration: 'none' }}>
                                        <Phone size={16} color="var(--kr-red)" /> {office.phone}
                                    </a>
                                    <a href={`mailto:${office.email}`} style={{ fontSize: '0.95rem', color: '#555', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', textDecoration: 'none' }}>
                                        <Mail size={16} color="var(--kr-red)" /> {office.email}
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section" style={{ padding: '2rem 0 6rem', background: '#fff' }}>
                <div className="container">
                    <div className="section-header text-center">
                        <h2 className="blog-section-title">Send a <em style={{ color: 'var(--kr-red)' }}>Message</em></h2>
                        <p className="section-subtitle">Fill out the form below and one of our design experts will get back to you shortly.</p>
                    </div>

                    <div className="blog-card" style={{ maxWidth: '800px', margin: '0 auto', padding: '3.5rem', background: '#fff', border: '1px solid #eee', boxShadow: '0 10px 40px rgba(0,0,0,0.08)' }}>
                        <form ref={form} onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.8rem' }}>
                            <input type="hidden" name="title" value="New Enquiry from Website" />

                            <div className="form-group">
                                <label style={{ display: 'block', marginBottom: '0.8rem', fontSize: '0.95rem', color: '#444', fontWeight: 500 }}>Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter your full name"
                                    style={inputStyle(errors.name)}
                                    onFocus={(e) => e.target.style.borderColor = 'var(--kr-red)'}
                                    onBlur={(e) => e.target.style.borderColor = errors.name ? 'var(--kr-red)' : '#ddd'}
                                />
                                {errors.name && <span style={{ color: 'var(--kr-red)', fontSize: '0.85rem', marginTop: '0.4rem', display: 'block' }}>{errors.name}</span>}
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.8rem' }}>
                                <div className="form-group">
                                    <label style={{ display: 'block', marginBottom: '0.8rem', fontSize: '0.95rem', color: '#444', fontWeight: 500 }}>Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="your@email.com"
                                        style={inputStyle(errors.email)}
                                        onFocus={(e) => e.target.style.borderColor = 'var(--kr-red)'}
                                        onBlur={(e) => e.target.style.borderColor = errors.email ? 'var(--kr-red)' : '#ddd'}
                                    />
                                    {errors.email && <span style={{ color: 'var(--kr-red)', fontSize: '0.85rem', marginTop: '0.4rem', display: 'block' }}>{errors.email}</span>}
                                </div>

                                <div className="form-group">
                                    <label style={{ display: 'block', marginBottom: '0.8rem', fontSize: '0.95rem', color: '#444', fontWeight: 500 }}>Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="Your 10-digit number"
                                        maxLength="10"
                                        style={inputStyle(errors.phone)}
                                        onFocus={(e) => e.target.style.borderColor = 'var(--kr-red)'}
                                        onBlur={(e) => e.target.style.borderColor = errors.phone ? 'var(--kr-red)' : '#ddd'}
                                    />
                                    {errors.phone && <span style={{ color: 'var(--kr-red)', fontSize: '0.85rem', marginTop: '0.4rem', display: 'block' }}>{errors.phone}</span>}
                                </div>
                            </div>

                            <div className="form-group">
                                <label style={{ display: 'block', marginBottom: '0.8rem', fontSize: '0.95rem', color: '#444', fontWeight: 500 }}>How can we help you?</label>
                                <textarea
                                    rows="5"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell us about your home interior requirements..."
                                    style={{ ...inputStyle(errors.message), resize: 'vertical', minHeight: '150px' }}
                                    onFocus={(e) => e.target.style.borderColor = 'var(--kr-red)'}
                                    onBlur={(e) => e.target.style.borderColor = errors.message ? 'var(--kr-red)' : '#ddd'}
                                ></textarea>
                                {errors.message && <span style={{ color: 'var(--kr-red)', fontSize: '0.85rem', marginTop: '0.4rem', display: 'block' }}>{errors.message}</span>}
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                style={{
                                    width: '100%',
                                    padding: '1.2rem',
                                    background: 'var(--kr-red)',
                                    color: '#fff',
                                    border: 'none',
                                    borderRadius: '50px',
                                    fontWeight: '600',
                                    fontSize: '1.1rem',
                                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                                    opacity: isSubmitting ? 0.7 : 1,
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    gap: '10px',
                                    transition: 'all 0.3s ease',
                                    marginTop: '1.5rem'
                                }}
                                onMouseOver={(e) => { if (!isSubmitting) { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(196, 30, 58, 0.3)'; } }}
                                onMouseOut={(e) => { if (!isSubmitting) { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; } }}
                            >
                                {isSubmitting ? 'Sending Request...' : <>Send Request <ArrowRight size={18} /></>}
                            </button>

                            {submitStatus === 'success' && (
                                <div style={{ padding: '1rem', backgroundColor: 'rgba(46, 204, 113, 0.1)', border: '1px solid #2ecc71', color: '#2ecc71', borderRadius: '8px', textAlign: 'center', fontSize: '0.95rem', marginTop: '1rem' }}>
                                    Thank you! Your message has been sent successfully. We will contact you soon.
                                </div>
                            )}
                            {submitStatus === 'error' && (
                                <div style={{ padding: '1rem', backgroundColor: 'rgba(196, 30, 58, 0.1)', border: '1px solid var(--kr-red)', color: 'var(--kr-red)', borderRadius: '8px', textAlign: 'center', fontSize: '0.95rem', marginTop: '1rem' }}>
                                    Oops! Something went wrong. Please try again later.
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
