import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../blogs/BlogArticle.css';
import customiseKitchen from '../../assets/design-gallery/customise-kitchen.jpg';
import islandIntegration from '../../assets/design-gallery/customise/island-integration.jpg';
import lacqueredGlass from '../../assets/design-gallery/customise/lacquered-glass.jpg';
import luxuryAcrylics from '../../assets/design-gallery/customise/luxury-acrylics.jpg';
import matteFinishes from '../../assets/design-gallery/customise/matte-finishes.jpg';
import naturalVeneers from '../../assets/design-gallery/customise/natural-veneers.jpg';
import premiumLaminates from '../../assets/design-gallery/customise/premium-laminates.jpg';
import uShapedKitchens from '../../assets/design-gallery/section/u-shaped-kitchens.jpg';
import straightKitchens from '../../assets/design-gallery/section/straight-kitchens.jpg';
const ideas = [
    { 
        icon: '', 
        title: 'Luxury Acrylic Finishes', 
        desc: 'High-gloss, ultra-modern surfaces that create a sleek and premium kitchen aesthetic.', 
        image: luxuryAcrylics
    },
    { 
        icon: '', 
        title: 'Premium Laminates', 
        desc: 'Durable, cost-effective and available in a wide range of textures and finishes.', 
        image: premiumLaminates
    },
    { 
        icon: '', 
        title: 'Lacquered Glass', 
        desc: 'Glossy, easy-to-clean glass finishes perfect for contemporary kitchen backsplashes and cabinets.', 
        image: lacqueredGlass
    },
    { 
        icon: '', 
        title: 'Matte Finishes', 
        desc: 'Soft-touch matte finishes for a refined, fingerprint-resistant kitchen look.', 
        image: matteFinishes
    },
    { 
        icon: '', 
        title: 'Natural Veneers', 
        desc: 'Real wood veneer surfaces that bring warmth and elegance to your custom kitchen.', 
        image: naturalVeneers
    },
    { 
        icon: '', 
        title: 'Island Integration', 
        desc: 'Seamlessly integrate custom islands with sinks, hobs, seating and smart storage solutions.', 
        image: islandIntegration
    },
];

const faqs = [
    { q: 'What is the difference between a modular and a customised kitchen?', a: 'A modular kitchen uses standard-sized pre-made cabinet modules that are assembled on-site. A customised kitchen is built to your exact specifications - every dimension, material and feature is tailored to your space and requirements.' },
    { q: 'How long does a custom kitchen take to design and install?', a: 'A fully customised kitchen typically takes 4-8 weeks from design finalization to installation. This includes manufacturing, quality checks, delivery and on-site fitting.' },
    { q: 'Can I customise the interior fittings of my kitchen cabinets?', a: 'Absolutely. We offer a wide range of interior fittings including pull-out baskets, drawer organizers, spice racks, cutlery trays, bottle pull-outs and more - all customized to your specific needs.' },
    { q: 'What is the warranty on a customised kitchen?', a: 'Kryoss Interior provides a 5-year service warranty on all customised kitchens, covering manufacturing defects, hardware and structural integrity. Countertops carry a separate manufacturer warranty.' },
];

