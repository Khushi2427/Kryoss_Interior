import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../blogs/BlogArticle.css';
import bedroomDesign from '../../assets/design-gallery/bedroom-design.jpg';
import bohemian from '../../assets/design-gallery/bedroom/Bohemian Retreat.jpg';
import classicTraditional from '../../assets/design-gallery/bedroom/Classic Traditional.jpg';
import contemporaryLuxury from '../../assets/design-gallery/bedroom/Contemporary Luxury.jpg';
import cozyScandinavian from '../../assets/design-gallery/bedroom/Cozy Scandinavian.jpg';
import industrialChic from '../../assets/design-gallery/bedroom/Industrial Chic.jpg';
import modernMinimalist from '../../assets/design-gallery/bedroom/Modern Minimalist.jpg';
import kidsBedroom from '../../assets/blogs/Kids Bedroom.jpg';

const ideas = [
    {
      title: 'Bohemian Retreat',
      desc: 'Layered patterns, global textiles and eclectic décor elements create a relaxed, artistic and free-spirited bedroom.',
      image: bohemian,
    },
    {
      title: 'Classic Traditional',
      desc: 'Timeless furniture silhouettes, elegant detailing and rich fabrics that bring warmth and sophistication.',
      image: classicTraditional,
    },
    {
      title: 'Contemporary Luxury',
      desc: 'Premium finishes, statement headboards and layered lighting for a refined and opulent master suite.',
      image: contemporaryLuxury,
    },
    {
      title: 'Cozy Scandinavian',
      desc: 'Soft neutral palettes, natural wood textures and minimal styling for a calm and inviting atmosphere.',
      image: cozyScandinavian,
    },
    {
      title: 'Industrial Chic',
      desc: 'Raw materials, exposed textures and bold contrasts for a modern urban bedroom aesthetic.',
      image: industrialChic,
    },
    {
      title: 'Modern Minimalist',
      desc: 'Clean lines, clutter-free layouts and subtle tones that create a peaceful, serene retreat.',
      image: modernMinimalist,
    },
  ];
const faqs = [
    { q: 'What colours work best for a peaceful bedroom?', a: 'Soft neutrals and pastel tones are ideal - warm beige, soft grey, dusty blue and gentle lavender all promote relaxation and restful sleep.' },
    { q: 'How can I maximize storage in a compact bedroom?', a: 'Use storage beds with hydraulic lift options, sliding wardrobes to save floor space, and vertical cabinets that utilize full wall height.' },
    { q: 'How long does a bedroom interior project take?', a: 'Typically 4-6 weeks depending on scope and customization - covering design consultation, material selection, manufacturing and installation.' },
    { q: 'What is the best lighting for a bedroom?', a: 'Layer your lighting: ambient ceiling lights for general illumination, bedside reading lamps for task lighting, and warm accent cove lighting for mood.' },
];

