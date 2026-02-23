import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../blogs/BlogArticle.css';
import home from '../../assets/offerings/home.png';
import completehome from '../../assets/offerings/completehome.png';
import balcony from '../../assets/offerings/balcony.png';
import bathroom from '../../assets/offerings/bathroom.png';
import bedroom from '../../assets/offerings/bedroom.png';
import dining from '../../assets/offerings/dining.png';
import living from '../../assets/offerings/living.png';
import modular from '../../assets/offerings/modular.png';

const rooms = [
    { 
        icon: '', 
        title: 'Living Room', 
        desc: 'Statement sofas, custom TV units, layered lighting and curated decor that make your living room the heart of the home.', 
        image: living
    },
    { 
        icon: '', 
        title: 'Bedroom', 
        desc: 'Serene master suites and functional kids rooms designed for rest, comfort and personal expression.', 
        image: bedroom
    },
    { 
        icon: '', 
        title: 'Modular Kitchen', 
        desc: 'Precision-engineered kitchens with smart storage, premium finishes and appliance integration.', 
        image: modular
    },
    { 
        icon: '', 
        title: 'Bathroom', 
        desc: 'Spa-inspired bathrooms with premium fixtures, elegant tiling and thoughtful storage solutions.', 
        image: bathroom
    },
    { 
        icon: '', 
        title: 'Dining Room', 
        desc: 'Elegant dining spaces with statement lighting, custom furniture and the perfect ambience for every meal.', 
        image: dining
    },
    { 
        icon: '', 
        title: 'Balcony & Foyer', 
        desc: 'First impressions and outdoor extensions - designed to welcome and delight at every turn.', 
        image: balcony
    },
];

const faqs = [
    { q: 'What does a full home interior package include?', a: 'Our full home interior package covers every room - living room, bedrooms, kitchen, bathrooms, dining room, foyer and balcony. It includes design, manufacturing, delivery and professional installation, with a 5-year service warranty.' },
    { q: 'How long does a full home interior project take?', a: 'A complete full home interior project typically takes 10-16 weeks from design finalization to handover, depending on the size of the home and the level of customization.' },
    { q: 'Can I choose my own materials and finishes?', a: 'Absolutely. We offer a wide range of materials, finishes and colours for every element of your home. Our designers will guide you through the selection process with physical samples.' },
    { q: 'What is the cost of a full home interior?', a: 'Full home interior costs vary based on size, materials and customization. A 2BHK typically starts from Rs. 8 lakhs and a 3BHK from Rs. 15 lakhs. We provide a detailed, transparent quote after the initial consultation.' },
];