const CustomiseKitchen = () => {
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
        { id: 'ideas', label: 'Customisation Options', emoji: '' },
        { id: 'styles', label: 'Design Process', emoji: '' },
        { id: 'faq', label: 'FAQs', emoji: '' },
    ];

    return (
        <div className="blog-page">
            <div className="blog-hero">
                <img src={customiseKitchen} alt="Customise Kitchen" className="blog-hero__image" />
                <div className="blog-hero__overlay">
                    <div className="blog-hero__content">

                        <h1 className="blog-hero__title">Your Kitchen, <em>Your Vision</em></h1>
                        <p className="blog-hero__subtitle">A fully bespoke kitchen designed around your exact space, cooking habits and aesthetic preferences - nothing off the shelf.</p>
                        <button onClick={() => scrollTo('ideas')} className="blog-hero__cta" style={{ border: 'none', cursor: 'pointer' }}>
                            Explore Options <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
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
                                <div className="section-label" style={{ color: 'rgba(255,255,255,0.6)' }}><span style={{ background: 'rgba(255,255,255,0.5)', display: 'block', width: '20px', height: '1.5px' }}></span>Custom Kitchen</div>
                                <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1.8rem,3vw,2.5rem)', fontWeight: 600, color: '#fff', marginBottom: '1.25rem', lineHeight: 1.2 }}>Designed for You, Built for Life</h2>
                                <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.72)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                                    A customised kitchen is the ultimate expression of your personal style. Every dimension, material, colour and fitting is chosen by you - and crafted to perfection by our team.
                                </p>
                                <div className="blog-quote" style={{ background: 'rgba(255,255,255,0.07)', borderColor: '#c9a96e' }}>
                                    <p className="blog-quote__text" style={{ color: 'rgba(255,255,255,0.85)' }}>At <strong style={{ color: '#c9a96e' }}>Kryoss Interior</strong>, we believe your kitchen should be as unique as you are - crafted to perfection.</p>
                                </div>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <div className="blog-intro__stat">100%</div>
                                <p className="blog-intro__stat-label">Bespoke - every kitchen is designed from scratch for your space</p>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="blog-wide-image" style={{ marginBottom: '5rem' }}>
                    <img src={uShapedKitchens} alt="Custom Kitchen - Kryoss Interior" />
                    <div className="blog-wide-image__caption">Bespoke Custom Kitchen Design • Kryoss Interior</div>
                </div>

                <section ref={reg('ideas')} data-section="ideas" id="ideas" style={{ marginBottom: '5rem', scrollMarginTop: '6rem' }}>
                    <div className="section-label"><span style={{ background: 'var(--kr-red)', display: 'block', width: '20px', height: '1.5px' }}></span>Customisation Options</div>
                    <h2 className="blog-section-title" style={{ marginBottom: '2.5rem' }}>What You Can <em>Customise</em></h2>
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
                            <div className="section-label"><span style={{ background: 'var(--kr-red)', display: 'block', width: '20px', height: '1.5px' }}></span>Our Design Process</div>
                            <h2 className="blog-section-title">From <em>Concept to Creation</em></h2>
                            <p style={{ fontSize: '1.05rem', color: 'var(--kr-slate-3)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                                Our design process is collaborative and transparent. We work closely with you at every stage - from initial consultation to final installation - to ensure your kitchen is exactly as you envisioned.
                            </p>
                            <div className="blog-checklist">
                                {['Free initial consultation and site visit', '3D design visualization before production', 'Material and finish selection with samples', 'Factory quality checks before delivery', 'Professional installation and handover'].map((item, i) => (
                                    <div key={i} className="blog-checklist__item">
                                        <div className="blog-checklist__icon"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg></div>
                                        <span className="blog-checklist__text">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="blog-image-wrap" style={{ height: '480px' }}>
                            <img src={straightKitchens} alt="Kitchen Design Process" />
                        </div>
                    </div>

                    <div className="blog-split blog-split--reverse" style={{ marginTop: '4rem' }}>
                        <div>
                            <div className="section-label"><span style={{ background: 'var(--kr-red)', display: 'block', width: '20px', height: '1.5px' }}></span>Premium Materials</div>
                            <h2 className="blog-section-title">Only the <em>Finest Materials</em></h2>
                            <p style={{ fontSize: '1.05rem', color: 'var(--kr-slate-3)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                                We source only the highest quality materials for our custom kitchens - from E1 grade plywood carcasses to imported hardware and premium countertop materials.
                            </p>
                            <div className="blog-checklist">
                                {['E1 grade plywood or MDF carcasses', 'Blum or Hettich soft-close hardware', 'Quartz, granite or marble countertops', 'Premium laminate or acrylic door finishes', 'Stainless steel or composite sinks'].map((item, i) => (
                                    <div key={i} className="blog-checklist__item">
                                        <div className="blog-checklist__icon"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg></div>
                                        <span className="blog-checklist__text">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="blog-image-wrap" style={{ height: '480px' }}>
                            <img src={luxuryAcrylics} alt="Premium Kitchen Materials" />
                        </div>
                    </div>
                </section>

                <div className="blog-stats-strip" style={{ marginBottom: '5rem' }}>
                    {[{ number: '100%', label: 'Bespoke Design' }, { number: '700+', label: 'Kitchens Delivered' }, { number: '5yr', label: 'Service Warranty' }, { number: '4-8wk', label: 'Avg. Completion' }].map((stat, i) => (
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
                    <h2 className="blog-cta-section__title">Start Designing Your <em style={{ fontStyle: 'italic', color: '#c9a96e' }}>Custom Kitchen</em></h2>
                    <p className="blog-cta-section__subtitle">Book a free consultation and let our designers bring your dream kitchen to life - exactly as you imagined it.</p>
                    <Link to="/contact-us" className="blog-cta-section__btn">Book a Free Consultation <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg></Link>
                </div>
            </div>
        </div>
    );
};

export default CustomiseKitchen;