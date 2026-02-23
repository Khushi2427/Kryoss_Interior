import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import '../blogs/BlogArticle.css';
import { Share2, Briefcase, TrendingUp, Users, CheckCircle, Palette, ArrowRight } from 'lucide-react';

const BecomeDesignPartner = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="blog-page">
            <Navbar />

            <div className="blog-hero">
                <img
                    src="https://images.unsplash.com/photo-1628147366085-f8605d63f25c?auto=format&fit=crop&q=80"
                    alt="Design Partner Collaboration"
                    className="blog-hero__image"
                />
                <div className="blog-hero__overlay">
                    <div className="blog-hero__content">

                        <h1 className="blog-hero__title">Become a <br /><em style={{ color: 'var(--kr-gold)' }}>Design Partner</em></h1>
                        <p className="blog-hero__subtitle">
                            Collaborate. Create. Grow Together. Scale your work with better structure, smoother execution, and stronger backend support.
                        </p>
                    </div>
                </div>
            </div>

            <div className="blog-body">
                {/* Intro */}
                <div className="blog-intro">
                    <div className="blog-intro-grid">
                        <div>
                            <div className="section-label" style={{ color: '#fff' }}>Who Can Apply?</div>
                            <h2 className="blog-section-title" style={{ color: '#fff' }}>Focus on <em style={{ color: 'var(--kr-gold)' }}>Creativity</em>,<br /> We Handle the Rest.</h2>
                            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem', marginBottom: '2rem' }}>
                                We believe good designers should focus on design — not operational stress. This partnership is ideal for independent designers and studios looking for reliable execution support.
                            </p>
                            <div className="blog-checklist">
                                {['Independent Interior Designers', 'Small Design Studios', 'Freelance Designers', 'Architects exploring interiors'].map((item, i) => (
                                    <div key={i} className="blog-checklist__item" style={{ background: 'rgba(255,255,255,0.1)', border: 'none' }}>
                                        <div className="blog-checklist__icon" style={{ background: 'var(--kr-gold)' }}>
                                            <svg viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"></path></svg>
                                        </div>
                                        <span className="blog-checklist__text" style={{ color: '#fff' }}>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <div className="blog-intro__stat">400+</div>
                            <div className="blog-intro__stat-label">Designers Partnered</div>
                        </div>
                    </div>
                </div>

                {/* Benefits Grid */}
                <section style={{ marginBottom: '6rem' }}>
                    <div className="section-label">Benefits</div>
                    <h2 className="blog-section-title" style={{ marginBottom: '3rem' }}>What You Get as a <em style={{ color: 'var(--kr-red)' }}>Partner</em></h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
                        {[
                            { icon: <Briefcase />, title: 'Structured Execution Support', desc: 'We assist with project coordination, production planning, and on-site execution.' },
                            { icon: <Palette />, title: 'Material & Vendor Network', desc: 'Access reliable material sourcing and vendor connections at better rates.' },
                            { icon: <Share2 />, title: 'Process Framework', desc: 'Work with standardized workflows that improve efficiency and reduce confusion.' },
                            { icon: <Users />, title: 'Technical Assistance', desc: 'Get backend support for drawings, costing, and implementation guidance.' },
                            { icon: <TrendingUp />, title: 'Growth Opportunities', desc: 'Expand your capacity to take on larger projects with operational backing.' }
                        ].map((item, idx) => (
                            <div key={idx} className="blog-card">
                                <div className="blog-card__icon">{item.icon}</div>
                                <h3 className="blog-card__title">{item.title}</h3>
                                <p className="blog-card__desc">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Process */}
                <section style={{ marginBottom: '6rem' }}>
                    <div className="section-label">Onboarding</div>
                    <h2 className="blog-section-title">How It <em style={{ color: 'var(--kr-red)' }}>Works</em></h2>
                    <div className="blog-process">
                        {['Submit details & portfolio', 'Initial discussion & review', 'Onboarding & briefing', 'Begin collaborating on projects'].map((step, k) => (
                            <div key={k} className="blog-process__step">
                                <div className="blog-process__num">0{k + 1}</div>
                                <div>
                                    <h3 className="blog-process__content-title">{step}</h3>
                                    <p className="blog-process__content-desc">Simple, transparent, and growth-oriented steps to get started.</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Final Thought */}
                <div style={{ textAlign: 'center', margin: '4rem 0' }}>
                    <h3 className="blog-section-title" style={{ fontSize: '2rem' }}>Ready to Scale?</h3>
                    <p style={{ color: 'var(--kr-slate-3)', maxWidth: '600px', margin: '0 auto 2rem' }}>
                        Design talent deserves the right support system. Let's build something great together.
                    </p>
                    <a href="/contact-us" className="blog-hero__cta">
                        Join as Partner <ArrowRight size={18} />
                    </a>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default BecomeDesignPartner;
