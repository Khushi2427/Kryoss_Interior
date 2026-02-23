import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../blogs/BlogArticle.css';
import modularKitchen from '../../assets/design-gallery/moduler-kitchen.jpg';
import breakfast from '../../assets/design-gallery/section/breakfast-counters.jpg';
import islandKitchens from '../../assets/design-gallery/section/island-kitchens.jpg';
import lShapedKitchens from '../../assets/design-gallery/section/l-shaped-Kitchens.jpg';
import parallelKitchens from '../../assets/design-gallery/section/parallel-kitchens.jpg';
import straightKitchens from '../../assets/design-gallery/section/straight-kitchens.jpg';
import uShapedKitchens from '../../assets/design-gallery/section/u-shaped-kitchens.jpg';
import main from '../../assets/design-gallery/main.jpg';

const ideas = [
    { 
        icon: '', 
        title: 'L-Shape Layout', 
        desc: 'Perfect for medium-sized kitchens, the L-shape maximizes corner space and creates an efficient work triangle.', 
        image: lShapedKitchens 
    },
    { 
        icon: '', 
        title: 'U-Shape Layout', 
        desc: 'Ideal for large kitchens, the U-shape provides maximum storage and counter space on three walls.', 
        image: uShapedKitchens 
    },
    { 
        icon: '', 
        title: 'Island Kitchen', 
        desc: 'A kitchen island adds extra prep space, seating and storage while becoming the social hub of the home.', 
        image: islandKitchens 
    },
    { 
        icon: '', 
        title: 'Parallel Layout', 
        desc: 'Two parallel counters facing each other - efficient for narrow kitchens and professional-style cooking.', 
        image: parallelKitchens 
    },
    { 
        icon: '', 
        title: 'Straight Kitchen', 
        desc: 'A single-wall layout ideal for compact homes and studio apartments.', 
        image: straightKitchens 
    },
    { 
        icon: '', 
        title: 'Breakfast Counter', 
        desc: 'Adds casual dining space while enhancing functionality and aesthetics.', 
        image: breakfast 
    },
];

const faqs = [
    { q: 'What is the best modular kitchen layout for a small kitchen?', a: 'For small kitchens, a straight or L-shaped layout works best. Use wall-mounted cabinets to maximize vertical storage, and choose light colours to make the space feel larger.' },
    { q: 'How long does a modular kitchen installation take?', a: 'A standard modular kitchen installation takes 7-14 days. This includes delivery, assembly and fitting. Custom designs with special finishes may take 3-4 weeks.' },
    { q: 'What is the cost of a modular kitchen in India?', a: 'Modular kitchens range from Rs. 1.5 lakhs for basic designs to Rs. 5+ lakhs for premium finishes with imported hardware. The cost depends on size, materials and appliances.' },
    { q: 'What countertop material is best for Indian kitchens?', a: 'Quartz is the most popular choice for Indian kitchens due to its heat resistance, durability and low maintenance. Granite is also a great option for its natural beauty and strength.' },
];

