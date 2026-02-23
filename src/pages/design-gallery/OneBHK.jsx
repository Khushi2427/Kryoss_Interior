import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../blogs/BlogArticle.css';
import oneBhk from '../../assets/design-gallery/1-bhk.jpg';
import layered from '../../assets/design-gallery/one/layered.png';
import light from '../../assets/design-gallery/one/light.png';
import mirror from '../../assets/design-gallery/one/mirror.png';
import multi from '../../assets/design-gallery/one/multi.png';
import open from '../../assets/design-gallery/one/open.png';
import vertical from '../../assets/design-gallery/one/vertical.png';

const ideas = [
    { 
        icon: '', 
        title: 'Open-Plan Living', 
        desc: 'Combine the living, dining and kitchen into one flowing space to maximize the feeling of openness in a compact 1BHK.', 
        image: open
    },
    { 
        icon: '', 
        title: 'Mirror Magic', 
        desc: 'Strategically placed mirrors double the perceived space and bounce natural light throughout the apartment.', 
        image: mirror
    },
    { 
        icon: '', 
        title: 'Multi-Function Furniture', 
        desc: 'Sofa beds, storage ottomans, fold-down dining tables and murphy beds maximize utility in every square foot.', 
        image: multi
    },
    { 
        icon: '', 
        title: 'Vertical Storage', 
        desc: 'Floor-to-ceiling shelving and wall-mounted storage units free up floor space and draw the eye upward.', 
        image: vertical
    },
    { 
        icon: '', 
        title: 'Light Colour Palette', 
        desc: 'Whites, creams and soft pastels make a 1BHK feel airy and spacious - add personality through accessories.', 
        image: light
    },
    { 
        icon: '', 
        title: 'Layered Lighting', 
        desc: 'Multiple light sources at different heights create depth and make a small apartment feel warm and inviting.', 
        image: layered
    },
];

const faqs = [
    { q: 'How do I make a 1BHK apartment feel bigger?', a: 'Use light colours, mirrors, multi-functional furniture and open shelving. Keep the floor as clear as possible, use furniture with legs and maintain a consistent colour palette throughout the apartment.' },
    { q: 'What is the best layout for a 1BHK apartment?', a: 'An open-plan layout combining living, dining and kitchen works best for 1BHK apartments. It creates a sense of flow and makes the space feel larger. Use rugs and furniture arrangement to define zones.' },
    { q: 'How much does a 1BHK interior design cost?', a: 'A complete 1BHK interior design typically costs between Rs. 4-8 lakhs for a standard finish and Rs. 8-15 lakhs for a premium finish, depending on the size, materials and level of customization.' },
    { q: 'How long does a 1BHK interior project take?', a: 'A complete 1BHK interior project typically takes 6-10 weeks from design finalization to handover, including manufacturing, installation and finishing work.' },
];

