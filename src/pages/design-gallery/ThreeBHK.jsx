import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../blogs/BlogArticle.css';
import threeBhk from '../../assets/design-gallery/3-bhk.jpg';
import extra from '../../assets/design-gallery/three/extra.png';
import Private from '../../assets/design-gallery/three/private.png';
import twoBhk from '../../assets/design-gallery/2-bhk.jpg';
import balcony from '../../assets/design-gallery/two/balcony.png';
import cohesive from '../../assets/design-gallery/two/cohesive.png';
import living from '../../assets/design-gallery/two/living.png';
import master from '../../assets/design-gallery/two/master.png';
import modular from '../../assets/design-gallery/two/modular.png';
import study from '../../assets/design-gallery/two/study.png';

const ideas = [
    { 
        icon: '', 
        title: 'Grand Living Room', 
        desc: 'A 3BHK living room can accommodate a full sectional sofa, a formal dining area and a dedicated entertainment zone.', 
        image: living
    },
    { 
        icon: '', 
        title: "Chef's Kitchen", 
        desc: 'A spacious modular kitchen with an island, premium appliances and a separate utility area for the serious home cook.', 
        image: modular
    },
    { 
        icon: '', 
        title: 'Three Distinct Bedrooms', 
        desc: 'Design each bedroom with a unique character - master suite, kids room and guest room - each with its own personality.', 
        image: master
    },
    { 
        icon: '', 
        title: 'Home Library', 
        desc: 'A dedicated reading nook or home library with floor-to-ceiling bookshelves adds intellectual character to the home.', 
        image: study
    },
    { 
        icon: '', 
        title: 'Entertainment Room', 
        desc: 'Convert the third bedroom into a dedicated home theatre, gaming room or family entertainment space.', 
        image: cohesive
    },
    { 
        icon: '', 
        title: 'Terrace Garden', 
        desc: 'If you have a terrace or large balcony, design it as an outdoor living room with plants, seating and ambient lighting.', 
        image: balcony
    },
];

const faqs = [
    { q: 'What is the ideal interior design budget for a 3BHK?', a: 'A complete 3BHK interior design typically costs between Rs. 15-25 lakhs for a standard finish and Rs. 25-50 lakhs for a premium or luxury finish, depending on size, materials and customization.' },
    { q: 'How do I create a cohesive design across a 3BHK?', a: 'Use a consistent colour palette and material language throughout the apartment. Vary the mood in each room through accent colours, textures and lighting while maintaining an overall design thread.' },
    { q: 'Should I hire an interior designer for a 3BHK?', a: 'Absolutely. A 3BHK is a significant investment and a professional interior designer will help you maximize the space, avoid costly mistakes and create a cohesive, beautiful home that adds long-term value.' },
    { q: 'How long does a complete 3BHK interior project take?', a: 'A complete 3BHK interior project typically takes 12-16 weeks from design finalization to handover, including manufacturing, installation and finishing work.' },
];