const ModularKitchen = () => {
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
        { id: 'ideas', label: 'Kitchen Layouts', emoji: '' },
        { id: 'styles', label: 'Finishes & Storage', emoji: '' },
        { id: 'faq', label: 'FAQs', emoji: '' },
    ];

    return (
        <div className="blog-page">
            <div className="blog-hero">
                <img src={modularKitchen} alt="Modular Kitchen" className="blog-hero__image" />
                <div className="blog-hero__overlay">
                    <div className="blog-hero__content">
                        <h1 className="blog-hero__title">Where <em>Elegance</em> Meets Efficiency</h1>
                        <p className="blog-hero__subtitle">Precision-engineered modular kitchens that combine beautiful design with intelligent storage and durable finishes.</p>
                        <button onClick={() => scrollTo('ideas')} className="blog-hero__cta" style={{ border: 'none', cursor: 'pointer' }}>
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
                                <div className="section-label" style={{ color: 'rgba(255,255,255,0.6)' }}><span style={{ background: 'rgba(255,255,255,0.5)', display: 'block', width: '20px', height: '1.5px' }}></span>Modular Kitchen</div>
                                <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1.8rem,3vw,2.5rem)', fontWeight: 600, color: '#fff', marginBottom: '1.25rem', lineHeight: 1.2 }}>The Heart of Every Home</h2>
                                <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.72)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                                    A modular kitchen is planned with precision, making daily tasks effortless. At Kryoss Interior, we design spaces that suit real cooking habits and modern lifestyles.
                                </p>
                                <div className="blog-quote" style={{ background: 'rgba(255,255,255,0.07)', borderColor: '#c9a96e' }}>
                                    <p className="blog-quote__text" style={{ color: 'rgba(255,255,255,0.85)' }}>At <strong style={{ color: '#c9a96e' }}>Kryoss Interior</strong>, we design kitchens that are as beautiful as they are functional - a true culinary sanctuary.</p>
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
                    <img src={straightKitchens} alt="Modular Kitchen - Kryoss Interior" />
                    <div className="blog-wide-image__caption">Premium Modular Kitchen Design â€¢ Kryoss Interior</div>
                </div>

                <section ref={reg('ideas')} data-section="ideas" id="ideas" style={{ marginBottom: '5rem', scrollMarginTop: '6rem' }}>
                    <div className="section-label"><span style={{ background: 'var(--kr-red)', display: 'block', width: '20px', height: '1.5px' }}></span>Kitchen Layouts</div>
                    <h2 className="blog-section-title" style={{ marginBottom: '2.5rem' }}>Modular Kitchen <em>Layouts & Ideas</em></h2>
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
                            <div className="section-label"><span style={{ background: 'var(--kr-red)', display: 'block', width: '20px', height: '1.5px' }}></span>Smart Storage</div>
                            <h2 className="blog-section-title">Intelligent <em>Kitchen Storage</em></h2>
                            <p style={{ fontSize: '1.05rem', color: 'var(--kr-slate-3)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                                A well-organized kitchen makes cooking a pleasure. Our modular kitchens are designed with smart storage solutions that keep everything in its place and within easy reach.
                            </p>
                            <div className="blog-checklist">
                                {['Pull-out drawers and baskets', 'Tall pantry units for dry goods', 'Corner carousel systems', 'Under-sink pull-out bins', 'Spice racks and cutlery organizers'].map((item, i) => (
                                    <div key={i} className="blog-checklist__item">
                                        <div className="blog-checklist__icon"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg></div>
                                        <span className="blog-checklist__text">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="blog-image-wrap" style={{ height: '480px' }}>
                            <img src={main} alt="Kitchen Storage" />
                        </div>
                    </div>

                    <div className="blog-split blog-split--reverse" style={{ marginTop: '4rem' }}>
                        <div>
                            <div className="section-label"><span style={{ background: 'var(--kr-red)', display: 'block', width: '20px', height: '1.5px' }}></span>Premium Finishes</div>
                            <h2 className="blog-section-title">Beautiful <em>Kitchen Finishes</em></h2>
                            <p style={{ fontSize: '1.05rem', color: 'var(--kr-slate-3)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                                The finish of your kitchen cabinets defines the overall aesthetic. From sleek high-gloss acrylic to warm wood veneers, we offer a wide range of premium finishes.
                            </p>
                            <div className="blog-checklist">
                                {['High-gloss acrylic for a modern look', 'Matte laminate for a sophisticated feel', 'Wood veneer for warmth and character', 'PU paint for a smooth, premium finish', 'Glass shutters for display sections'].map((item, i) => (
                                    <div key={i} className="blog-checklist__item">
                                        <div className="blog-checklist__icon"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg></div>
                                        <span className="blog-checklist__text">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="blog-image-wrap" style={{ height: '480px' }}>
                            <img src={parallelKitchens} alt="Kitchen Finishes" />
                        </div>
                    </div>
                </section>

                <div className="blog-stats-strip" style={{ marginBottom: '5rem' }}>
                    {[{ number: '700+', label: 'Kitchens Designed' }, { number: '5+', label: 'Layout Options' }, { number: '5yr', label: 'Service Warranty' }, { number: '3-6wk', label: 'Avg. Completion' }].map((stat, i) => (
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
                    <p className="blog-cta-section__subtitle">Let our experts create a kitchen that is as beautiful as it is functional - tailored to your cooking style and lifestyle.</p>
                    <Link to="/calculator/kitchen" className="blog-cta-section__btn">Calculate Kitchen Cost <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg></Link>
                </div>
            </div>
        </div>
    );
};

export default ModularKitchen;
