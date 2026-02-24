import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import franchise from '../../assets/more/franchisepartner.png';
import franchise2 from '../../assets/more/franchise2.png';
import '../blogs/BlogArticle.css';
import { Building, TrendingUp, Users, ShieldCheck, CheckSquare, ArrowRight, BarChart } from 'lucide-react';

const BecomeFranchisee = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="blog-page">
            <Navbar />

            <div className="blog-hero">
                <img
                    src={franchise}
                    alt="Franchise Opportunity"
                    className="blog-hero__image"
                />
                <div className="blog-hero__overlay">
                    <div className="blog-hero__content">

                        <h1 className="blog-hero__title">Become a <br /><em style={{ color: 'var(--kr-gold)' }}>Franchise Partner</em></h1>
                        <p className="blog-hero__subtitle">
                            Build Your Own Interior Business with the Right Support. Enter the interior industry with a structured framework and established brand.
                        </p>
                    </div>
                </div>
            </div>

            <div className="blog-body">
                {/* Intro Split */}
                <div className="blog-split">
                    <div className="blog-image-wrap">
                        <img src={franchise2} alt="Business Planning" />
                    </div>
                    <div>
                        <div className="section-label">Why Franchise?</div>
                        <h2 className="blog-section-title">Tap Into a <br /><em>Growing Market</em></h2>
                        <p style={{ lineHeight: 1.8, color: 'var(--kr-slate-3)', marginBottom: '2rem' }}>
                            The demand for organized, professionally managed interior services is at an all-time high. Homeowners today look for transparent pricing, reliable timelines, and structured execution.
                        </p>
                        <div className="blog-checklist">
                            {['Transparent pricing model', 'Reliable timelines & delivery', 'Durable material standards', 'Structured execution process'].map((item, i) => (
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

                {/* Benefits -- Feature Cards */}
                <section style={{ marginBottom: '6rem' }}>
                    <div className="section-label">Franchise Benefits</div>
                    <h2 className="blog-section-title" style={{ marginBottom: '3rem' }}>What You Get as a <em style={{ color: 'var(--kr-red)' }}>Partner</em></h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
                        {[
                            { icon: <Building />, title: 'Brand Association', desc: 'Operate under an established interior brand with a structured identity.' },
                            { icon: <ShieldCheck />, title: 'Business Framework', desc: 'Work with a predefined system for design, costing, execution, and client management.' },
                            { icon: <Users />, title: 'Training & Onboarding', desc: 'Receive guidance on processes, sales approach, and project coordination.' },
                            { icon: <CheckSquare />, title: 'Operational Support', desc: 'Assistance with backend systems, vendor network, and workflow management.' },
                            { icon: <TrendingUp />, title: 'Marketing Guidance', desc: 'Support for local branding and lead generation strategies.' }
                        ].map((item, idx) => (
                            <div key={idx} className="blog-card">
                                <div className="blog-card__icon">{item.icon}</div>
                                <h3 className="blog-card__title">{item.title}</h3>
                                <p className="blog-card__desc">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Dark Section: Ideal For */}
                <div className="blog-dark-section">
                    <h2 className="blog-section-title" style={{ color: '#fff', textAlign: 'center', marginBottom: '3rem' }}>Who Is This Ideal For?</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                        {['Entrepreneurs entering the interior business', 'Builders expanding into interiors', 'Existing designers wanting structured systems', 'Investors looking for a scalable opportunity'].map((who, j) => (
                            <div key={j} style={{ background: 'rgba(255,255,255,0.1)', padding: '1.5rem', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '1rem', border: '1px solid rgba(255,255,255,0.2)' }}>
                                <BarChart size={24} color="var(--kr-gold)" />
                                <span style={{ fontSize: '1.1rem', fontWeight: 500 }}>{who}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Steps */}
                <section style={{ marginBottom: '6rem' }}>
                    <div className="section-label">Get Started</div>
                    <h2 className="blog-section-title">How to <em style={{ color: 'var(--kr-red)' }}>Begin</em></h2>
                    <div className="blog-process">
                        {['Submit your application', 'Initial discussion & evaluation', 'Business plan review', 'Onboarding & training', 'Launch & operational setup'].map((step, k) => (
                            <div key={k} className="blog-process__step">
                                <div className="blog-process__num">0{k + 1}</div>
                                <div>
                                    <h3 className="blog-process__content-title">{step}</h3>
                                    <p className="blog-process__content-desc">Clear steps to launch your business with confidence.</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <div style={{ textAlign: 'center', margin: '4rem 0' }}>
                    <h3 className="blog-section-title" style={{ fontSize: '2rem' }}>Start Your Journey</h3>
                    <p style={{ color: 'var(--kr-slate-3)', maxWidth: '600px', margin: '0 auto 2rem' }}>
                        If you're ready to build something long-term in the interior industry, let’s explore the opportunity together.
                    </p>
                    <a href="/contact-us" className="blog-hero__cta">
                        Apply Now <ArrowRight size={18} />
                    </a>
                </div>

            </div>


        </div>
    );
};

export default BecomeFranchisee;
