import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './BlogArticle.css';
import dcHomeTours from '../../assets/blogs/DC Home Tours.jpg';
const tours = [
    {
        title: 'The Sharma Residence',
        location: 'South Delhi',
        area: '2,400 sq ft',
        style: 'Modern Luxury',
        duration: '10 weeks',
        image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=900&q=80',
        highlights: ['Custom walnut wood panelling', 'Integrated home automation', 'Bespoke modular kitchen', 'Spa-inspired master bathroom'],
        desc: 'A stunning transformation of a South Delhi apartment into a modern luxury home with custom millwork, premium finishes, and seamless smart home integration.',
    },
    {
        title: 'The Kapoor Villa',
        location: 'Gurugram',
        area: '4,800 sq ft',
        style: 'Contemporary Classic',
        duration: '16 weeks',
        image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=900&q=80',
        highlights: ['Double-height living room', 'Italian marble flooring', 'Custom art installations', 'Landscaped terrace garden'],
        desc: 'A grand villa in Gurugram designed with a contemporary classic aesthetic - timeless elegance meets modern comfort across four floors of meticulously crafted spaces.',
    },
    {
        title: 'The Mehta Apartment',
        location: 'Noida',
        area: '1,800 sq ft',
        style: 'Scandinavian Minimal',
        duration: '8 weeks',
        image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=900&q=80',
        highlights: ['Maximized natural light', 'Clever space-saving solutions', 'Warm wood and white palette', 'Multifunctional furniture'],
        desc: 'A compact Noida apartment transformed into a bright, airy Scandinavian-inspired home - proving that great design is not about size, but about thoughtful choices.',
    },
    {
        title: 'The Agarwal Penthouse',
        location: 'Central Delhi',
        area: '3,600 sq ft',
        style: 'Art Deco Luxury',
        duration: '14 weeks',
        image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=900&q=80',
        highlights: ['Rooftop entertainment terrace', 'Custom brass and velvet accents', 'Statement wine cellar', 'Private home cinema'],
        desc: 'A breathtaking penthouse in Central Delhi designed with Art Deco luxury - bold geometric patterns, rich materials, and dramatic lighting create an unforgettable living experience.',
    },
];

const HomeTours = () => {
    const [activeSection, setActiveSection] = useState('intro');
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

    return (
        <div className="blog-page">
            <div className="blog-hero">
                <img src={dcHomeTours} alt="Home Tours" className="blog-hero__image" />
                <div className="blog-hero__overlay">
                    <div className="blog-hero__content">
                        <h1 className="blog-hero__title">Step Inside <em>Real Homes</em> Designed by Kryoss</h1>
                        <p className="blog-hero__subtitle">Exclusive tours of real homes designed by our team - from compact apartments to grand villas across India.</p>
                        <button onClick={() => scrollTo('tours')} className="blog-hero__cta" style={{ border: 'none', cursor: 'pointer' }}>
                            Explore Tours <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                        </button>
                    </div>
                </div>
                <div className="blog-hero__scroll"><div className="blog-hero__scroll-line" /><span>Scroll</span></div>
            </div>

            <div className="blog-body">
                {/* STATS */}
                <div className="blog-stats-strip" style={{ marginTop: '4rem' }}>
                    {[
                        { number: '500+', label: 'Homes Designed' },
                        { number: '10+', label: 'Years Experience' },
                        { number: '4', label: 'Featured Tours' },
                        { number: '100%', label: 'Client Satisfaction' },
                    ].map((stat, i) => (
                        <div key={i} className="blog-stat">
                            <div className="blog-stat__number">{stat.number}</div>
                            <div className="blog-stat__label">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* TOURS */}
                <section id="tours" ref={reg('tours')} data-section="tours" style={{ marginTop: '5rem', marginBottom: '5rem', scrollMarginTop: '6rem' }}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <div className="section-label" style={{ justifyContent: 'center' }}><span style={{ background: 'var(--kr-red)', display: 'block', width: '20px', height: '1.5px' }}></span>Featured Tours</div>
                        <h2 className="blog-section-title">Our Most <em>Celebrated Projects</em></h2>
                        <p className="blog-section-subtitle" style={{ margin: '0 auto' }}>Step inside these real homes and discover the design stories behind them.</p>
                    </div>

                    {tours.map((tour, i) => (
                        <div key={i} className={`blog-split${i % 2 !== 0 ? ' blog-split--reverse' : ''}`} style={{ marginBottom: '5rem' }}>
                            <div>
                                <div className="section-label"><span style={{ background: 'var(--kr-red)', display: 'block', width: '20px', height: '1.5px' }}></span>{tour.style}</div>
                                <h2 className="blog-section-title">{tour.title}</h2>
                                <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
                                    {[
                                        { label: 'ðŸ" Location', value: tour.location },
                                        { label: 'ðŸ" Area', value: tour.area },
                                        { label: 'â±ï¸ Duration', value: tour.duration },
                                    ].map((detail, j) => (
                                        <div key={j} style={{ background: 'var(--kr-light)', borderRadius: '12px', padding: '0.75rem 1.25rem', border: '1px solid var(--kr-border)' }}>
                                            <div style={{ fontSize: '0.75rem', color: 'var(--kr-slate-4)', fontWeight: 600, marginBottom: '0.2rem' }}>{detail.label}</div>
                                            <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--kr-slate)' }}>{detail.value}</div>
                                        </div>
                                    ))}
                                </div>
                                <p style={{ fontSize: '1.05rem', color: 'var(--kr-slate-3)', lineHeight: 1.8, marginBottom: '1.5rem' }}>{tour.desc}</p>
                                <div className="blog-checklist">
                                    {tour.highlights.map((h, j) => (
                                        <div key={j} className="blog-checklist__item">
                                            <div className="blog-checklist__icon"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg></div>
                                            <span className="blog-checklist__text">{h}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="blog-image-wrap" style={{ height: '500px' }}>
                                <img src={tour.image} alt={tour.title} />
                            </div>
                        </div>
                    ))}
                </section>

                {/* CTA */}
                <div className="blog-cta-section" style={{ marginBottom: '4rem' }}>
                    <h2 className="blog-cta-section__title">Ready to Create Your Own <em style={{ fontStyle: 'italic', color: '#c9a96e' }}>Dream Home?</em></h2>
                    <p className="blog-cta-section__subtitle">Let our team design a home that tells your unique story - beautifully and functionally.</p>
                    <Link to="/contact" className="blog-cta-section__btn">
                        Get a Free Consultation
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HomeTours;
