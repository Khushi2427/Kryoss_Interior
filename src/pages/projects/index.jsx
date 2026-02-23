import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../blogs/BlogArticle.css';

import hero from '../../assets/recent/hero.jpg';
import bhanu from '../../assets/recent/bhanu.png';
import ruban from '../../assets/recent/ruban.png';
import minimalist from '../../assets/recent/minimalist.png';
import threebhk from '../../assets/recent/3bhk.png';
import Fourbhk from '../../assets/recent/4bhk.png';
import luxury from '../../assets/recent/luxury.png';
import transformation from '../../assets/recent/transformation.png';

const projects = [
    {
        id: 1, title: "Bhanu's Hyderabad Villa", tag: 'Villa', location: 'Hyderabad',
        image: bhanu,
        description: 'Modern interiors with a touch of luxury, featuring a spacious living area and a custom modular kitchen.',
        area: '3,200 sq ft', duration: '14 weeks', style: 'Contemporary Luxury'
    },
    {
        id: 2, title: "Mr. Ruban Prasanth's 2BHK", tag: '2BHK', location: 'Coimbatore',
        image: ruban,
        description: 'Earthy home interiors with functional furniture and warm lighting that creates a cozy, welcoming atmosphere.',
        area: '1,100 sq ft', duration: '8 weeks', style: 'Warm Minimalist'
    },
    {
        id: 3, title: '3BHK Bren Imperia', tag: '3BHK', location: 'Bengaluru',
        image: threebhk,
        description: 'A seamless blend of contemporary design and comfort for a growing family with three distinct bedrooms.',
        area: '1,800 sq ft', duration: '12 weeks', style: 'Modern Family'
    },
    {
        id: 4, title: 'Spacious 4BHK Apartment', tag: '4BHK', location: 'Mumbai',
        image: Fourbhk,
        description: 'Sophisticated design with premium finishes and smart storage solutions across four beautifully designed rooms.',
        area: '2,400 sq ft', duration: '16 weeks', style: 'Premium Modern'
    },
    {
        id: 5, title: 'Minimalist Studio', tag: 'Studio', location: 'Pune',
        image: minimalist,
        description: 'Clever use of space with multifunctional furniture and clean lines that make every square foot count.',
        area: '450 sq ft', duration: '5 weeks', style: 'Minimalist'
    },
    {
        id: 6, title: 'Luxury Penthouse', tag: 'Penthouse', location: 'Chennai',
        image: luxury,
        description: 'Grand interiors with bespoke furniture, statement lighting and panoramic city views from every room.',
        area: '4,500 sq ft', duration: '20 weeks', style: 'Ultra Luxury'
    },
];

