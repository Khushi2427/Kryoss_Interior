import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../blogs/BlogArticle.css';
import twoBhk from '../../assets/design-gallery/2-bhk.jpg';

const ideas = [
    { icon: '', title: 'Defined Living Zones', desc: 'A 2BHK allows for a proper separation of living, dining and sleeping areas - each with its own character and function.', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80' },
    { icon: '', title: 'Master Suite', desc: 'Dedicate the larger bedroom to a luxurious master suite with an attached bathroom and walk-in wardrobe.', image: 'https://images.unsplash.com/photo-1616594891894-f17042593bb2?w=600&q=80' },
    { icon: '', title: 'Modular Kitchen', desc: 'A well-designed modular kitchen with an island or breakfast counter adds functionality and style to the heart of the home.', image: 'https://images.unsplash.com/photo-1556910103-1c02745a30bf?w=600&q=80' },
    { icon: '', title: 'Balcony Integration', desc: 'Extend your living space by designing the balcony as an outdoor lounge or garden, connected visually to the interior.', image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80' },
    { icon: '', title: 'Study Nook', desc: 'Convert the second bedroom into a dual-purpose guest room and home office with a murphy bed and built-in desk.', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80' },
    { icon: '', title: 'Cohesive Palette', desc: 'A consistent colour palette across all rooms creates a sense of flow and makes the apartment feel larger and more unified.', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80' },
];

const faqs = [
    { q: 'What is the ideal interior design budget for a 2BHK?', a: 'A complete 2BHK interior design typically costs between Rs. 8-15 lakhs for a standard finish and Rs. 15-25 lakhs for a premium finish, depending on size, materials and customization level.' },
    { q: 'How do I make a 2BHK feel more spacious?', a: 'Use an open-plan layout for the living and dining areas, choose furniture proportional to the room size, use mirrors strategically and maintain a consistent, light colour palette throughout.' },
    { q: 'Should I use the second bedroom as a guest room or home office?', a: 'A dual-purpose room with a murphy bed (wall bed) and a built-in desk is the most flexible solution. It serves as a comfortable guest room when needed and a productive home office otherwise.' },
    { q: 'How long does a complete 2BHK interior project take?', a: 'A complete 2BHK interior project typically takes 8-12 weeks from design finalization to handover, including manufacturing, installation and finishing work.' },
];

const TwoBHK = () => {
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

    const navSections = ['intro', 'ideas', 'styles', 'faq', 'cta'];
    const toc = [
        { id: 'ideas', label: 'Design Ideas', emoji: '' },
        { id: 'styles', label: 'Room Solutions', emoji: '' },
        { id: 'faq', label: 'FAQs', emoji: '' },
    ];

    return (
        <div className="blog-page">
            <div className="blog-hero">
                <img src={twoBhk} alt="2BHK Interior Design" className="blog-hero__image" />
                <div className="blog-hero__overlay">
                    <div className="blog-hero__content">
                        <h1 className="blog-hero__title">The Perfect <em>Family Home</em></h1>
                        <p className="blog-hero__subtitle">Design a 2BHK apartment that balances style, comfort and functionality for modern family living.</p>
                        <button onClick={() => scrollTo('ideas')} className="blog-hero__cta" style={{ border: 'none', cursor: 'pointer' }}>
                            Explore Ideas <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
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
                                <div className="section-label" style={{ color: 'rgba(255,255,255,0.6)' }}><span style={{ background: 'rgba(255,255,255,0.5)', display: 'block', width: '20px', height: '1.5px' }}></span>2BHK Design</div>
                                <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1.8rem,3vw,2.5rem)', fontWeight: 600, color: '#fff', marginBottom: '1.25rem', lineHeight: 1.2 }}>Space to Live, Space to Grow</h2>
                                <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.72)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                                    A 2BHK apartment offers the perfect canvas for a complete, beautiful home. With thoughtful design, every room can be both functional and stunning.
                                </p>
                                <div className="blog-quote" style={{ background: 'rgba(255,255,255,0.07)', borderColor: '#c9a96e' }}>
                                    <p className="blog-quote__text" style={{ color: 'rgba(255,255,255,0.85)' }}>At <strong style={{ color: '#c9a96e' }}>Kryoss Interior</strong>, we design 2BHK apartments that feel like premium homes - not just flats.</p>
                                </div>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <div className="blog-intro__stat">500+</div>
                                <p className="blog-intro__stat-label">2BHK apartments designed across India</p>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="blog-wide-image" style={{ marginBottom: '5rem' }}>
                    <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1600&q=80" alt="2BHK Interior - Kryoss Interior" />
                    <div className="blog-wide-image__caption">Modern 2BHK Interior Design â€¢ Kryoss Interior</div>
                </div>

                <section ref={reg('ideas')} data-section="ideas" id="ideas" style={{ marginBottom: '5rem', scrollMarginTop: '6rem' }}>
                    <div className="section-label"><span style={{ background: 'var(--kr-red)', display: 'block', width: '20px', height: '1.5px' }}></span>Design Ideas</div>
                    <h2 className="blog-section-title" style={{ marginBottom: '2.5rem' }}>2BHK <em>Design Ideas</em></h2>
                    <div className="blog-img-grid">
                        {ideas.map((idea, i) => (
                            <div key={i} className="blog-img-card">
                                <img src={idea.image} alt={idea.title} className="blog-img-card__image" />
                                <div className="blog-img-card__body">
                                    <div style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>{idea.icon}</div>
                                    <h3 className="blog-img-card__title">{idea.title}</h3>
                                    <p className="blog-img-card__desc">{idea.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section ref={reg('styles')} data-section="styles" id="styles" style={{ marginBottom: '5rem', scrollMarginTop: '6rem' }}>
                    <div className="blog-split">
                        <div>
                            <div className="section-label"><span style={{ background: 'var(--kr-red)', display: 'block', width: '20px', height: '1.5px' }}></span>Living & Dining</div>
                            <h2 className="blog-section-title">Elegant <em>Living & Dining</em></h2>
                            <p style={{ fontSize: '1.05rem', color: 'var(--kr-slate-3)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                                The living and dining areas are the heart of a 2BHK - where family gathers and guests are entertained. Design them to be both beautiful and practical.
                            </p>
                            <div className="blog-checklist">
                                {['Sectional sofa for comfortable family seating', 'Dining table for 4-6 with statement lighting', 'Custom TV unit with integrated storage', 'Open kitchen with breakfast counter', 'Balcony connected to the living area'].map((item, i) => (
                                    <div key={i} className="blog-checklist__item">
                                        <div className="blog-checklist__icon"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg></div>
                                        <span className="blog-checklist__text">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="blog-image-wrap" style={{ height: '480px' }}>
                            <img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=900&q=80" alt="2BHK Living Dining" />
                        </div>
                    </div>

                    <div className="blog-split blog-split--reverse" style={{ marginTop: '4rem' }}>
                        <div>
                            <div className="section-label"><span style={{ background: 'var(--kr-red)', display: 'block', width: '20px', height: '1.5px' }}></span>Bedrooms</div>
                            <h2 className="blog-section-title">Beautiful <em>Bedroom Design</em></h2>
                            <p style={{ fontSize: '1.05rem', color: 'var(--kr-slate-3)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                                A 2BHK gives you the luxury of a dedicated master bedroom and a versatile second bedroom - both designed to be comfortable, stylish and storage-efficient.
                            </p>
                            <div className="blog-checklist">
                                {['Master bedroom with attached bathroom', 'Walk-in wardrobe or sliding wardrobe', 'Second bedroom as guest room or office', 'Coordinated colour schemes in each room', 'Ample storage throughout both bedrooms'].map((item, i) => (
                                    <div key={i} className="blog-checklist__item">
                                        <div className="blog-checklist__icon"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg></div>
                                        <span className="blog-checklist__text">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="blog-image-wrap" style={{ height: '480px' }}>
                            <img src="https://images.unsplash.com/photo-1616594891894-f17042593bb2?w=900&q=80" alt="2BHK Bedroom" />
                        </div>
                    </div>
                </section>

                <div className="blog-stats-strip" style={{ marginBottom: '5rem' }}>
                    {[{ number: '500+', label: '2BHKs Designed' }, { number: 'Rs. 8L+', label: 'Starting Budget' }, { number: '5yr', label: 'Service Warranty' }, { number: '8-12wk', label: 'Avg. Completion' }].map((stat, i) => (
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
                    <h2 className="blog-cta-section__title">Design Your Dream <em style={{ fontStyle: 'italic', color: '#c9a96e' }}>2BHK Home</em></h2>
                    <p className="blog-cta-section__subtitle">Let our experts create a beautiful, functional 2BHK interior that your family will love for years to come.</p>
                    <Link to="/contact-us" className="blog-cta-section__btn">Get a Free Consultation <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg></Link>
                </div>
            </div>
        </div>
    );
};

export default TwoBHK;
