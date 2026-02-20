import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import '../blogs/BlogArticle.css';
import { Gift, Heart, Users, Star, CheckCircle, ArrowRight } from 'lucide-react';

const ReferFriend = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="blog-page">
            <Navbar />

            <div className="blog-hero">
                <img
                    src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80"
                    alt="Referral Program"
                    className="blog-hero__image"
                />
                <div className="blog-hero__overlay">
                    <div className="blog-hero__content">

                        <h1 className="blog-hero__title">Share a Good Experience <br /><em style={{ color: 'var(--kr-gold)' }}>Earn Rewards</em></h1>
                        <p className="blog-hero__subtitle">
                            Help friends plan their interiors while you receive a token of our appreciation. Simple. Transparent. Rewarding.
                        </p>
                    </div>
                </div>
            </div>

            <div className="blog-body">
                {/* How It Works */}
                <section style={{ marginBottom: '6rem', marginTop: '4rem' }}>
                    <div className="section-label">Process</div>
                    <h2 className="blog-section-title" style={{ textAlign: 'center', marginBottom: '4rem' }}>How It <em style={{ color: 'var(--kr-red)' }}>Works</em></h2>
                    <div className="blog-process">
                        {[
                            { icon: <Users />, step: 'You refer a friend' },
                            { icon: <Gift />, step: 'We connect & discuss' },
                            { icon: <CheckCircle />, step: 'Project Executed' },
                            { icon: <Star />, step: 'Receive Reward' }
                        ].map((s, k) => (
                            <div key={k} className="blog-process__step" style={{ alignItems: 'center' }}>
                                <div className="blog-process__num" style={{ background: 'var(--kr-dark)', color: 'var(--kr-gold)' }}>0{k + 1}</div>
                                <div style={{ flex: 1 }}>
                                    <h3 className="blog-process__content-title">{s.step}</h3>
                                </div>
                                <div style={{ color: 'var(--kr-red)' }}>{s.icon}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Who to Refer Grid */}
                <section className="blog-intro" style={{ textAlign: 'center' }}>
                    <h2 className="blog-section-title" style={{ color: '#fff', marginBottom: '3rem' }}>Who Can You Refer?</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                        {['Friends planning a new home', 'Someone renovating existing home', 'Apartment buyers', 'Modular Kitchen needs'].map((who, i) => (
                            <div key={i} style={{ background: 'rgba(255,255,255,0.1)', padding: '1.5rem', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '1rem', justifyContent: 'center' }}>
                                <Heart size={20} color="var(--kr-gold)" />
                                <span style={{ fontSize: '1.05rem', color: '#fff' }}>{who}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Why Value */}
                <div style={{ textAlign: 'center', margin: '4rem 0' }}>
                    <h2 className="blog-section-title">Why We Value <em style={{ color: 'var(--kr-red)' }}>Referrals</em></h2>
                    <p style={{ color: 'var(--kr-slate-3)', maxWidth: '700px', margin: '0 auto 2rem' }}>
                        Referrals come from trust — and that matters to us. When someone is referred by an existing customer, the relationship starts with confidence.
                    </p>
                </div>

            </div>

            <Footer />
        </div>
    );
};

export default ReferFriend;
