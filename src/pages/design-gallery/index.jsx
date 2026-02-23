import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../blogs/BlogArticle.css';
import main from '../../assets/design-gallery/main.jpg';
import oneBhk from '../../assets/design-gallery/1-bhk.jpg';
import twoBhk from '../../assets/design-gallery/2-bhk.jpg';
import threeBhk from '../../assets/design-gallery/3-bhk.jpg';
import bathroomDesigns from '../../assets/design-gallery/bathroom-designs.jpg';
import bedroomDesign from '../../assets/design-gallery/bedroom-design.jpg';
import customiseKitchen from '../../assets/design-gallery/customise-kitchen.jpg';
import diningRoom from '../../assets/design-gallery/dining-room.jpg';
import homeOffice from '../../assets/design-gallery/home-office.jpg';
import kidsBedroom from '../../assets/design-gallery/kids-bedroom.jpg';
import livingRoom from '../../assets/design-gallery/living-room.jpg';

import modularKitchen from '../../assets/design-gallery/moduler-kitchen.jpg';
import spaceSaving from '../../assets/design-gallery/space-saving.jpg';
import wardrobesDesign from '../../assets/design-gallery/wardrobes-design.jpg';
import main1 from '../../assets/design-gallery/main1.jpeg';



const collections = [
    { title: 'Modular Kitchens', link: '/design-gallery/modular-kitchen-designs', image: modularKitchen, tag: 'Kitchen', desc: '5+ layouts, smart storage, premium finishes' },
    { title: 'Bedroom Designs', link: '/design-gallery/bedroom-designs', image: bedroomDesign, tag: 'Bedroom', desc: 'Master suites, kids rooms, guest bedrooms' },
    { title: 'Living Room Designs', link: '/design-gallery/living-room-designs', image: livingRoom, tag: 'Living Room', desc: 'Contemporary, classic and eclectic styles' },
    { title: 'Wardrobe Designs', link: '/design-gallery/wardrobe-designs', image: wardrobesDesign, tag: 'Wardrobe', desc: 'Sliding, walk-in and custom wardrobe solutions' },
    { title: 'Bathroom Designs', link: '/design-gallery/bathroom-designs', image: bathroomDesigns, tag: 'Bathroom', desc: 'Spa-inspired master and compact bathrooms' },
    { title: 'Dining Room Designs', link: '/design-gallery/dining-room-designs', image: diningRoom, tag: 'Dining', desc: 'Formal dining, open-plan and breakfast nooks' },
    { title: 'Home Office Designs', link: '/design-gallery/home-office-designs', image: homeOffice, tag: 'Office', desc: 'Executive offices and creative studios' },
    { title: 'Kids Bedroom Designs', link: '/design-gallery/kids-bedroom-designs', image: kidsBedroom, tag: 'Kids', desc: 'Age-appropriate, fun and functional spaces' },
    { title: 'Space Saving Designs', link: '/design-gallery/space-saving-designs', image: spaceSaving, tag: 'Space Saving', desc: 'Murphy beds, hidden storage and smart solutions' },
    { title: '1-BHK Interior Designs', link: '/design-gallery/1-bhk-interior-designs', image: oneBhk, tag: '1BHK', desc: 'Compact, smart and beautifully designed' },
    { title: '2-BHK Interior Designs', link: '/design-gallery/2-bhk-interior-designs', image: twoBhk, tag: '2BHK', desc: 'The perfect family home, fully designed' },
    { title: '3-BHK Interior Designs', link: '/design-gallery/3-bhk-interior-designs', image: threeBhk, tag: '3BHK', desc: 'Luxury living, fully realised' },
    { title: 'Customise Your Kitchen', link: '/design-gallery/customise-your-kitchen', image: customiseKitchen, tag: 'Custom', desc: 'Bespoke kitchens designed for you' },
];

