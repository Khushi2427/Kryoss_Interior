import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../blogs/BlogArticle.css';

const types = [
    { icon: '', title: 'Sliding Wardrobes', desc: 'Space-efficient sliding door wardrobes with mirrored panels, soft-close mechanisms and fully customizable interiors.', image: 'https://images.unsplash.com/photo-1616594891894-f17042593bb2?w=600&q=80' },
    { icon: '', title: 'Walk-In Wardrobes', desc: 'Luxurious walk-in dressing rooms with island units, full-length mirrors and dedicated sections for every clothing type.', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80' },
    { icon: '', title: 'Hinged Door Wardrobes', desc: 'Classic hinged door wardrobes that provide full access to the entire wardrobe at once - ideal for larger rooms.', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80' },
    { icon: '', title: 'Modular Systems', desc: 'Flexible modular wardrobe systems that can be reconfigured as your storage needs change over time.', image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&q=80' },
    { icon: '', title: 'Open Wardrobes', desc: 'Boutique-style open wardrobe systems with display rails and shelves for a curated clothing presentation.', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80' },
    { icon: '', title: 'Custom Designs', desc: 'Fully bespoke wardrobe designs tailored to your exact space, storage needs and aesthetic preferences.', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80' },
];

const faqs = [
    { q: 'What is the standard wardrobe depth?', a: 'Standard wardrobe depth is 60cm (24 inches) for hanging clothes. Sliding door wardrobes typically need 65-70cm depth to accommodate the door mechanism. Shelving-only sections can be shallower at 35-45cm.' },
    { q: 'How long does a custom wardrobe take to install?', a: 'A standard wardrobe installation takes 2-5 days. A full walk-in wardrobe may take 5-10 days. The manufacturing process takes 3-4 weeks from design finalization.' },
    { q: 'What materials do you use for wardrobes?', a: 'We use E1 grade plywood or MDF for the carcass, with laminate, acrylic or veneer finishes for the doors. Hardware is sourced from premium brands like Hettich or Blum for smooth, long-lasting operation.' },
    { q: 'Can you add lighting inside the wardrobe?', a: 'Yes. We offer LED strip lighting inside wardrobes, motion-activated lights and illuminated display sections. Interior lighting makes a significant difference to the usability and luxury feel of a wardrobe.' },
];

const Wardrobes = () => {
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

    const navSections = ['intro', 'types', 'details', 'faq', 'cta'];
    const toc = [
        { id: 'types', label: 'Wardrobe Types', emoji: '' },
        { id: 'details', label: 'Features', emoji: '' },
        { id: 'faq', label: 'FAQs', emoji: '' },
    ];

    return (
        <div className="blog-page">
            <div className="blog-hero">
                <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1800&q=80" alt="Wardrobes" className="blog-hero__image" />
                <div className="blog-hero__overlay">
                    <div className="blog-hero__content">

                        <h1 className="blog-hero__title">Your Personal <em>Style Studio</em></h1>
                        <p className="blog-hero__subtitle">Custom wardrobes designed to organize your world beautifully - from compact sliding doors to luxurious walk-in dressing rooms.</p>
                        <button onClick={() => scrollTo('types')} className="blog-hero__cta" style={{ border: 'none', cursor: 'pointer' }}>
                            Explore Types <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
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
                                <div className="section-label" style={{ color: 'rgba(255,255,255,0.6)' }}><span style={{ background: 'rgba(255,255,255,0.5)', display: 'block', width: '20px', height: '1.5px' }}></span>Wardrobe Solutions</div>
                                <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1.8rem,3vw,2.5rem)', fontWeight: 600, color: '#fff', marginBottom: '1.25rem', lineHeight: 1.2 }}>Where Style Meets Organisation</h2>
                                <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.72)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                                    A custom wardrobe is one of the most impactful investments you can make in your home. It transforms a cluttered bedroom into a serene, organized sanctuary.
                                </p>
                                <div className="blog-quote" style={{ background: 'rgba(255,255,255,0.07)', borderColor: '#c9a96e' }}>
                                    <p className="blog-quote__text" style={{ color: 'rgba(255,255,255,0.85)' }}>At <strong style={{ color: '#c9a96e' }}>Kryoss Interior</strong>, we design wardrobes that feel like a luxury boutique - tailored to your exact needs.</p>
                                </div>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <div className="blog-intro__stat">800+</div>
                                <p className="blog-intro__stat-label">Custom wardrobes designed and installed across India</p>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="blog-wide-image" style={{ marginBottom: '5rem' }}>
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1600&q=80" alt="Custom Wardrobe - Kryoss Interior" />
                    <div className="blog-wide-image__caption">Walk-In Wardrobe Design • Kryoss Interior</div>
                </div>

                <section ref={reg('types')} data-section="types" id="types" style={{ marginBottom: '5rem', scrollMarginTop: '6rem' }}>
                    <div className="section-label"><span style={{ background: 'var(--kr-red)', display: 'block', width: '20px', height: '1.5px' }}></span>Wardrobe Types</div>
                    <h2 className="blog-section-title" style={{ marginBottom: '2.5rem' }}>Find Your Perfect <em>Wardrobe</em></h2>
                    <div className="blog-img-grid">
                        {types.map((type, i) => (
                            <div key={i} className="blog-img-card">
                                <img src={type.image} alt={type.title} className="blog-img-card__image" />
                                <div className="blog-img-card__body">
                                    <div style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>{type.icon}</div>
                                    <h3 className="blog-img-card__title">{type.title}</h3>
                                    <p className="blog-img-card__desc">{type.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section ref={reg('details')} data-section="details" id="details" style={{ marginBottom: '5rem', scrollMarginTop: '6rem' }}>
                    <div className="blog-split">
                        <div>
                            <div className="section-label"><span style={{ background: 'var(--kr-red)', display: 'block', width: '20px', height: '1.5px' }}></span>Interior Fittings</div>
                            <h2 className="blog-section-title">Smart <em>Interior Fittings</em></h2>
                            <p style={{ fontSize: '1.05rem', color: 'var(--kr-slate-3)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                                The interior of your wardrobe is just as important as the exterior. We offer a wide range of smart fittings that make organizing your wardrobe effortless.
                            </p>
                            <div className="blog-checklist">
                                {['Dedicated hanging sections for different lengths', 'Pull-out shoe racks and drawers', 'Accessory trays for jewellery and watches', 'Trouser and tie racks', 'LED interior lighting', 'Soft-close drawer mechanisms'].map((item, i) => (
                                    <div key={i} className="blog-checklist__item">
                                        <div className="blog-checklist__icon"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg></div>
                                        <span className="blog-checklist__text">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="blog-image-wrap" style={{ height: '480px' }}>
                            <img src="https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=900&q=80" alt="Wardrobe Interior" />
                        </div>
                    </div>
                </section>

                <div className="blog-stats-strip" style={{ marginBottom: '5rem' }}>
                    {[{ number: '800+', label: 'Wardrobes Installed' }, { number: '6+', label: 'Wardrobe Types' }, { number: '5yr', label: 'Service Warranty' }, { number: '2-3wk', label: 'Avg. Completion' }].map((stat, i) => (
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
                    <h2 className="blog-cta-section__title">Design Your Dream <em style={{ fontStyle: 'italic', color: '#c9a96e' }}>Wardrobe</em></h2>
                    <p className="blog-cta-section__subtitle">Book a free consultation and let our experts create a custom wardrobe that organizes your world beautifully.</p>
                    <Link to="/calculator/wardrobe" className="blog-cta-section__btn">Calculate Wardrobe Cost <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg></Link>
                </div>
            </div>
        </div>
    );
};

export default Wardrobes;
