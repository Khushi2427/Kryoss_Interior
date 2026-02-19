import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import '../blogs/BlogArticle.css';
import { Briefcase, UserPlus, Star, ChevronRight, PenTool, Layout, Phone, Settings } from 'lucide-react';

const Careers = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="blog-page">
            <Navbar />

            <div className="blog-hero">
                <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
                    alt="Kryoss Interior Team"
                    className="blog-hero__image"
                />
                <div className="blog-hero__overlay">
                    <div className="blog-hero__content">
                        <span className="blog-hero__tag">Careers</span>
                        <h1 className="blog-hero__title">Grow With Purpose <br /><em style={{ color: 'var(--kr-gold)' }}>Design With Impact</em></h1>
                        <p className="blog-hero__subtitle">
                            We don’t just build interiors — we build careers around clarity, responsibility, and growth. Join a team that values thoughtful design.
                        </p>
                    </div>
                </div>
            </div>

            <div className="blog-body">
                {/* Intro Split */}
                <div className="blog-split">
                    <div className="blog-image-wrap">
                        <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80" alt="Team Culture" />
                    </div>
                    <div>
                        <div className="section-label">Culture</div>
                        <h2 className="blog-section-title">Why Work <br /><em>With Us?</em></h2>
                        <p style={{ lineHeight: 1.8, color: 'var(--kr-slate-3)', marginBottom: '2rem' }}>
                            We believe a healthy work culture creates better results. We value consistency, ownership, and attention to detail over shortcuts.
                        </p>
                        <div className="blog-checklist">
                            {['Clear roles & structured processes', 'Real learning through live projects', 'Respect for timelines & quality', 'Supportive team environment'].map((item, i) => (
                                <div key={i} className="blog-checklist__item">
                                    <div className="blog-checklist__icon">
                                        <svg viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"></path></svg>
                                    </div>
                                    <span className="blog-checklist__text">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Open Roles */}
                <section style={{ marginBottom: '6rem' }}>
                    <div className="section-label">Opportunities</div>
                    <h2 className="blog-section-title" style={{ marginBottom: '3rem' }}>Roles You May <em style={{ color: 'var(--kr-red)' }}>Apply For</em></h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                        {[
                            { icon: <PenTool />, title: 'Interior Designers', desc: 'Concept to execution planning.' },
                            { icon: <Layout />, title: 'Junior Designers', desc: 'Assist in drafting and material selection.' },
                            { icon: <Settings />, title: 'Site Supervisors', desc: 'Oversee on-site execution quality.' },
                            { icon: <UserPlus />, title: 'Project Coordinators', desc: 'Manage timelines and client communication.' },
                            { icon: <Phone />, title: 'Sales Executives', desc: 'Client engagement and requirement understanding.' },
                            { icon: <Briefcase />, title: 'Backend Support', desc: 'Operations, costing, and procurement.' }
                        ].map((role, idx) => (
                            <div key={idx} className="blog-card" style={{ padding: '1.5rem' }}>
                                <div className="blog-card__icon" style={{ width: '40px', height: '40px', fontSize: '1.2rem', marginBottom: '1rem' }}>{role.icon}</div>
                                <h3 className="blog-card__title" style={{ fontSize: '1.1rem' }}>{role.title}</h3>
                                <p className="blog-card__desc" style={{ fontSize: '0.9rem' }}>{role.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Growth Section */}
                <div className="blog-dark-section">
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h2 className="blog-section-title" style={{ color: '#fff' }}>Growth & Learning</h2>
                        <p style={{ color: 'rgba(255,255,255,0.7)' }}>We support your professional journey.</p>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {['Process-based learning', 'Ownership of work', 'Exposure to real projects', 'Understanding full lifecycle'].map((g, j) => (
                            <div key={j} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{ background: 'var(--kr-red)', width: '10px', height: '10px', borderRadius: '50%' }}></div>
                                <span style={{ fontSize: '1.1rem', fontWeight: 500 }}>{g}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Apply CTA */}
                <div style={{ textAlign: 'center', margin: '4rem 0' }}>
                    <h3 className="blog-section-title" style={{ fontSize: '2rem' }}>Join the Team</h3>
                    <p style={{ color: 'var(--kr-slate-3)', maxWidth: '600px', margin: '0 auto 2rem' }}>
                        Share your resume and portfolio. If your skills align, we’d love to connect.
                    </p>
                    <a href="mailto:careers@kryossinterior.com" className="blog-hero__cta">
                        Apply via Email <ChevronRight size={18} />
                    </a>
                </div>

            </div>

            <Footer />
        </div>
    );
};

export default Careers;
