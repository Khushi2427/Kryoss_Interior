import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar';

import '../blogs/BlogArticle.css';
import { Shield, FileText, Lock, AlertCircle, CheckCircle } from 'lucide-react';

const PartnerPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="blog-page">
            <Navbar />

            <div className="blog-hero">
                <img
                    src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80"
                    alt="Policy & Documents"
                    className="blog-hero__image"
                />
                <div className="blog-hero__overlay">
                    <div className="blog-hero__content">

                        <h1 className="blog-hero__title">Partner Policy & <br /><em style={{ color: 'var(--kr-gold)' }}>Ethics</em></h1>
                        <p className="blog-hero__subtitle">
                            Clear Guidelines. Ethical Collaboration. Long-Term Trust. Ensuring smooth collaboration and mutual respect.
                        </p>
                    </div>
                </div>
            </div>

            <div className="blog-body">
                {/* Intro */}
                <div className="blog-split">
                    <div className="blog-image-wrap">
                        <img src="https://images.unsplash.com/photo-1521791136064-7985c271804a?auto=format&fit=crop&q=80" alt="Ethical Business" />
                    </div>
                    <div>
                        <div className="section-label">Overview</div>
                        <h2 className="blog-section-title">Scope of <br /><em>Policy</em></h2>
                        <p style={{ lineHeight: 1.8, color: 'var(--kr-slate-3)', marginBottom: '2rem' }}>
                            This policy outlines the principles and expectations for all partners: Channel Partners, Design Partners, Franchise Partners, and Referral Associates. We value transparency above all.
                        </p>
                    </div>
                </div>

                {/* Core Principles Grid */}
                <section style={{ marginBottom: '6rem' }}>
                    <h2 className="blog-section-title" style={{ marginBottom: '3rem' }}>Core <em style={{ color: 'var(--kr-red)' }}>Principles</em></h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {[
                            { icon: <CheckCircle />, title: 'Ethical Practices', desc: 'We conduct business with honesty and integrity.' },
                            { icon: <Lock />, title: 'Confidentiality', desc: 'Client data and business details are protected strictly.' },
                            { icon: <Shield />, title: 'Trust', desc: 'Building relationships based on mutual respect.' },
                            { icon: <FileText />, title: 'Transparency', desc: 'Clear terms, payouts, and communication.' }
                        ].map((item, idx) => (
                            <div key={idx} className="blog-card">
                                <div className="blog-card__icon">{item.icon}</div>
                                <h3 className="blog-card__title">{item.title}</h3>
                                <p className="blog-card__desc">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Detailed Sections */}
                <div className="blog-process" style={{ background: '#fff', border: '1px solid var(--kr-border)' }}>
                    {[
                        { title: 'Referral & Leads', desc: 'Referrals must be genuine. Client consent is mandatory before sharing details. Duplicate leads will be verified.' },
                        { title: 'Commission & Payouts', desc: 'Commission terms are shared during onboarding. Payouts are milestone-based and honoured transparently.' },
                        { title: 'Data Protection', desc: 'Client data must never be misused or shared externally. Any breach may lead to immediate termination.' },
                        { title: 'Termination Policy', desc: 'Partnership may be discontinued if ethical standards are violated or false information is shared.' }
                    ].map((sec, k) => (
                        <div key={k} style={{ marginBottom: '3rem', borderBottom: k !== 3 ? '1px solid #eee' : 'none', paddingBottom: '2rem' }}>
                            <h3 style={{ fontSize: '1.4rem', fontFamily: 'Cormorant Garamond, serif', color: 'var(--kr-slate)', marginBottom: '1rem', fontWeight: 600 }}>{sec.title}</h3>
                            <p style={{ color: 'var(--kr-slate-3)', lineHeight: 1.7 }}>{sec.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Final Note */}
                <div className="blog-dark-section" style={{ textAlign: 'center', marginTop: '4rem' }}>
                    <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.9)' }}>
                        A strong partnership is built on clarity. This policy ensures we move forward together securely.
                    </p>
                </div>
            </div>


        </div>
    );
};

export default PartnerPolicy;