const FullHome = () => {
    const [activeSection, setActiveSection] = useState('intro');
    const [expandedFaq, setExpandedFaq] = useState(null);
    const refs = useRef({});
    const reg = (id) => (el) => { if (el) refs.current[id] = el; };

    useEffect(() => {
        const obs = new IntersectionObserver(
            (entries) => entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.dataset.section); }),
            { threshold: 0.2, rootMargin: '-10% 0px -10% 0px' }
        );
        Object.values(refs.current).forEach(el => obs.observe(el));
        return () => obs.disconnect();
    }, []);

    const scrollTo = (id) => {
        const el = refs.current[id] || document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const navSections = ['intro', 'rooms', 'process', 'faq', 'cta'];
    const toc = [
        { id: 'rooms', label: 'What\'s Included', emoji: '' },
        { id: 'process', label: 'Our Process', emoji: '' },
        { id: 'faq', label: 'FAQs', emoji: '' },
    ];

    return (
        <div className="blog-page">
            <div className="blog-hero">
                <img src={home} alt="Full Home Interiors" className="blog-hero__image" />
                <div className="blog-hero__overlay">
                    <div className="blog-hero__content">

                        <h1 className="blog-hero__title">Your Entire Home, <em>Beautifully Designed</em></h1>
                        <p className="blog-hero__subtitle">End-to-end interior design for every room in your home - from the foyer to the balcony, crafted with precision and passion.</p>
                        <button onClick={() => scrollTo('rooms')} className="blog-hero__cta" style={{ border: 'none', cursor: 'pointer' }}>
                            Explore Offering <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                        </button>
                    </div>
                </div>
                <div className="blog-hero__scroll"><div className="blog-hero__scroll-line" /><span>Scroll</span></div>
            </div>

            <nav className="blog-nav-dots">
                {navSections.map(id => <button key={id} className={`blog-nav-dot${activeSection === id ? ' active' : ''}`} onClick={() => scrollTo(id)} aria-label={id} />)}
            </nav>

            <div className="blog-body">
                <div className="blog-toc">
                    <div className="blog-toc__title">Table of Contents</div>
                    <div className="blog-toc__grid">
                        {toc.map(item => <button key={item.id} className={`blog-toc__btn${activeSection === item.id ? ' active' : ''}`} onClick={() => scrollTo(item.id)}><span>{item.emoji}</span>{item.label}</button>)}
                    </div>
                </div>

                <section ref={reg('intro')} data-section="intro" style={{ marginBottom: '5rem', scrollMarginTop: '6rem' }}>
                    <div className="blog-intro">
                        <div className="blog-intro-grid">
                            <div>
                                <div className="section-label" style={{ color: 'rgba(255,255,255,0.6)' }}><span style={{ background: 'rgba(255,255,255,0.5)', display: 'block', width: '20px', height: '1.5px' }}></span>Full Home Package</div>
                                <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1.8rem,3vw,2.5rem)', fontWeight: 600, color: '#fff', marginBottom: '1.25rem', lineHeight: 1.2 }}>One Partner, Every Room</h2>
                                <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.72)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                                    Our full home interior package is the most comprehensive way to transform your home. One design team, one project manager, one seamless experience - from the first sketch to the final installation.
                                </p>
                                <div className="blog-quote" style={{ background: 'rgba(255,255,255,0.07)', borderColor: '#c9a96e' }}>
                                    <p className="blog-quote__text" style={{ color: 'rgba(255,255,255,0.85)' }}>At <strong style={{ color: '#c9a96e' }}>Kryoss Interior</strong>, we believe your entire home should tell a single, cohesive story of who you are.</p>
                                </div>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <div className="blog-intro__stat">600+</div>
                                <p className="blog-intro__stat-label">Full homes designed and delivered across India</p>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="blog-wide-image" style={{ marginBottom: '5rem' }}>
                    <img src={completehome} alt="Full Home Interior - Kryoss Interior" />
                    <div className="blog-wide-image__caption">Complete Home Interior Design • Kryoss Interior</div>
                </div>

                <section ref={reg('rooms')} data-section="rooms" id="rooms" style={{ marginBottom: '5rem', scrollMarginTop: '6rem' }}>
                    <div className="section-label"><span style={{ background: 'var(--kr-red)', display: 'block', width: '20px', height: '1.5px' }}></span>What's Included</div>
                    <h2 className="blog-section-title" style={{ marginBottom: '2.5rem' }}>Every Room, <em>Perfectly Designed</em></h2>
                    <div className="blog-img-grid">
                        {rooms.map((room, i) => (
                            <div key={i} className="blog-img-card">
                                <img src={room.image} alt={room.title} className="blog-img-card__image" />
                                <div className="blog-img-card__body">
                                    <div style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>{room.icon}</div>
                                    <h3 className="blog-img-card__title">{room.title}</h3>
                                    <p className="blog-img-card__desc">{room.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section ref={reg('process')} data-section="process" id="process" style={{ marginBottom: '5rem', scrollMarginTop: '6rem' }}>
                    <div className="blog-split">
                        <div>
                            <div className="section-label"><span style={{ background: 'var(--kr-red)', display: 'block', width: '20px', height: '1.5px' }}></span>Why Choose Full Home</div>
                            <h2 className="blog-section-title">The <em>Full Home Advantage</em></h2>
                            <p style={{ fontSize: '1.05rem', color: 'var(--kr-slate-3)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                                When one team designs your entire home, the result is a cohesive, harmonious space where every room flows naturally into the next. No mismatched styles, no coordination headaches.
                            </p>
                            <div className="blog-checklist">
                                {['Single design vision across all rooms', 'Consistent material and colour palette', 'One project manager for the entire home', 'Coordinated delivery and installation', 'Better value with bundled pricing'].map((item, i) => (
                                    <div key={i} className="blog-checklist__item">
                                        <div className="blog-checklist__icon"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg></div>
                                        <span className="blog-checklist__text">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="blog-image-wrap" style={{ height: '480px' }}>
                            <img src={completehome} alt="Full Home Design" />
                        </div>
                    </div>
                </section>

                <div className="blog-stats-strip" style={{ marginBottom: '5rem' }}>
                    {[{ number: '600+', label: 'Homes Delivered' }, { number: '45day', label: 'Delivery Guarantee' }, { number: '5yr', label: 'Service Warranty' }, { number: '98%', label: 'Client Satisfaction' }].map((stat, i) => (
                        <div key={i} className="blog-stat">
                            <div className="blog-stat__number">{stat.number}</div>
                            <div className="blog-stat__label">{stat.label}</div>
                        </div>
                    ))}
                </div>

                <section ref={reg('faq')} data-section="faq" id="faq" className="blog-faq__section" style={{ marginBottom: '5rem', scrollMarginTop: '6rem' }}>
                    <div className="section-label"><span style={{ background: 'var(--kr-red)', display: 'block', width: '20px', height: '1.5px' }}></span>FAQs</div>
                    <h2 className="blog-section-title" style={{ marginBottom: '2rem' }}>Frequently Asked <em>Questions</em></h2>
                    <div className="blog-faq__list">
                        {faqs.map((faq, i) => (
                            <div key={i} className={`blog-faq__item${expandedFaq === i ? ' open' : ''}`} onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                                <div className="blog-faq__question"><span className="blog-faq__question-text">{faq.q}</span><span className="blog-faq__toggle">+</span></div>
                                {expandedFaq === i && <div className="blog-faq__answer">{faq.a}</div>}
                            </div>
                        ))}
                    </div>
                </section>

                <div ref={reg('cta')} data-section="cta" className="blog-cta-section" style={{ marginBottom: '4rem' }}>
                    <h2 className="blog-cta-section__title">Transform Your <em style={{ fontStyle: 'italic', color: '#c9a96e' }}>Entire Home</em></h2>
                    <p className="blog-cta-section__subtitle">Book a free consultation and let our team design every room of your home to perfection.</p>
                    <Link to="/contact-us" className="blog-cta-section__btn">Get a Free Consultation <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg></Link>
                </div>
            </div>
        </div>
    );
};

export default FullHome;
