import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import '../blogs/BlogArticle.css';
import { UserCheck, PieChart, MessageCircle, DollarSign, Handshake, Users, ArrowRight } from 'lucide-react';

const ChannelProgram = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="blog-page">
            <Navbar />

            <div className="blog-hero">
                <img
                    src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80"
                    alt="Channel Partner Collaboration"
                    className="blog-hero__image"
                />
                <div className="blog-hero__overlay">
                    <div className="blog-hero__content">

                        <h1 className="blog-hero__title">Collaborate. Refer. <br /><em style={{ color: 'var(--kr-gold)' }}>Grow Together</em></h1>
                        <p className="blog-hero__subtitle">
                            Connect clients who need quality interiors. Earn incentives. Build a long-term professional relationship based on trust and transparency.
                        </p>
                    </div>
                </div>
            </div>

            <div className="blog-body">
                {/* Intro Split */}
                <div className="blog-split">
                    <div className="blog-image-wrap">
                        <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80" alt="Professional Handshake" />
                        <div className="blog-image-caption">Partnership & Trust</div>
                    </div>
                    <div>
                        <div className="section-label">Who Can Join?</div>
                        <h2 className="blog-section-title">Ideal for <br /><em>Professionals</em></h2>
                        <p style={{ lineHeight: 1.8, color: 'var(--kr-slate-3)', marginBottom: '2rem' }}>
                            If you regularly interact with homeowners, this program helps you add value to their journey while earning for your network.
                        </p>
                        <div className="blog-checklist">
                            {['Real Estate Agents', 'Property Consultants', 'Architects & Builders', 'Brokers & Housing Advisors'].map((item, i) => (
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

                {/* Benefits */}
                <section style={{ marginBottom: '6rem' }}>
                    <div className="section-label">Why Partner?</div>
                    <h2 className="blog-section-title" style={{ marginBottom: '3rem' }}>Partner <em style={{ color: 'var(--kr-red)' }}>Benefits</em></h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {[
                            { icon: <DollarSign />, title: 'Referral Earnings', desc: 'Earn transparent incentives for every successful project.' },
                            { icon: <UserCheck />, title: 'Professional Support', desc: 'Your clients are handled by a structured team, ensuring trust.' },
                            { icon: <PieChart />, title: 'Transparent Process', desc: 'Clear updates on project status and payout milestones.' },
                            { icon: <Handshake />, title: 'Long-Term Growth', desc: 'Build a steady referral relationship, not just one-time deals.' }
                        ].map((item, idx) => (
                            <div key={idx} className="blog-card">
                                <div className="blog-card__icon">{item.icon}</div>
                                <h3 className="blog-card__title">{item.title}</h3>
                                <p className="blog-card__desc">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Process Steps */}
                <section style={{ marginBottom: '6rem' }}>
                    <div className="section-label">Workflow</div>
                    <h2 className="blog-section-title">How It <em style={{ color: 'var(--kr-red)' }}>Works</em></h2>
                    <div className="blog-process">
                        {['Refer a potential client', 'Connection & Discussion', 'Project Confirmation', 'Receive Referral Benefit'].map((step, k) => (
                            <div key={k} className="blog-process__step">
                                <div className="blog-process__num">0{k + 1}</div>
                                <div>
                                    <h3 className="blog-process__content-title">{step}</h3>
                                    <p className="blog-process__content-desc">Simple steps. No confusion.</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <div className="blog-dark-section" style={{ textAlign: 'center' }}>
                    <h2 className="blog-section-title" style={{ color: '#fff' }}>Start Referring</h2>
                    <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '2rem' }}>
                        Share your details to get onboarded as a Channel Partner.
                    </p>
                    <a href="/contact-us" className="blog-hero__cta" style={{ background: '#fff', color: 'var(--kr-red)' }}>
                        Register Now <ArrowRight size={18} />
                    </a>
                </div>

            </div>

            <Footer />
        </div>
    );
};

export default ChannelProgram;
