import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../blogs/BlogArticle.css';
import wardrobesDesign from '../../assets/design-gallery/wardrobes-design.jpg';

import glassFront from '../../assets/design-gallery/wardrobe/Glass Front.jpg';
import hingedClassic from '../../assets/design-gallery/wardrobe/Hinged Classic.jpg';
import kidsWardrobe from '../../assets/design-gallery/wardrobe/Kids Wardrobe.jpg';
import loftIntegrated from '../../assets/design-gallery/wardrobe/Loft Integrated.jpg';
import modernSliding from '../../assets/design-gallery/wardrobe/Modern Sliding.jpg';
import walkInLuxury from '../../assets/design-gallery/wardrobe/walk-in-luxury.jpg';

const ideas = [
    {
      icon: '',
      title: 'Glass Front Wardrobe',
      desc: 'Elegant glass front panels create a modern and sophisticated look while allowing a subtle display of your wardrobe interior.',
      image: glassFront,
    },
    {
      icon: '',
      title: 'Hinged Classic Wardrobe',
      desc: 'Traditional hinged door wardrobes offering full access, timeless styling, and practical internal storage solutions.',
      image: hingedClassic,
    },
    {
      icon: '',
      title: 'Kids Wardrobe',
      desc: 'Fun, functional and safe wardrobe designs tailored for children with smart storage and playful aesthetics.',
      image: kidsWardrobe,
    },
    {
      icon: '',
      title: 'Loft Integrated Wardrobe',
      desc: 'Space-saving loft-integrated wardrobes that maximise vertical storage while maintaining a clean built-in look.',
      image: loftIntegrated,
    },
    {
      icon: '',
      title: 'Modern Sliding Wardrobe',
      desc: 'Sleek sliding door wardrobes ideal for compact spaces, combining contemporary design with smooth functionality.',
      image: modernSliding,
    },
    {
      icon: '',
      title: 'Walk-In Luxury Wardrobe',
      desc: 'A premium walk-in wardrobe solution featuring custom shelving, drawers, and hanging areas for a complete dressing experience.',
      image: walkInLuxury,
    },
  ];

const faqs = [
    { q: 'What is the standard wardrobe depth?', a: 'Standard wardrobe depth is 60cm (24 inches) for hanging clothes. Sliding door wardrobes typically need 65-70cm depth to accommodate the door mechanism. Shelving-only sections can be shallower at 35-45cm.' },
    { q: 'Sliding vs hinged wardrobe doors - which is better?', a: 'Sliding doors are ideal for smaller rooms as they do not require clearance space to open. Hinged doors provide full access to the entire wardrobe at once and are better for larger rooms with more space.' },
    { q: 'How do I organize a wardrobe efficiently?', a: 'Categorize by type (shirts, trousers, dresses) and then by colour within each category. Use the top shelf for seasonal items, eye-level for daily wear and lower sections for shoes and folded items.' },
    { q: 'What materials are best for wardrobe interiors?', a: 'E1 grade MDF or plywood with laminate or veneer finish is the most popular choice for wardrobe interiors. It is durable, moisture-resistant and available in a wide range of colours and textures.' },
];