const DesignGallery = () => {
    const [activeSection, setActiveSection] = useState('hero');
    const [filter, setFilter] = useState('All');
    const refs = useRef({});
    const reg = (id) => (el) => { if (el) refs.current[id] = el; };

    const filters = ['All', 'Kitchen', 'Bedroom', 'Living Room', 'Bathroom', 'BHK'];
    const filtered = filter === 'All' ? collections : filter === 'BHK'
        ? collections.filter(c => c.tag.includes('BHK'))
        : collections.filter(c => c.tag.toLowerCase().includes(filter.toLowerCase()));

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

    const navSections = ['hero', 'collections', 'why', 'cta'];

    return (
        <div className="blog-page">
            {/* Hero */}
            <div className="blog-hero" ref={reg('hero')} data-section="hero">
                <img src={main} alt="Design Gallery" className="blog-hero__image" />
                <div className="blog-hero__overlay">
                    <div className="blog-hero__content">

                        <h1 className="blog-hero__title">Explore Our <em>Design Collections</em></h1>
                        <p className="blog-hero__subtitle">Discover the perfect blend of aesthetics and functionality - curated design collections for every room and every home type.</p>
                        <button onClick={() => scrollTo('collections')} className="blog-hero__cta" style={{ border: 'none', cursor: 'pointer' }}>
                            Browse Collections <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                        </button>
                    </div>
                </div>
                <div className="blog-hero__scroll"><div className="blog-hero__scroll-line" /><span>Scroll</span></div>
            </div>

            {/* Nav dots */}
            <nav className="blog-nav-dots">
                {navSections.map(id => <button key={id} className={`blog-nav-dot${activeSection === id ? ' active' : ''}`} onClick={() => scrollTo(id)} aria-label={id} />)}
            </nav>

            <div className="blog-body">
                {/* Stats */}
                <div className="blog-stats-strip" style={{ marginBottom: '5rem' }}>
                    {[{ number: '13+', label: 'Design Collections' }, { number: '600+', label: 'Projects Delivered' }, { number: '5yr', label: 'Service Warranty' }, { number: '45day', label: 'Delivery Guarantee' }].map((stat, i) => (
                        <div key={i} className="blog-stat">
                            <div className="blog-stat__number">{stat.number}</div>
                            <div className="blog-stat__label">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Collections */}
                <section ref={reg('collections')} data-section="collections" id="collections" style={{ marginBottom: '5rem', scrollMarginTop: '6rem' }}>
                    <div className="section-label"><span style={{ background: 'var(--kr-red)', display: 'block', width: '20px', height: '1.5px' }}></span>Collections</div>
                    <h2 className="blog-section-title" style={{ marginBottom: '2rem' }}>Design Collections for <em>Every Home</em></h2>

                    {/* Filter tabs */}
                    <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
                        {filters.map(f => (
                            <button key={f} onClick={() => setFilter(f)} style={{
                                padding: '0.5rem 1.25rem', fontSize: '0.8rem', fontWeight: 600,
                                letterSpacing: '1px', textTransform: 'uppercase', cursor: 'pointer',
                                border: `1px solid ${filter === f ? '#c41e3a' : 'rgba(255,255,255,0.15)'}`,
                                background: filter === f ? '#c41e3a' : 'transparent',
                                color: filter === f ? '#fff' : 'rgba(255,255,255,0.6)',
                                transition: 'all 0.2s ease',
                            }}>
                                {f}
                            </button>
                        ))}
                    </div>

                    {/* Grid */}
                    <div className="collection-grid">
                        {filtered.map((item, idx) => (
                            <Link key={idx} to={item.link} style={{ textDecoration: 'none', display: 'block', position: 'relative', height: '340px', overflow: 'hidden', borderRadius: '4px' }}
                                onMouseEnter={e => { e.currentTarget.querySelector('img').style.transform = 'scale(1.08)'; }}
                                onMouseLeave={e => { e.currentTarget.querySelector('img').style.transform = 'scale(1)'; }}
                            >
                                <img src={item.image} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease', display: 'block' }} />
                                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.1) 100%)' }} />
                                <div style={{ position: 'absolute', top: '1rem', left: '1rem' }}>
                                    <span style={{ background: 'rgba(196,30,58,0.9)', color: '#fff', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', padding: '0.25rem 0.6rem' }}>{item.tag}</span>
                                </div>
                                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1.5rem' }}>
                                    <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.3rem', fontWeight: 600, color: '#fff', marginBottom: '0.4rem', lineHeight: 1.2 }}>{item.title}</h3>
                                    <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)', marginBottom: '0.75rem' }}>{item.desc}</p>
                                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#c9a96e', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.5px' }}>
                                        Explore <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* Wide image */}
                <div className="blog-wide-image" style={{ marginBottom: '5rem' }}>
                    <img src={main1} alt="Kryoss Interior Design Gallery" />
                    <div className="blog-wide-image__caption">Every design tells a story • Kryoss Interior</div>
                </div>

                {/* Why section */}
                <section ref={reg('why')} data-section="why" id="why" style={{ marginBottom: '5rem', scrollMarginTop: '6rem' }}>
                    <div className="blog-split">
                        <div>
                            <div className="section-label"><span style={{ background: 'var(--kr-red)', display: 'block', width: '20px', height: '1.5px' }}></span>Why Kryoss Interior</div>
                            <h2 className="blog-section-title">Why Personalised Design <em>Matters</em></h2>
                            <p style={{ fontSize: '1.05rem', color: 'var(--kr-slate-3)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                                Every home is unique and deserves a design that reflects your personality and lifestyle. At Kryoss Interior, we craft spaces that are both beautiful and deeply functional.
                            </p>
                            <div className="blog-checklist">
                                {['Transform your living space completely', 'Maximize functionality and storage', 'Create spaces that reflect your style', 'Increase property value significantly', 'Expert installation and quality assurance', '5-year service warranty on all work'].map((item, i) => (
                                    <div key={i} className="blog-checklist__item">
                                        <div className="blog-checklist__icon"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg></div>
                                        <span className="blog-checklist__text">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="blog-image-wrap" style={{ height: '520px' }}>
                            <img src={main} alt="Kryoss Interior Design" />
                        </div>
                    </div>
                </section>

                {/* Design Philosophy */}
                <section style={{ marginBottom: '5rem' }}>
                    <div className="section-label"><span style={{ background: 'var(--kr-red)', display: 'block', width: '20px', height: '1.5px' }}></span>Our Philosophy</div>
                    <h2 className="blog-section-title" style={{ marginBottom: '2.5rem' }}>Key Elements of Our <em>Design Philosophy</em></h2>
                    <div className="philosophy-grid">
                        {[
                            { icon: '', title: 'Personalised Consultation', desc: 'We begin with a deep understanding of your vision, lifestyle and budget before a single line is drawn.' },
                            { icon: '', title: 'Quality Materials', desc: 'We source only premium, certified materials - eco-friendly options available for the conscious homeowner.' },
                            { icon: '', title: 'Expert Craftsmanship', desc: 'Our team of skilled designers, architects and installers brings decades of combined experience to every project.' },
                            { icon: '', title: 'On-Time Delivery', desc: 'We commit to a 45-day delivery guarantee with full project tracking and transparent timelines.' },
                        ].map((item, i) => (
                            <div key={i} style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.08)', padding: '2rem', borderTop: '3px solid #c41e3a', borderRadius: '4px' }}>
                                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{item.icon}</div>
                                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#1a1a1a', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{item.title}</h3>
                                <p style={{ fontSize: '0.9rem', color: '#4b5563', lineHeight: 1.7 }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <div ref={reg('cta')} data-section="cta" className="blog-cta-section" style={{ marginBottom: '4rem' }}>
                    <h2 className="blog-cta-section__title">Ready to Transform Your <em style={{ fontStyle: 'italic', color: '#c9a96e' }}>Space?</em></h2>
                    <p className="blog-cta-section__subtitle">Book a free consultation with our design experts. Get personalised recommendations and a detailed estimate for your dream home.</p>
                    <Link to="/contact-us" className="blog-cta-section__btn">Book Free Consultation <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg></Link>
                </div>
            </div>
        </div>
    );
};

export default DesignGallery;