const ThreeBHK = () => {
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
        { id: 'styles', label: 'Room Designs', emoji: '' },
        { id: 'faq', label: 'FAQs', emoji: '' },
    ];

    return (
        <div className="blog-page">
            <div className="blog-hero">
                <img src={threeBhk} alt="3BHK Interior Design" className="blog-hero__image" />
                <div className="blog-hero__overlay">
                    <div className="blog-hero__content">
                        <h1 className="blog-hero__title">Luxury Living, <em>Fully Realised</em></h1>
                        <p className="blog-hero__subtitle">A 3BHK is your canvas for a truly complete, luxurious home - with space for every aspect of modern family life.</p>
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
                                <div className="section-label" style={{ color: 'rgba(255,255,255,0.6)' }}><span style={{ background: 'rgba(255,255,255,0.5)', display: 'block', width: '20px', height: '1.5px' }}></span>3BHK Design</div>
                                <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1.8rem,3vw,2.5rem)', fontWeight: 600, color: '#fff', marginBottom: '1.25rem', lineHeight: 1.2 }}>The Complete Family Home</h2>
                                <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.72)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                                    A 3BHK apartment offers the space to create a truly complete home - with dedicated spaces for every family member and every activity. The design possibilities are limitless.
                                </p>
                                <div className="blog-quote" style={{ background: 'rgba(255,255,255,0.07)', borderColor: '#c9a96e' }}>
                                    <p className="blog-quote__text" style={{ color: 'rgba(255,255,255,0.85)' }}>At <strong style={{ color: '#c9a96e' }}>Kryoss Interior</strong>, we design 3BHK homes that are as impressive as they are liveable.</p>
                                </div>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <div className="blog-intro__stat">400+</div>
                                <p className="blog-intro__stat-label">3BHK apartments designed across India</p>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="blog-wide-image" style={{ marginBottom: '5rem' }}>
                    <img src={living} alt="3BHK Interior - Kryoss Interior" />
                    <div className="blog-wide-image__caption">Luxury 3BHK Interior Design â€¢ Kryoss Interior</div>
                </div>

                <section ref={reg('ideas')} data-section="ideas" id="ideas" style={{ marginBottom: '5rem', scrollMarginTop: '6rem' }}>
                    <div className="section-label"><span style={{ background: 'var(--kr-red)', display: 'block', width: '20px', height: '1.5px' }}></span>Design Ideas</div>
                    <h2 className="blog-section-title" style={{ marginBottom: '2.5rem' }}>3BHK <em>Design Ideas</em></h2>
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
                            <div className="section-label"><span style={{ background: 'var(--kr-red)', display: 'block', width: '20px', height: '1.5px' }}></span>Public Spaces</div>
                            <h2 className="blog-section-title">Grand <em>Living & Entertaining</em></h2>
                            <p style={{ fontSize: '1.05rem', color: 'var(--kr-slate-3)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                                The living, dining and kitchen areas of a 3BHK can be designed as a grand, open-plan entertaining space that impresses every guest.
                            </p>
                            <div className="blog-checklist">
                                {['Large sectional sofa with chaise lounge', 'Formal dining table for 8-10 guests', 'Open kitchen with island and breakfast bar', 'Statement chandelier over the dining table', 'Dedicated bar or drinks cabinet'].map((item, i) => (
                                    <div key={i} className="blog-checklist__item">
                                        <div className="blog-checklist__icon"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg></div>
                                        <span className="blog-checklist__text">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="blog-image-wrap" style={{ height: '480px' }}>
                            <img src={extra}alt="3BHK Living Area" />
                        </div>
                    </div>

                    <div className="blog-split blog-split--reverse" style={{ marginTop: '4rem' }}>
                        <div>
                            <div className="section-label"><span style={{ background: 'var(--kr-red)', display: 'block', width: '20px', height: '1.5px' }}></span>Private Spaces</div>
                            <h2 className="blog-section-title">Luxurious <em>Private Spaces</em></h2>
                            <p style={{ fontSize: '1.05rem', color: 'var(--kr-slate-3)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                                Three bedrooms mean three opportunities to create unique, beautiful private spaces - each tailored to its occupant's needs and personality.
                            </p>
                            <div className="blog-checklist">
                                {['Master suite with walk-in wardrobe and ensuite', 'Kids bedroom with study and play zones', 'Guest bedroom with murphy bed and office', 'Each room with its own colour identity', 'Premium finishes throughout all bedrooms'].map((item, i) => (
                                    <div key={i} className="blog-checklist__item">
                                        <div className="blog-checklist__icon"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg></div>
                                        <span className="blog-checklist__text">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="blog-image-wrap" style={{ height: '480px' }}>
                            <img src={Private} alt="3BHK Master Bedroom" />
                        </div>
                    </div>
                </section>

                <div className="blog-stats-strip" style={{ marginBottom: '5rem' }}>
                    {[{ number: '400+', label: '3BHKs Designed' }, { number: 'Rs. 15L+', label: 'Starting Budget' }, { number: '5yr', label: 'Service Warranty' }, { number: '12-16wk', label: 'Avg. Completion' }].map((stat, i) => (
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
                    <h2 className="blog-cta-section__title">Design Your Luxury <em style={{ fontStyle: 'italic', color: '#c9a96e' }}>3BHK Home</em></h2>
                    <p className="blog-cta-section__subtitle">Let our experts create a stunning 3BHK interior that your family will be proud to call home.</p>
                    <Link to="/contact-us" className="blog-cta-section__btn">Get a Free Consultation <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg></Link>
                </div>
            </div>
        </div>
    );
};

export default ThreeBHK;
