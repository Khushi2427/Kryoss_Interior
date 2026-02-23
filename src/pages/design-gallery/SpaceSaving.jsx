import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../blogs/BlogArticle.css';
import spaceSaving from '../../assets/design-gallery/space-saving.jpg';

const ideas = [
    { icon: '', title: 'Murphy Beds', desc: 'Wall beds that fold away when not in use free up the entire floor space of a room for daytime activities.', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80' },
    { icon: '', title: 'Storage Stairs', desc: 'Each step of a staircase can be a pull-out drawer or cabinet - turning dead space into valuable storage.', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80' },
    { icon: '', title: 'Window Seats', desc: 'Built-in window seats with storage underneath create a cozy reading nook and eliminate the need for separate furniture.', image: 'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=600&q=80' },
    { icon: '', title: 'Pocket Doors', desc: 'Sliding pocket doors disappear into the wall, saving the swing space of a traditional door - ideal for compact rooms.', image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&q=80' },
    { icon: '', title: 'Vertical Storage', desc: 'Floor-to-ceiling shelving and tall cabinets maximize vertical space, keeping the floor clear and the room feeling open.', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80' },
    { icon: '', title: 'Nesting Furniture', desc: 'Nesting tables, stackable chairs and foldable furniture can be stored away when not needed, adapting to your needs.', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80' },
];

const faqs = [
    { q: 'What is the most effective space-saving furniture?', a: 'Murphy beds (wall beds), sofa beds, extendable dining tables, storage ottomans and nesting tables are among the most effective space-saving furniture pieces for compact homes.' },
    { q: 'How do I maximize storage in a small apartment?', a: 'Use vertical space with floor-to-ceiling shelving, choose furniture with built-in storage, use the space under beds and stairs, and install wall-mounted shelves and hooks to keep the floor clear.' },
    { q: 'Can a small apartment feel luxurious?', a: 'Absolutely. Luxury is about quality, not quantity. High-quality materials, thoughtful design, good lighting and a curated selection of beautiful objects can make even the smallest apartment feel premium.' },
    { q: 'What colours make a small space feel bigger?', a: 'Light colours like white, cream, light grey and soft pastels reflect light and make spaces feel larger. Using the same colour on walls, ceiling and trim creates a seamless, expansive effect.' },
];

const SpaceSaving = () => {
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
        { id: 'ideas', label: 'Space Solutions', emoji: '' },
        { id: 'styles', label: 'Smart Design', emoji: '' },
        { id: 'faq', label: 'FAQs', emoji: '' },
    ];

    return (
        <div className="blog-page">
            <div className="blog-hero">
                <img src={spaceSaving} alt="Space Saving Interior Design" className="blog-hero__image" />
                <div className="blog-hero__overlay">
                    <div className="blog-hero__content">
                        <h1 className="blog-hero__title">Ingenious Design for <em>Compact Living</em></h1>
                        <p className="blog-hero__subtitle">Discover clever space-saving solutions that make every square foot work harder - without compromising on style or comfort.</p>
                        <button onClick={() => scrollTo('ideas')} className="blog-hero__cta" style={{ border: 'none', cursor: 'pointer' }}>
                            Explore Solutions <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
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
                                <div className="section-label" style={{ color: 'rgba(255,255,255,0.6)' }}><span style={{ background: 'rgba(255,255,255,0.5)', display: 'block', width: '20px', height: '1.5px' }}></span>Space-Saving Design</div>
                                <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1.8rem,3vw,2.5rem)', fontWeight: 600, color: '#fff', marginBottom: '1.25rem', lineHeight: 1.2 }}>Less Space, More Life</h2>
                                <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.72)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                                    Space-saving design is not about compromise - it is about ingenuity. The best compact homes are often the most thoughtfully designed, with every element serving multiple purposes.
                                </p>
                                <div className="blog-quote" style={{ background: 'rgba(255,255,255,0.07)', borderColor: '#c9a96e' }}>
                                    <p className="blog-quote__text" style={{ color: 'rgba(255,255,255,0.85)' }}>At <strong style={{ color: '#c9a96e' }}>Kryoss Interior</strong>, we turn space constraints into design opportunities - creating homes that feel larger than they are.</p>
                                </div>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <div className="blog-intro__stat">2x</div>
                                <p className="blog-intro__stat-label">Effective storage capacity achievable with smart space-saving design</p>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="blog-wide-image" style={{ marginBottom: '5rem' }}>
                    <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1600&q=80" alt="Space Saving Design - Kryoss Interior" />
                    <div className="blog-wide-image__caption">Smart Space-Saving Interior Design â€¢ Kryoss Interior</div>
                </div>

                <section ref={reg('ideas')} data-section="ideas" id="ideas" style={{ marginBottom: '5rem', scrollMarginTop: '6rem' }}>
                    <div className="section-label"><span style={{ background: 'var(--kr-red)', display: 'block', width: '20px', height: '1.5px' }}></span>Space Solutions</div>
                    <h2 className="blog-section-title" style={{ marginBottom: '2.5rem' }}>Space-Saving <em>Design Solutions</em></h2>
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
                            <div className="section-label"><span style={{ background: 'var(--kr-red)', display: 'block', width: '20px', height: '1.5px' }}></span>Multi-Function Rooms</div>
                            <h2 className="blog-section-title">Rooms That <em>Do More</em></h2>
                            <p style={{ fontSize: '1.05rem', color: 'var(--kr-slate-3)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                                In a compact home, every room needs to serve multiple purposes. Smart design makes this seamless - a guest room that is also a home office, a dining room that doubles as a workspace.
                            </p>
                            <div className="blog-checklist">
                                {['Murphy bed with integrated desk and shelving', 'Dining table that folds into a console', 'Sofa bed for guest accommodation', 'Home office that converts to a guest room', 'Kitchen island with seating and storage'].map((item, i) => (
                                    <div key={i} className="blog-checklist__item">
                                        <div className="blog-checklist__icon"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg></div>
                                        <span className="blog-checklist__text">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="blog-image-wrap" style={{ height: '480px' }}>
                            <img src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=900&q=80" alt="Multi-Function Room" />
                        </div>
                    </div>

                    <div className="blog-split blog-split--reverse" style={{ marginTop: '4rem' }}>
                        <div>
                            <div className="section-label"><span style={{ background: 'var(--kr-red)', display: 'block', width: '20px', height: '1.5px' }}></span>Hidden Storage</div>
                            <h2 className="blog-section-title">The Art of <em>Hidden Storage</em></h2>
                            <p style={{ fontSize: '1.05rem', color: 'var(--kr-slate-3)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                                The best storage is invisible. Built-in cabinets that blend with walls, furniture with hidden compartments and clever use of dead spaces keep the home looking clean and uncluttered.
                            </p>
                            <div className="blog-checklist">
                                {['Under-stair storage drawers and cabinets', 'Recessed wall niches for display and storage', 'Furniture with hidden compartments', 'Floor-to-ceiling built-ins that look like walls', 'Toe-kick drawers in kitchen and bathroom'].map((item, i) => (
                                    <div key={i} className="blog-checklist__item">
                                        <div className="blog-checklist__icon"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg></div>
                                        <span className="blog-checklist__text">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="blog-image-wrap" style={{ height: '480px' }}>
                            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&q=80" alt="Hidden Storage Design" />
                        </div>
                    </div>
                </section>

                <div className="blog-stats-strip" style={{ marginBottom: '5rem' }}>
                    {[{ number: '6+', label: 'Space Solutions' }, { number: '300+', label: 'Compact Homes Designed' }, { number: '5yr', label: 'Service Warranty' }, { number: '4-8wk', label: 'Avg. Completion' }].map((stat, i) => (
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
                    <h2 className="blog-cta-section__title">Maximise Your <em style={{ fontStyle: 'italic', color: '#c9a96e' }}>Living Space</em></h2>
                    <p className="blog-cta-section__subtitle">Let our experts design clever space-saving solutions that make your compact home feel open, beautiful and perfectly organised.</p>
                    <Link to="/contact-us" className="blog-cta-section__btn">Get a Free Consultation <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg></Link>
                </div>
            </div>
        </div>
    );
};

export default SpaceSaving;
