import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../blogs/BlogArticle.css';
import kidsBedroom from '../../assets/design-gallery/kids-bedroom.jpg';

const ideas = [
    { icon: '', title: 'Vibrant Colour Themes', desc: 'Bold, cheerful colours stimulate creativity and make the room feel fun and inviting for children of all ages.', image: 'https://images.unsplash.com/photo-1555212697-194d092e3b8f?w=600&q=80' },
    { icon: '', title: 'Space-Saving Bunk Beds', desc: 'Bunk beds with built-in storage, desks and play areas maximize floor space in shared or compact bedrooms.', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80' },
    { icon: '', title: 'Dedicated Study Zone', desc: 'A well-lit, ergonomic study area with ample storage for books and supplies supports learning and focus.', image: 'https://images.unsplash.com/photo-1497215842964-222b4bef97ed?w=600&q=80' },
    { icon: '', title: 'Smart Toy Storage', desc: 'Built-in cubbies, colourful bins and low shelves make it easy for children to organize and access their toys.', image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&q=80' },
    { icon: '', title: 'Theme-Based Designs', desc: 'From space adventures to enchanted forests, themed bedrooms spark imagination and make bedtime exciting.', image: 'https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?w=600&q=80' },
    { icon: '', title: 'Child-Safe Materials', desc: 'Non-toxic paints, rounded furniture edges and anti-tip fixtures ensure a safe environment for active children.', image: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?w=600&q=80' },
];

const faqs = [
    { q: 'What is the best colour scheme for a kids bedroom?', a: 'Bright, cheerful colours like yellow, sky blue and mint green work well for young children. For older kids and teens, muted tones with bold accents are popular.' },
    { q: 'How do I make a small kids bedroom feel bigger?', a: 'Use light colours, bunk beds or loft beds, wall-mounted storage and mirrors to create the illusion of space. Multi-functional furniture like storage ottomans also help.' },
    { q: 'What furniture is essential for a kids bedroom?', a: 'A comfortable bed with storage, a study desk with good lighting, a wardrobe with child-accessible lower sections and ample toy storage are the essentials.' },
    { q: 'How do I design a bedroom that grows with my child?', a: 'Choose neutral base colours and add personality through accessories that can be easily changed. Invest in adjustable furniture like height-adjustable desks and reconfigurable beds.' },
];

const KidsBedroom = () => {
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
        { id: 'styles', label: 'Age Groups', emoji: '' },
        { id: 'faq', label: 'FAQs', emoji: '' },
    ];

    return (
        <div className="blog-page">
            <div className="blog-hero">
                <img src={kidsBedroom} alt="Kids Bedroom Design" className="blog-hero__image" />
                <div className="blog-hero__overlay">
                    <div className="blog-hero__content">
                        <h1 className="blog-hero__title">Where <em>Imagination</em> Comes Alive</h1>
                        <p className="blog-hero__subtitle">Fun, safe and inspiring bedrooms that grow with your child - from toddler to teenager.</p>
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
                                <div className="section-label" style={{ color: 'rgba(255,255,255,0.6)' }}><span style={{ background: 'rgba(255,255,255,0.5)', display: 'block', width: '20px', height: '1.5px' }}></span>Kids Spaces</div>
                                <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1.8rem,3vw,2.5rem)', fontWeight: 600, color: '#fff', marginBottom: '1.25rem', lineHeight: 1.2 }}>A Space Where Imagination Comes Alive</h2>
                                <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.72)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                                    A child's bedroom is more than just a place to sleep - it is their world. A well-designed kids bedroom supports learning, play, creativity and rest in equal measure.
                                </p>
                                <div className="blog-quote" style={{ background: 'rgba(255,255,255,0.07)', borderColor: '#c9a96e' }}>
                                    <p className="blog-quote__text" style={{ color: 'rgba(255,255,255,0.85)' }}>At <strong style={{ color: '#c9a96e' }}>Kryoss Interior</strong>, we design kids bedrooms that are safe, fun and built to grow with your child.</p>
                                </div>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <div className="blog-intro__stat">12hrs</div>
                                <p className="blog-intro__stat-label">Children spend up to 12 hours a day in their bedroom - make it count</p>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="blog-wide-image" style={{ marginBottom: '5rem' }}>
                    <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80" alt="Kids Bedroom - Kryoss Interior" />
                    <div className="blog-wide-image__caption">Creative Kids Bedroom Design â€¢ Kryoss Interior</div>
                </div>

                <section ref={reg('ideas')} data-section="ideas" id="ideas" style={{ marginBottom: '5rem', scrollMarginTop: '6rem' }}>
                    <div className="section-label"><span style={{ background: 'var(--kr-red)', display: 'block', width: '20px', height: '1.5px' }}></span>Design Ideas</div>
                    <h2 className="blog-section-title" style={{ marginBottom: '2.5rem' }}>Kids Bedroom <em>Design Ideas</em></h2>
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
                            <div className="section-label"><span style={{ background: 'var(--kr-red)', display: 'block', width: '20px', height: '1.5px' }}></span>Young Children (3-8 yrs)</div>
                            <h2 className="blog-section-title">Playful Spaces for <em>Little Ones</em></h2>
                            <p style={{ fontSize: '1.05rem', color: 'var(--kr-slate-3)', lineHeight: 1.8, marginBottom: '1.5rem' }}>Young children need a safe, stimulating environment that encourages play and exploration. Bright colours, soft textures and accessible storage are key.</p>
                            <div className="blog-checklist">
                                {['Low beds with safety rails', 'Colourful, washable wall paint', 'Soft rugs for play areas', 'Open toy storage at child height', 'Chalkboard or whiteboard wall panel'].map((item, i) => (
                                    <div key={i} className="blog-checklist__item">
                                        <div className="blog-checklist__icon"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg></div>
                                        <span className="blog-checklist__text">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="blog-image-wrap" style={{ height: '480px' }}>
                            <img src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?w=900&q=80" alt="Young Children Bedroom" />
                        </div>
                    </div>

                    <div className="blog-split blog-split--reverse" style={{ marginTop: '4rem' }}>
                        <div>
                            <div className="section-label"><span style={{ background: 'var(--kr-red)', display: 'block', width: '20px', height: '1.5px' }}></span>Teens (13-18 yrs)</div>
                            <h2 className="blog-section-title">Cool Spaces for <em>Teenagers</em></h2>
                            <p style={{ fontSize: '1.05rem', color: 'var(--kr-slate-3)', lineHeight: 1.8, marginBottom: '1.5rem' }}>Teenagers need a bedroom that reflects their personality and supports both study and relaxation. Involve them in the design process for a space they truly love.</p>
                            <div className="blog-checklist">
                                {['Loft bed with study area underneath', 'Dedicated gaming or hobby corner', 'Full-length mirror and vanity area', 'Mood lighting with dimmable LEDs', 'Ample wardrobe with shoe storage'].map((item, i) => (
                                    <div key={i} className="blog-checklist__item">
                                        <div className="blog-checklist__icon"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg></div>
                                        <span className="blog-checklist__text">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="blog-image-wrap" style={{ height: '480px' }}>
                            <img src="https://images.unsplash.com/photo-1497215842964-222b4bef97ed?w=900&q=80" alt="Teen Bedroom Design" />
                        </div>
                    </div>
                </section>

                <div className="blog-stats-strip" style={{ marginBottom: '5rem' }}>
                    {[{ number: '6+', label: 'Design Themes' }, { number: '400+', label: 'Kids Rooms Designed' }, { number: '5yr', label: 'Service Warranty' }, { number: '3-5wk', label: 'Avg. Completion' }].map((stat, i) => (
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
                    <h2 className="blog-cta-section__title">Design Your Child's <em style={{ fontStyle: 'italic', color: '#c9a96e' }}>Dream Bedroom</em></h2>
                    <p className="blog-cta-section__subtitle">Let our experts create a safe, fun and beautiful bedroom that your child will love growing up in.</p>
                    <Link to="/contact-us" className="blog-cta-section__btn">Get a Free Consultation <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg></Link>
                </div>
            </div>
        </div>
    );
};

export default KidsBedroom;
