import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../blogs/BlogArticle.css';
import bathroomDesigns from '../../assets/design-gallery/bathroom-designs.jpg';

const ideas = [
    { icon: '', title: 'Spa-Style Retreat', desc: 'Freestanding tubs, rainfall showers and natural stone create a five-star spa experience at home.', image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&q=80' },
    { icon: '', title: 'Bright & Airy', desc: 'Maximise natural light with frameless glass, white tiles and minimal clutter for a fresh, open feel.', image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&q=80' },
    { icon: '', title: 'Dark & Dramatic', desc: 'Matte black fixtures, dark tiles and moody lighting for a bold, sophisticated bathroom statement.', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&q=80' },
    { icon: '', title: 'Biophilic Design', desc: 'Plants, natural wood accents and earthy tones bring the outdoors in for a calming, organic bathroom.', image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80' },
    { icon: '', title: 'Classic Marble', desc: 'Timeless Carrara or Calacatta marble surfaces paired with polished chrome for enduring elegance.', image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=600&q=80' },
    { icon: '', title: 'Compact & Smart', desc: 'Space-saving wall-hung vanities, corner showers and clever storage for small but stylish bathrooms.', image: 'https://images.unsplash.com/photo-1620626011761-996317702519?w=600&q=80' },
];

const faqs = [
    { q: 'What tiles are best for a bathroom?', a: 'Porcelain and ceramic tiles are the most popular choices - they are water-resistant, durable and available in countless styles. Large-format tiles (60x60cm or bigger) make small bathrooms feel more spacious.' },
    { q: 'How do I make a small bathroom feel bigger?', a: 'Use light colours, large-format tiles, frameless glass shower enclosures, wall-hung vanities and mirrors. Avoid dark grout lines and keep surfaces clutter-free.' },
    { q: 'What is the cost of a bathroom renovation?', a: 'A basic bathroom renovation starts from Rs. 1.5 lakhs, while a premium spa-style bathroom can cost Rs. 5-10 lakhs depending on fixtures, tiles and fittings chosen.' },
    { q: 'How long does a bathroom renovation take?', a: 'A standard bathroom renovation takes 2-4 weeks. This includes demolition, waterproofing, tiling, plumbing, electrical work and fixture installation.' },
];

const Bathroom = () => {
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
                <img src={bathroomDesigns} alt="Bathroom Design" className="blog-hero__image" />
                <div className="blog-hero__overlay">
                    <div className="blog-hero__content">
                        <h1 className="blog-hero__title">Your Private <em>Spa Retreat</em></h1>
                        <p className="blog-hero__subtitle">Luxurious bathrooms designed for relaxation, rejuvenation and refined living - every detail considered.</p>
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

                <section ref={reg('intro')} data-section="intro" style={{ marginBottom: '5rem', scrollMarginTop: '6rem' }}>
                    <div className="blog-intro">
                        <div className="blog-intro-grid">
                            <div>
                                <div className="section-label" style={{ color: 'rgba(255,255,255,0.6)' }}><span style={{ background: 'rgba(255,255,255,0.5)', display: 'block', width: '20px', height: '1.5px' }}></span>Bathroom Design</div>
                                <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1.8rem,3vw,2.5rem)', fontWeight: 600, color: '#fff', marginBottom: '1.25rem', lineHeight: 1.2 }}>Where Luxury Meets Function</h2>
                                <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.72)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                                    A beautifully designed bathroom transforms your daily routine into a ritual. From compact ensuites to grand master bathrooms, we craft spaces that are as functional as they are stunning.
                                </p>
                                <div className="blog-quote" style={{ background: 'rgba(255,255,255,0.07)', borderColor: '#c9a96e' }}>
                                    <p className="blog-quote__text" style={{ color: 'rgba(255,255,255,0.85)' }}>At <strong style={{ color: '#c9a96e' }}>Kryoss Interior</strong>, we design bathrooms that feel like a luxury hotel - in your own home.</p>
                                </div>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <div className="blog-intro__stat">300+</div>
                                <p className="blog-intro__stat-label">Bathrooms designed and renovated across India</p>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="blog-wide-image" style={{ marginBottom: '5rem' }}>
                    <img src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1600&q=80" alt="Luxury Bathroom - Kryoss Interior" />
                    <div className="blog-wide-image__caption">Spa-Style Master Bathroom â€¢ Kryoss Interior</div>
                </div>

                <section ref={reg('ideas')} data-section="ideas" id="ideas" style={{ marginBottom: '5rem', scrollMarginTop: '6rem' }}>
                    <div className="section-label"><span style={{ background: 'var(--kr-red)', display: 'block', width: '20px', height: '1.5px' }}></span>Design Styles</div>
                    <h2 className="blog-section-title" style={{ marginBottom: '2.5rem' }}>Bathroom <em>Design Styles</em></h2>
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
                            <div className="section-label"><span style={{ background: 'var(--kr-red)', display: 'block', width: '20px', height: '1.5px' }}></span>Master Bathroom</div>
                            <h2 className="blog-section-title">The Ultimate <em>Master Bathroom</em></h2>
                            <p style={{ fontSize: '1.05rem', color: 'var(--kr-slate-3)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                                A master bathroom is your private escape - a space for deep relaxation and indulgent self-care. Every element should feel considered and luxurious.
                            </p>
                            <div className="blog-checklist">
                                {['Freestanding soaking tub as centrepiece', 'Rainfall shower with body jets', 'Double vanity with ample storage', 'Heated floors for year-round comfort', 'Backlit mirrors with anti-fog coating'].map((item, i) => (
                                    <div key={i} className="blog-checklist__item">
                                        <div className="blog-checklist__icon"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg></div>
                                        <span className="blog-checklist__text">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="blog-image-wrap" style={{ height: '480px' }}>
                            <img src="https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=900&q=80" alt="Master Bathroom" />
                        </div>
                    </div>

                    <div className="blog-split blog-split--reverse" style={{ marginTop: '4rem' }}>
                        <div>
                            <div className="section-label"><span style={{ background: 'var(--kr-red)', display: 'block', width: '20px', height: '1.5px' }}></span>Compact Bathrooms</div>
                            <h2 className="blog-section-title">Smart <em>Small Bathrooms</em></h2>
                            <p style={{ fontSize: '1.05rem', color: 'var(--kr-slate-3)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                                Small bathrooms can be just as beautiful and functional as large ones. Smart design choices maximize every inch without compromising on style.
                            </p>
                            <div className="blog-checklist">
                                {['Wall-hung vanities to free floor space', 'Corner shower enclosures', 'Large-format tiles to expand visual space', 'Recessed niches for storage', 'Full-height mirrors to add depth'].map((item, i) => (
                                    <div key={i} className="blog-checklist__item">
                                        <div className="blog-checklist__icon"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg></div>
                                        <span className="blog-checklist__text">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="blog-image-wrap" style={{ height: '480px' }}>
                            <img src="https://images.unsplash.com/photo-1620626011761-996317702519?w=900&q=80" alt="Small Bathroom Design" />
                        </div>
                    </div>
                </section>

                <div className="blog-stats-strip" style={{ marginBottom: '5rem' }}>
                    {[
                        { number: '6+', label: 'Design Styles' },
                        { number: '300+', label: 'Bathrooms Renovated' },
                        { number: '5yr', label: 'Waterproofing Warranty' },
                        { number: '2-4wk', label: 'Avg. Completion' },
                    ].map((stat, i) => (
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
                                <div className="blog-faq__question">
                                    <span className="blog-faq__question-text">{faq.q}</span>
                                    <span className="blog-faq__toggle">+</span>
                                </div>
                                {expandedFaq === i && <div className="blog-faq__answer">{faq.a}</div>}
                            </div>
                        ))}
                    </div>
                </section>

                <div ref={reg('cta')} data-section="cta" className="blog-cta-section" style={{ marginBottom: '4rem' }}>
                    <h2 className="blog-cta-section__title">Design Your Dream <em style={{ fontStyle: 'italic', color: '#c9a96e' }}>Bathroom</em></h2>
                    <p className="blog-cta-section__subtitle">Let our experts create a bathroom that feels like a luxury spa - tailored to your taste and lifestyle.</p>
                    <Link to="/contact-us" className="blog-cta-section__btn">
                        Get a Free Consultation
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Bathroom;