const Bedroom = () => {
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
        { id: 'ideas', label: 'Design Styles', emoji: '' },
        { id: 'styles', label: 'Key Elements', emoji: '' },
        { id: 'faq', label: 'FAQs', emoji: '' },
    ];

    return (
        <div className="blog-page">
            <div className="blog-hero">
                <img src={bedroomDesign} alt="Bedroom Design" className="blog-hero__image" />
                <div className="blog-hero__overlay">
                    <div className="blog-hero__content">
                        <h1 className="blog-hero__title">Your Personal <em>Sanctuary</em></h1>
                        <p className="blog-hero__subtitle">Designed for comfort, crafted for you. Explore bedroom styles that blend relaxation, storage and timeless elegance.</p>
                        <button onClick={() => scrollTo('ideas')} className="blog-hero__cta" style={{ border: 'none', cursor: 'pointer' }}>
                            Explore Styles <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
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

                {/* INTRO */}
                <section ref={reg('intro')} data-section="intro" style={{ marginBottom: '5rem', scrollMarginTop: '6rem' }}>
                    <div className="blog-intro">
                        <div className="blog-intro-grid">
                            <div>
                                <div className="section-label" style={{ color: 'rgba(255,255,255,0.6)' }}><span style={{ background: 'rgba(255,255,255,0.5)', display: 'block', width: '20px', height: '1.5px' }}></span>Bedroom Design</div>
                                <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1.8rem,3vw,2.5rem)', fontWeight: 600, color: '#fff', marginBottom: '1.25rem', lineHeight: 1.2 }}>A Space That Restores You</h2>
                                <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.72)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                                    A well-designed bedroom is more than a place to sleep - it is your personal sanctuary. We craft spaces that balance comfort, storage and aesthetics to help you truly unwind.
                                </p>
                                <div className="blog-quote" style={{ background: 'rgba(255,255,255,0.07)', borderColor: '#c9a96e' }}>
                                    <p className="blog-quote__text" style={{ color: 'rgba(255,255,255,0.85)' }}>At <strong style={{ color: '#c9a96e' }}>Kryoss Interior</strong>, we design bedrooms that feel like a five-star retreat - every single night.</p>
                                </div>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <div className="blog-intro__stat">500+</div>
                                <p className="blog-intro__stat-label">Bedrooms designed across India</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* WIDE BANNER */}
                <div className="blog-wide-image" style={{ marginBottom: '5rem' }}>
                    <img src={contemporaryLuxury} alt="Luxury Bedroom - Kryoss Interior" />
                    <div className="blog-wide-image__caption">Contemporary Luxury Bedroom â€¢ Kryoss Interior</div>
                </div>

                {/* IDEAS GRID */}
                <section ref={reg('ideas')} data-section="ideas" id="ideas" style={{ marginBottom: '5rem', scrollMarginTop: '6rem' }}>
                    <div className="section-label"><span style={{ background: 'var(--kr-red)', display: 'block', width: '20px', height: '1.5px' }}></span>Design Styles</div>
                    <h2 className="blog-section-title" style={{ marginBottom: '2.5rem' }}>Bedroom <em>Design Styles</em></h2>
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

                {/* SPLIT: MASTER BEDROOM */}
                <section ref={reg('styles')} data-section="styles" id="styles" style={{ marginBottom: '5rem', scrollMarginTop: '6rem' }}>
                    <div className="blog-split">
                        <div>
                            <div className="section-label"><span style={{ background: 'var(--kr-red)', display: 'block', width: '20px', height: '1.5px' }}></span>Master Bedroom</div>
                            <h2 className="blog-section-title">Luxurious <em>Master Bedroom</em></h2>
                            <p style={{ fontSize: '1.05rem', color: 'var(--kr-slate-3)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                                The master bedroom deserves the finest treatment - a space that reflects your personality and provides the ultimate comfort after a long day.
                            </p>
                            <div className="blog-checklist">
                                {['Statement headboard as focal point', 'Walk-in wardrobe with custom fittings', 'Layered ambient and accent lighting', 'Premium linen and upholstery textures', 'En-suite bathroom integration'].map((item, i) => (
                                    <div key={i} className="blog-checklist__item">
                                        <div className="blog-checklist__icon"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg></div>
                                        <span className="blog-checklist__text">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="blog-image-wrap" style={{ height: '480px' }}>
                            <img src={bedroomDesign} alt="Master Bedroom" />
                        </div>
                    </div>

                    <div className="blog-split blog-split--reverse" style={{ marginTop: '4rem' }}>
                        <div>
                            <div className="section-label"><span style={{ background: 'var(--kr-red)', display: 'block', width: '20px', height: '1.5px' }}></span>Kids & Guest Room</div>
                            <h2 className="blog-section-title">Fun & <em>Functional Rooms</em></h2>
                            <p style={{ fontSize: '1.05rem', color: 'var(--kr-slate-3)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                                Kids' rooms and guest bedrooms need to be versatile, safe and inspiring - spaces that grow with their occupants and delight every visitor.
                            </p>
                            <div className="blog-checklist">
                                {['Playful themes and vibrant colours', 'Safety-first rounded furniture', 'Integrated study and play zones', 'Bunk beds with built-in storage', 'Easily reconfigurable layouts'].map((item, i) => (
                                    <div key={i} className="blog-checklist__item">
                                        <div className="blog-checklist__icon"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg></div>
                                        <span className="blog-checklist__text">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="blog-image-wrap" style={{ height: '480px' }}>
                            <img src={kidsBedroom} alt="Kids Bedroom" />
                        </div>
                    </div>
                </section>

                {/* STATS */}
                <div className="blog-stats-strip" style={{ marginBottom: '5rem' }}>
                    {[
                        { number: '6+', label: 'Design Styles' },
                        { number: '500+', label: 'Bedrooms Designed' },
                        { number: '5yr', label: 'Service Warranty' },
                        { number: '4-6wk', label: 'Avg. Completion' },
                    ].map((stat, i) => (
                        <div key={i} className="blog-stat">
                            <div className="blog-stat__number">{stat.number}</div>
                            <div className="blog-stat__label">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* FAQ */}
                <section ref={reg('faq')} data-section="faq" id="faq" className="blog-faq__section" style={{ marginBottom: '5rem', scrollMarginTop: '6rem' }}>
                    <div className="section-label"><span style={{ background: 'var(--kr-red)', display: 'block', width: '20px', height: '1.5px' }}></span>FAQs</div>
                    <h2 className="blog-section-title" style={{ marginBottom: '2rem' }}>Frequently Asked <em>Questions</em></h2>
                    <div className="blog-faq__list">
                        {faqs.map((faq, i) => (
                            <div key={i} className={`blog-faq__item${expandedFaq === i ? ' open' : ''}`} onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                                <div className="blog-faq__question">
                                    <span className="blog-faq__question-text">{faq.q}</span>
                                    <span className="blog-faq__toggle">+</span>
                                </div>
                                {expandedFaq === i && <div className="blog-faq__answer">{faq.a}</div>}
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <div ref={reg('cta')} data-section="cta" className="blog-cta-section" style={{ marginBottom: '4rem' }}>
                    <h2 className="blog-cta-section__title">Design Your Dream <em style={{ fontStyle: 'italic', color: '#c9a96e' }}>Bedroom</em></h2>
                    <p className="blog-cta-section__subtitle">Let our experts create a bedroom that is beautiful, restful and uniquely yours - from concept to completion.</p>
                    <Link to="/contact-us" className="blog-cta-section__btn">
                        Get a Free Consultation
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Bedroom;
