import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../blogs/BlogArticle.css';

const layouts = [
    { icon: '', title: 'L-Shape', desc: 'Perfect for medium-sized kitchens - maximizes corner space and creates an efficient work triangle.', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80' },
    { icon: '', title: 'U-Shape', desc: 'Ideal for large kitchens - provides maximum storage and counter space on three walls.', image: 'https://images.unsplash.com/photo-1556910103-1c02745a30bf?w=600&q=80' },
    { icon: '', title: 'Island Kitchen', desc: 'A kitchen island adds extra prep space, seating and storage - the social hub of the modern home.', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80' },
    { icon: '', title: 'Parallel Layout', desc: 'Two parallel counters - efficient for narrow kitchens and professional-style cooking.', image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600&q=80' },
    { icon: '', title: 'Straight Kitchen', desc: 'A single wall of cabinets - ideal for studio apartments and open-plan living spaces.', image: 'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=600&q=80' },
    { icon: '', title: 'Custom Design', desc: 'Fully bespoke kitchen layouts designed around your unique space and cooking habits.', image: 'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=600&q=80' },
];

const faqs = [
    { q: 'What is included in a modular kitchen package?', a: 'Our modular kitchen package includes base cabinets, wall cabinets, a loft unit, countertop, sink, faucet and all interior fittings. Appliances can be included as an add-on. The package includes design, manufacturing, delivery and professional installation.' },
    { q: 'How long does a modular kitchen installation take?', a: 'A standard modular kitchen installation takes 7-14 days. Custom designs with special finishes or imported hardware may take 3-4 weeks from design finalization.' },
    { q: 'What warranty do you provide on modular kitchens?', a: 'We provide a 5-year service warranty on all modular kitchens, covering manufacturing defects, hardware and structural integrity. Countertops carry a separate manufacturer warranty of 1-10 years depending on the material.' },
    { q: 'Can I see a 3D design before the kitchen is made?', a: 'Yes, absolutely. We create detailed 3D visualizations of your kitchen before production begins, so you can see exactly how it will look and make any changes before manufacturing starts.' },
];

const ModularKitchens = () => {
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

    const navSections = ['intro', 'layouts', 'details', 'faq', 'cta'];
    const toc = [
        { id: 'layouts', label: 'Kitchen Layouts', emoji: '' },
        { id: 'details', label: 'Features', emoji: '' },
        { id: 'faq', label: 'FAQs', emoji: '' },
    ];

    return (
        <div className="blog-page">
            <div className="blog-hero">
                <img src="https://images.unsplash.com/photo-1556910103-1c02745a30bf?w=1800&q=80" alt="Modular Kitchens" className="blog-hero__image" />
                <div className="blog-hero__overlay">
                    <div className="blog-hero__content">

                        <h1 className="blog-hero__title">Kitchens Built for <em>Real Life</em></h1>
                        <p className="blog-hero__subtitle">Precision-engineered modular kitchens that combine beautiful design with intelligent storage and durable finishes - for the way you actually cook.</p>
                        <button onClick={() => scrollTo('layouts')} className="blog-hero__cta" style={{ border: 'none', cursor: 'pointer' }}>
                            Explore Layouts <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
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
                                <div className="section-label" style={{ color: 'rgba(255,255,255,0.6)' }}><span style={{ background: 'rgba(255,255,255,0.5)', display: 'block', width: '20px', height: '1.5px' }}></span>Modular Kitchens</div>
                                <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1.8rem,3vw,2.5rem)', fontWeight: 600, color: '#fff', marginBottom: '1.25rem', lineHeight: 1.2 }}>The Heart of Every Home</h2>
                                <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.72)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                                    A modular kitchen is planned with precision, making daily cooking effortless. We design kitchens that suit your real cooking habits - not just what looks good in a showroom.
                                </p>
                                <div className="blog-quote" style={{ background: 'rgba(255,255,255,0.07)', borderColor: '#c9a96e' }}>
                                    <p className="blog-quote__text" style={{ color: 'rgba(255,255,255,0.85)' }}>At <strong style={{ color: '#c9a96e' }}>Kryoss Interior</strong>, every kitchen we design is a culinary sanctuary - beautiful, functional and built to last.</p>
                                </div>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <div className="blog-intro__stat">700+</div>
                                <p className="blog-intro__stat-label">Modular kitchens designed and installed across India</p>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="blog-wide-image" style={{ marginBottom: '5rem' }}>
                    <img src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1600&q=80" alt="Modular Kitchen - Kryoss Interior" />
                    <div className="blog-wide-image__caption">Premium Modular Kitchen • Kryoss Interior</div>
                </div>

                <section ref={reg('layouts')} data-section="layouts" id="layouts" style={{ marginBottom: '5rem', scrollMarginTop: '6rem' }}>
                    <div className="section-label"><span style={{ background: 'var(--kr-red)', display: 'block', width: '20px', height: '1.5px' }}></span>Kitchen Layouts</div>
                    <h2 className="blog-section-title" style={{ marginBottom: '2.5rem' }}>Find Your Perfect <em>Kitchen Layout</em></h2>
                    <div className="blog-img-grid">
                        {layouts.map((layout, i) => (
                            <div key={i} className="blog-img-card">
                                <img src={layout.image} alt={layout.title} className="blog-img-card__image" />
                                <div className="blog-img-card__body">
                                    <div style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>{layout.icon}</div>
                                    <h3 className="blog-img-card__title">{layout.title}</h3>
                                    <p className="blog-img-card__desc">{layout.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section ref={reg('details')} data-section="details" id="details" style={{ marginBottom: '5rem', scrollMarginTop: '6rem' }}>
                    <div className="blog-split">
                        <div>
                            <div className="section-label"><span style={{ background: 'var(--kr-red)', display: 'block', width: '20px', height: '1.5px' }}></span>Smart Storage</div>
                            <h2 className="blog-section-title">Intelligent <em>Kitchen Storage</em></h2>
                            <p style={{ fontSize: '1.05rem', color: 'var(--kr-slate-3)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                                Our modular kitchens are designed with smart storage solutions that keep everything in its place and within easy reach - making cooking a pleasure, not a chore.
                            </p>
                            <div className="blog-checklist">
                                {['Pull-out drawers and baskets', 'Tall pantry units for dry goods', 'Corner carousel systems', 'Under-sink pull-out bins', 'Spice racks and cutlery organizers', 'Integrated appliance housing'].map((item, i) => (
                                    <div key={i} className="blog-checklist__item">
                                        <div className="blog-checklist__icon"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg></div>
                                        <span className="blog-checklist__text">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="blog-image-wrap" style={{ height: '480px' }}>
                            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80" alt="Kitchen Storage" />
                        </div>
                    </div>
                </section>

                <div className="blog-stats-strip" style={{ marginBottom: '5rem' }}>
                    {[{ number: '700+', label: 'Kitchens Installed' }, { number: '5+', label: 'Layout Options' }, { number: '5yr', label: 'Service Warranty' }, { number: '7-14day', label: 'Installation Time' }].map((stat, i) => (
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
                    <h2 className="blog-cta-section__title">Design Your Dream <em style={{ fontStyle: 'italic', color: '#c9a96e' }}>Modular Kitchen</em></h2>
                    <p className="blog-cta-section__subtitle">Book a free consultation and get a detailed 3D design and quote for your perfect kitchen.</p>
                    <Link to="/calculator/kitchen" className="blog-cta-section__btn">Calculate Kitchen Cost <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg></Link>
                </div>
            </div>
        </div>
    );
};

export default ModularKitchens;
