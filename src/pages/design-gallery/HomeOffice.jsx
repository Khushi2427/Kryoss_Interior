import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../blogs/BlogArticle.css';
import homeOffice from '../../assets/design-gallery/home-office.jpg';

const ideas = [
    { icon: '', title: 'Executive Desk Setup', desc: 'A large L-shaped or executive desk with cable management and monitor arms for a professional, productive workspace.', image: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&q=80' },
    { icon: '', title: 'Built-In Bookshelves', desc: 'Floor-to-ceiling bookshelves add character, storage and a sense of gravitas to any home office.', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80' },
    { icon: '', title: 'Natural Light Focus', desc: 'Position your desk near a window to maximize natural light, boost mood and reduce eye strain during long work sessions.', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80' },
    { icon: '', title: 'Acoustic Panels', desc: 'Fabric acoustic panels reduce echo and background noise for clearer video calls and better concentration.', image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&q=80' },
    { icon: '', title: 'Biophilic Elements', desc: 'Plants, natural materials and views of greenery reduce stress and improve focus in home office environments.', image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80' },
    { icon: '', title: 'Task Lighting', desc: 'A quality desk lamp with adjustable colour temperature reduces eye strain and keeps you alert throughout the day.', image: 'https://images.unsplash.com/photo-1513506003901-1e6a35f7a0b4?w=600&q=80' },
];

const faqs = [
    { q: 'How do I set up an ergonomic home office?', a: 'Position your monitor at eye level, keep your keyboard and mouse at elbow height, and use a chair with lumbar support. Your feet should rest flat on the floor. Take regular breaks to stretch.' },
    { q: 'What is the best colour for a home office?', a: 'Blue and green tones promote focus and calm. White and light grey create a clean, professional feel. Avoid overly stimulating colours like bright red or orange for a primary work environment.' },
    { q: 'How do I soundproof a home office?', a: 'Use heavy curtains, area rugs, acoustic panels and door seals to reduce noise. Bookshelves filled with books also act as effective sound absorbers. A white noise machine can help mask remaining sounds.' },
    { q: 'How much space do I need for a home office?', a: 'A dedicated home office needs at least 70-100 sq ft for a comfortable setup. However, even a 4x6 ft alcove or nook can be transformed into a functional workspace with smart design.' },
];

const HomeOffice = () => {
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
        { id: 'ideas', label: 'Office Ideas', emoji: '' },
        { id: 'styles', label: 'Office Styles', emoji: '' },
        { id: 'faq', label: 'FAQs', emoji: '' },
    ];

    return (
        <div className="blog-page">
            <div className="blog-hero">
                <img src={homeOffice} alt="Home Office Design" className="blog-hero__image" />
                <div className="blog-hero__overlay">
                    <div className="blog-hero__content">
                        <h1 className="blog-hero__title">Your <em>Productivity</em> Sanctuary</h1>
                        <p className="blog-hero__subtitle">Design a home office that inspires focus, creativity and professional excellence - every working day.</p>
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
                                <div className="section-label" style={{ color: 'rgba(255,255,255,0.6)' }}><span style={{ background: 'rgba(255,255,255,0.5)', display: 'block', width: '20px', height: '1.5px' }}></span>Home Office</div>
                                <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1.8rem,3vw,2.5rem)', fontWeight: 600, color: '#fff', marginBottom: '1.25rem', lineHeight: 1.2 }}>Where Great Work Begins</h2>
                                <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.72)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                                    A well-designed home office boosts productivity, reduces stress and creates a clear boundary between work and personal life. We design spaces that help you do your best work.
                                </p>
                                <div className="blog-quote" style={{ background: 'rgba(255,255,255,0.07)', borderColor: '#c9a96e' }}>
                                    <p className="blog-quote__text" style={{ color: 'rgba(255,255,255,0.85)' }}>At <strong style={{ color: '#c9a96e' }}>Kryoss Interior</strong>, we design home offices that are as impressive as any corporate headquarters.</p>
                                </div>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <div className="blog-intro__stat">40%</div>
                                <p className="blog-intro__stat-label">Productivity increase reported in well-designed home offices</p>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="blog-wide-image" style={{ marginBottom: '5rem' }}>
                    <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80" alt="Home Office - Kryoss Interior" />
                    <div className="blog-wide-image__caption">Executive Home Office Design â€¢ Kryoss Interior</div>
                </div>

                <section ref={reg('ideas')} data-section="ideas" id="ideas" style={{ marginBottom: '5rem', scrollMarginTop: '6rem' }}>
                    <div className="section-label"><span style={{ background: 'var(--kr-red)', display: 'block', width: '20px', height: '1.5px' }}></span>Office Ideas</div>
                    <h2 className="blog-section-title" style={{ marginBottom: '2.5rem' }}>Home Office <em>Design Ideas</em></h2>
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
                            <div className="section-label"><span style={{ background: 'var(--kr-red)', display: 'block', width: '20px', height: '1.5px' }}></span>Executive Office</div>
                            <h2 className="blog-section-title">The <em>Executive Home Office</em></h2>
                            <p style={{ fontSize: '1.05rem', color: 'var(--kr-slate-3)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                                An executive home office commands respect and inspires confidence - perfect for senior professionals, entrepreneurs and those who frequently host virtual meetings.
                            </p>
                            <div className="blog-checklist">
                                {['Large executive desk with cable management', 'Leather or premium ergonomic chair', 'Built-in bookshelves for display and storage', 'Professional video call background setup', 'Dimmable lighting for day and evening work'].map((item, i) => (
                                    <div key={i} className="blog-checklist__item">
                                        <div className="blog-checklist__icon"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg></div>
                                        <span className="blog-checklist__text">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="blog-image-wrap" style={{ height: '480px' }}>
                            <img src="https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=900&q=80" alt="Executive Home Office" />
                        </div>
                    </div>

                    <div className="blog-split blog-split--reverse" style={{ marginTop: '4rem' }}>
                        <div>
                            <div className="section-label"><span style={{ background: 'var(--kr-red)', display: 'block', width: '20px', height: '1.5px' }}></span>Creative Studio</div>
                            <h2 className="blog-section-title">The <em>Creative Studio</em></h2>
                            <p style={{ fontSize: '1.05rem', color: 'var(--kr-slate-3)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                                A creative studio home office is designed to inspire - with flexible workspaces, display areas for inspiration and a layout that supports both focused work and creative thinking.
                            </p>
                            <div className="blog-checklist">
                                {['Flexible, reconfigurable workspace', 'Inspiration boards and display walls', 'Ample natural light and colour', 'Storage for materials and equipment', 'Comfortable lounge area for ideation'].map((item, i) => (
                                    <div key={i} className="blog-checklist__item">
                                        <div className="blog-checklist__icon"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg></div>
                                        <span className="blog-checklist__text">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="blog-image-wrap" style={{ height: '480px' }}>
                            <img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=900&q=80" alt="Creative Studio Office" />
                        </div>
                    </div>
                </section>

                <div className="blog-stats-strip" style={{ marginBottom: '5rem' }}>
                    {[{ number: '6+', label: 'Office Styles' }, { number: '250+', label: 'Home Offices Designed' }, { number: '5yr', label: 'Service Warranty' }, { number: '2-4wk', label: 'Avg. Completion' }].map((stat, i) => (
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
                    <h2 className="blog-cta-section__title">Design Your Perfect <em style={{ fontStyle: 'italic', color: '#c9a96e' }}>Home Office</em></h2>
                    <p className="blog-cta-section__subtitle">Let our experts create a home office that maximizes your productivity and reflects your professional image.</p>
                    <Link to="/contact-us" className="blog-cta-section__btn">Get a Free Consultation <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg></Link>
                </div>
            </div>
        </div>
    );
};

export default HomeOffice;