const OneBHK = () => {
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
        { id: 'styles', label: 'Space Solutions', emoji: '' },
        { id: 'faq', label: 'FAQs', emoji: '' },
    ];

    return (
        <div className="blog-page">
            <div className="blog-hero">
                <img src={oneBhk} alt="1BHK Interior Design" className="blog-hero__image" />
                <div className="blog-hero__overlay">
                    <div className="blog-hero__content">
                        <h1 className="blog-hero__title">Small Space, <em>Big Style</em></h1>
                        <p className="blog-hero__subtitle">Transform your 1BHK apartment into a beautifully designed, space-efficient home that feels anything but small.</p>
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
                                <div className="section-label" style={{ color: 'rgba(255,255,255,0.6)' }}><span style={{ background: 'rgba(255,255,255,0.5)', display: 'block', width: '20px', height: '1.5px' }}></span>1BHK Design</div>
                                <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1.8rem,3vw,2.5rem)', fontWeight: 600, color: '#fff', marginBottom: '1.25rem', lineHeight: 1.2 }}>Every Square Foot Counts</h2>
                                <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.72)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                                    A 1BHK apartment is a design challenge and an opportunity. With the right approach, even the most compact space can feel open, stylish and perfectly suited to your lifestyle.
                                </p>
                                <div className="blog-quote" style={{ background: 'rgba(255,255,255,0.07)', borderColor: '#c9a96e' }}>
                                    <p className="blog-quote__text" style={{ color: 'rgba(255,255,255,0.85)' }}>At <strong style={{ color: '#c9a96e' }}>Kryoss Interior</strong>, we specialize in making small spaces feel luxurious, functional and uniquely yours.</p>
                                </div>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <div className="blog-intro__stat">350+</div>
                                <p className="blog-intro__stat-label">1BHK apartments transformed across India</p>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="blog-wide-image" style={{ marginBottom: '5rem' }}>
                    <img src={multi} alt="1BHK Interior - Kryoss Interior" />
                    <div className="blog-wide-image__caption">Modern 1BHK Interior Design â€¢ Kryoss Interior</div>
                </div>

                <section ref={reg('ideas')} data-section="ideas" id="ideas" style={{ marginBottom: '5rem', scrollMarginTop: '6rem' }}>
                    <div className="section-label"><span style={{ background: 'var(--kr-red)', display: 'block', width: '20px', height: '1.5px' }}></span>Design Ideas</div>
                    <h2 className="blog-section-title" style={{ marginBottom: '2.5rem' }}>1BHK <em>Design Ideas</em></h2>
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
                            <h2 className="blog-section-title">Smart <em>Living & Dining</em></h2>
                            <p style={{ fontSize: '1.05rem', color: 'var(--kr-slate-3)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                                In a 1BHK, the living and dining areas often share the same space. Smart zoning with furniture placement and rugs creates distinct areas without walls.
                            </p>
                            <div className="blog-checklist">
                                {['Compact 2-seater or loveseat sofa', 'Fold-down or extendable dining table', 'Area rug to define the living zone', 'Wall-mounted TV to save floor space', 'Multi-purpose coffee table with storage'].map((item, i) => (
                                    <div key={i} className="blog-checklist__item">
                                        <div className="blog-checklist__icon"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg></div>
                                        <span className="blog-checklist__text">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="blog-image-wrap" style={{ height: '480px' }}>
                            <img src={mirror} alt="1BHK Living Dining" />
                        </div>
                    </div>

                    <div className="blog-split blog-split--reverse" style={{ marginTop: '4rem' }}>
                        <div>
                            <div className="section-label"><span style={{ background: 'var(--kr-red)', display: 'block', width: '20px', height: '1.5px' }}></span>Bedroom</div>
                            <h2 className="blog-section-title">Compact <em>Bedroom Design</em></h2>
                            <p style={{ fontSize: '1.05rem', color: 'var(--kr-slate-3)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                                The bedroom in a 1BHK needs to work hard - providing a comfortable sleeping space, ample storage and sometimes a work area, all within a compact footprint.
                            </p>
                            <div className="blog-checklist">
                                {['Storage bed with hydraulic lift', 'Sliding wardrobe to save space', 'Wall-mounted bedside tables', 'Compact study nook or desk', 'Mirrors to expand the visual space'].map((item, i) => (
                                    <div key={i} className="blog-checklist__item">
                                        <div className="blog-checklist__icon"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg></div>
                                        <span className="blog-checklist__text">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="blog-image-wrap" style={{ height: '480px' }}>
                            <img src={open} alt="1BHK Bedroom" />
                        </div>
                    </div>
                </section>

                <div className="blog-stats-strip" style={{ marginBottom: '5rem' }}>
                    {[{ number: '350+', label: '1BHKs Designed' }, { number: 'Rs. 4L+', label: 'Starting Budget' }, { number: '5yr', label: 'Service Warranty' }, { number: '6-10wk', label: 'Avg. Completion' }].map((stat, i) => (
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
                    <h2 className="blog-cta-section__title">Transform Your <em style={{ fontStyle: 'italic', color: '#c9a96e' }}>1BHK Apartment</em></h2>
                    <p className="blog-cta-section__subtitle">Let our experts design a beautiful, space-efficient 1BHK interior that maximizes every square foot.</p>
                    <Link to="/contact-us" className="blog-cta-section__btn">Get a Free Consultation <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg></Link>
                </div>
            </div>
        </div>
    );
};

export default OneBHK;