const Wardrobe = () => {
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
        { id: 'ideas', label: 'Wardrobe Ideas', emoji: '' },
        { id: 'styles', label: 'Wardrobe Types', emoji: '' },
        { id: 'faq', label: 'FAQs', emoji: '' },
    ];

    return (
        <div className="blog-page">
            <div className="blog-hero">
                <img src={wardrobesDesign} alt="Wardrobe Design" className="blog-hero__image" />
                <div className="blog-hero__overlay">
                    <div className="blog-hero__content">
                        <h1 className="blog-hero__title">Your Personal <em>Style Studio</em></h1>
                        <p className="blog-hero__subtitle">Custom wardrobes designed to organize your world beautifully - from compact sliding doors to luxurious walk-in dressing rooms.</p>
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
                                <div className="section-label" style={{ color: 'rgba(255,255,255,0.6)' }}><span style={{ background: 'rgba(255,255,255,0.5)', display: 'block', width: '20px', height: '1.5px' }}></span>Wardrobe Design</div>
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
                    <img src={walkInLuxury} alt="Custom Wardrobe - Kryoss Interior" />
                    <div className="blog-wide-image__caption">Walk-In Wardrobe Design â€¢ Kryoss Interior</div>
                </div>

                <section ref={reg('ideas')} data-section="ideas" id="ideas" style={{ marginBottom: '5rem', scrollMarginTop: '6rem' }}>
                    <div className="section-label"><span style={{ background: 'var(--kr-red)', display: 'block', width: '20px', height: '1.5px' }}></span>Wardrobe Ideas</div>
                    <h2 className="blog-section-title" style={{ marginBottom: '2.5rem' }}>Wardrobe <em>Design Ideas</em></h2>
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
                            <div className="section-label"><span style={{ background: 'var(--kr-red)', display: 'block', width: '20px', height: '1.5px' }}></span>Sliding Door Wardrobes</div>
                            <h2 className="blog-section-title">Sleek <em>Sliding Wardrobes</em></h2>
                            <p style={{ fontSize: '1.05rem', color: 'var(--kr-slate-3)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                                Sliding door wardrobes are the most space-efficient option - perfect for bedrooms where hinged doors would obstruct movement. They offer a clean, contemporary look.
                            </p>
                            <div className="blog-checklist">
                                {['Mirrored panels to expand visual space', 'Soft-close sliding mechanism', 'Customizable interior layout', 'Available in glass, wood or lacquer finishes', 'Floor-to-ceiling design for maximum storage'].map((item, i) => (
                                    <div key={i} className="blog-checklist__item">
                                        <div className="blog-checklist__icon"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg></div>
                                        <span className="blog-checklist__text">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="blog-image-wrap" style={{ height: '480px' }}>
                            <img src={modernSliding} alt="Sliding Wardrobe" />
                        </div>
                    </div>

                    <div className="blog-split blog-split--reverse" style={{ marginTop: '4rem' }}>
                        <div>
                            <div className="section-label"><span style={{ background: 'var(--kr-red)', display: 'block', width: '20px', height: '1.5px' }}></span>Walk-In Wardrobes</div>
                            <h2 className="blog-section-title">Luxurious <em>Walk-In Wardrobes</em></h2>
                            <p style={{ fontSize: '1.05rem', color: 'var(--kr-slate-3)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                                A walk-in wardrobe is the ultimate luxury - a dedicated dressing room that transforms your morning routine into a pleasurable ritual.
                            </p>
                            <div className="blog-checklist">
                                {['Island unit with drawers for accessories', 'Full-length mirror with integrated lighting', 'Dedicated sections for different clothing types', 'Display shelves for bags and shoes', 'Seating bench for comfortable dressing'].map((item, i) => (
                                    <div key={i} className="blog-checklist__item">
                                        <div className="blog-checklist__icon"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg></div>
                                        <span className="blog-checklist__text">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="blog-image-wrap" style={{ height: '480px' }}>
                            <img src={glassFront} alt="Walk-In Wardrobe" />
                        </div>
                    </div>
                </section>

                <div className="blog-stats-strip" style={{ marginBottom: '5rem' }}>
                    {[{ number: '6+', label: 'Wardrobe Types' }, { number: '800+', label: 'Wardrobes Installed' }, { number: '5yr', label: 'Service Warranty' }, { number: '2-3wk', label: 'Avg. Completion' }].map((stat, i) => (
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
                    <p className="blog-cta-section__subtitle">Let our experts create a custom wardrobe that organizes your world beautifully and reflects your personal style.</p>
                    <Link to="/contact-us" className="blog-cta-section__btn">Get a Free Consultation <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg></Link>
                </div>
            </div>
        </div>
    );
};

export default Wardrobe;