const Projects = () => {
    const [activeSection, setActiveSection] = useState('hero');
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

    const navSections = ['hero', 'projects', 'cta'];

    return (
        <div className="blog-page" style={{ backgroundColor: '#fff' }}>
            {/* Hero */}
            <div className="blog-hero" ref={reg('hero')} data-section="hero">
                <img src={hero} alt="Recent Projects" className="blog-hero__image" />
                <div className="blog-hero__overlay">
                    <div className="blog-hero__content">

                        <h1 className="blog-hero__title">Spaces We've <em>Transformed</em></h1>
                        <p className="blog-hero__subtitle">A curated selection of our finest interior design projects - from compact studios to grand villas across India.</p>
                        <button onClick={() => scrollTo('projects')} className="blog-hero__cta" style={{ border: 'none', cursor: 'pointer' }}>
                            View Projects <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
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
                    {[{ number: '600+', label: 'Projects Delivered' }, { number: '15+', label: 'Cities Across India' }, { number: '98%', label: 'Client Satisfaction' }, { number: '5yr', label: 'Service Warranty' }].map((stat, i) => (
                        <div key={i} className="blog-stat">
                            <div className="blog-stat__number">{stat.number}</div>
                            <div className="blog-stat__label">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Projects Grid */}
                <section ref={reg('projects')} data-section="projects" id="projects" style={{ marginBottom: '5rem', scrollMarginTop: '6rem' }}>
                    <div className="section-label"><span style={{ background: 'var(--kr-red)', display: 'block', width: '20px', height: '1.5px' }}></span>Portfolio</div>
                    <h2 className="blog-section-title" style={{ marginBottom: '2.5rem' }}>Recent <em>Projects</em></h2>

                    <div className="projects-grid">
                        {projects.map((project) => (
                            <div key={project.id} style={{
                                background: '#f8f9fa',
                                border: '1px solid #eee',
                                borderRadius: '8px',
                                overflow: 'hidden',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
                            }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.transform = 'translateY(-6px)';
                                    e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.1)';
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.05)';
                                }}
                            >
                                <div style={{ height: '260px', overflow: 'hidden', position: 'relative' }}>
                                    <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                                        onMouseEnter={e => e.target.style.transform = 'scale(1.06)'}
                                        onMouseLeave={e => e.target.style.transform = 'scale(1)'}
                                    />
                                    <div style={{ position: 'absolute', top: '1rem', left: '1rem', display: 'flex', gap: '0.5rem' }}>
                                        <span style={{ background: 'var(--kr-red)', color: '#fff', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', padding: '0.4rem 0.8rem' }}>{project.tag}</span>
                                    </div>
                                    <div style={{ position: 'absolute', bottom: '1rem', right: '1rem', background: 'rgba(255,255,255,0.9)', color: '#333', fontSize: '0.75rem', padding: '0.4rem 0.8rem', display: 'flex', alignItems: 'center', gap: '0.4rem', borderRadius: '4px', fontWeight: 500, boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                                        {project.location}
                                    </div>
                                </div>
                                <div style={{ padding: '1.75rem' }}>
                                    <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '1.4rem', fontWeight: 700, color: '#1a1a1a', marginBottom: '0.75rem', lineHeight: 1.3 }}>{project.title}</h3>
                                    <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.7, marginBottom: '1.5rem' }}>{project.description}</p>
                                    <div style={{ display: 'flex', gap: '1rem', borderTop: '1px solid #eee', paddingTop: '1.25rem' }}>
                                        {[{ label: 'Area', value: project.area }, { label: 'Duration', value: project.duration }, { label: 'Style', value: project.style }].map((detail, i) => (
                                            <div key={i} style={{ flex: 1 }}>
                                                <div style={{ fontSize: '0.7rem', color: '#999', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.3rem', fontWeight: 600 }}>{detail.label}</div>
                                                <div style={{ fontSize: '0.85rem', color: '#333', fontWeight: 700 }}>{detail.value}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Wide image */}
                <div className="blog-wide-image" style={{ marginBottom: '5rem' }}>
                    <img src={transformation} alt="Kryoss Interior Projects" />
                    <div className="blog-wide-image__caption">Every project is a story of transformation • Kryoss Interior</div>
                </div>

                {/* Process */}
                <section style={{ marginBottom: '5rem' }}>
                    <div className="section-label"><span style={{ background: 'var(--kr-red)', display: 'block', width: '20px', height: '1.5px' }}></span>Our Process</div>
                    <h2 className="blog-section-title" style={{ marginBottom: '2.5rem' }}>How We <em>Work</em></h2>
                    <div className="process-grid">
                        {[
                            { step: '01', title: 'Consultation', desc: 'We begin with a free in-depth consultation to understand your vision, lifestyle and budget.' },
                            { step: '02', title: '3D Design', desc: 'Our designers create detailed 3D visualizations so you can see your space before work begins.' },
                            { step: '03', title: 'Production', desc: 'All furniture and fittings are manufactured in our quality-controlled facility.' },
                            { step: '04', title: 'Installation', desc: 'Our expert installation team completes the project on time, with zero compromise on quality.' },
                        ].map((item, i) => (
                            <div key={i} style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.08)', padding: '2rem', borderTop: '3px solid #c41e3a', borderRadius: '4px' }}>
                                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2.5rem', fontWeight: 700, color: 'rgba(196,30,58,0.6)', marginBottom: '0.75rem', lineHeight: 1 }}>{item.step}</div>
                                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#1a1a1a', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>{item.title}</h3>
                                <p style={{ fontSize: '0.9rem', color: '#4b5563', lineHeight: 1.7 }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <div ref={reg('cta')} data-section="cta" className="blog-cta-section" style={{ marginBottom: '4rem' }}>
                    <h2 className="blog-cta-section__title">Ready to Start Your <em style={{ fontStyle: 'italic', color: '#c9a96e' }}>Project?</em></h2>
                    <p className="blog-cta-section__subtitle">Join 600+ happy homeowners who trusted Kryoss Interior to transform their space. Book your free consultation today.</p>
                    <Link to="/contact-us" className="blog-cta-section__btn">Book a Free Consultation <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg></Link>
                </div>
            </div>
        </div>
    );
};

export default Projects;
